
import React, { useEffect, useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TheoryEditor from "@/components/TheoryEditor";
import { Button } from "@/components/ui/button";
import { 
  FileText, 
  BookOpen, 
  Users, 
  Loader2, 
  Plus, 
  Trash2, 
  Edit 
} from "lucide-react";
import { TheoryForgeAPI, TheoryForgeEntry } from "@/services/api";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";

const TheoryForge = () => {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [isCreatingTheory, setIsCreatingTheory] = useState(false);
  const [isEditingTheory, setIsEditingTheory] = useState(false);
  const [currentTheory, setCurrentTheory] = useState<TheoryForgeEntry | null>(null);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const checkUser = async () => {
      const { data } = await supabase.auth.getSession();
      setUser(data.session?.user || null);
    };
    
    checkUser();
    
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setUser(session?.user || null);
      }
    );
    
    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  // Query theories
  const { data: theories, isLoading } = useQuery({
    queryKey: ["theories"],
    queryFn: TheoryForgeAPI.getAll,
  });

  // Mutations
  const createTheoryMutation = useMutation({
    mutationFn: TheoryForgeAPI.create,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["theories"] });
      toast({ title: "Success", description: "Theory created successfully" });
      setIsCreatingTheory(false);
    },
    onError: (error) => {
      toast({ title: "Error", description: error.message, variant: "destructive" });
    }
  });

  const updateTheoryMutation = useMutation({
    mutationFn: ({ id, theory }: { id: string, theory: TheoryForgeEntry }) => 
      TheoryForgeAPI.update(id, theory),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["theories"] });
      toast({ title: "Success", description: "Theory updated successfully" });
      setIsEditingTheory(false);
      setCurrentTheory(null);
    },
    onError: (error) => {
      toast({ title: "Error", description: error.message, variant: "destructive" });
    }
  });

  const deleteTheoryMutation = useMutation({
    mutationFn: TheoryForgeAPI.delete,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["theories"] });
      toast({ title: "Success", description: "Theory deleted successfully" });
    },
    onError: (error) => {
      toast({ title: "Error", description: error.message, variant: "destructive" });
    }
  });

  const handleCreateTheory = async (theory: TheoryForgeEntry) => {
    createTheoryMutation.mutate({
      ...theory,
      user_id: user?.id,
    });
  };

  const handleUpdateTheory = async (theory: TheoryForgeEntry) => {
    if (currentTheory?.id) {
      updateTheoryMutation.mutate({
        id: currentTheory.id,
        theory: {
          ...theory,
          user_id: user?.id,
        }
      });
    }
  };

  const handleDeleteTheory = async (id: string) => {
    if (confirm("Are you sure you want to delete this theory?")) {
      deleteTheoryMutation.mutate(id);
    }
  };

  const handleEditTheory = (theory: TheoryForgeEntry) => {
    setCurrentTheory(theory);
    setIsEditingTheory(true);
  };

  return (
    <div className="min-h-screen cosmic-gradient">
      <div className="fractal-pattern min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow container py-8 md:py-12 px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <div className="flex justify-between items-center">
                <h1 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4 glow">Theory Forge</h1>
                {user && (
                  <Button 
                    onClick={() => setIsCreatingTheory(true)}
                    className="flex items-center gap-2"
                  >
                    <Plus className="w-4 h-4" /> New Theory
                  </Button>
                )}
              </div>
              <p className="text-base md:text-xl text-muted-foreground">
                Collaborate on theoretical frameworks with Markdown, LaTeX, and
                peer review. Document your hypotheses and connect with
                like-minded researchers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">
              <div className="bg-card/50 backdrop-blur p-4 md:p-6 rounded-lg border border-border">
                <FileText className="w-8 h-8 md:w-10 md:h-10 text-primary mb-3 md:mb-4" />
                <h3 className="text-lg md:text-xl font-bold mb-2">Document</h3>
                <p className="text-sm md:text-base text-muted-foreground">
                  Write and format theories using Markdown and LaTeX syntax for
                  mathematical expressions.
                </p>
              </div>
              <div className="bg-card/50 backdrop-blur p-4 md:p-6 rounded-lg border border-border">
                <BookOpen className="w-8 h-8 md:w-10 md:h-10 text-secondary mb-3 md:mb-4" />
                <h3 className="text-lg md:text-xl font-bold mb-2">Publish</h3>
                <p className="text-sm md:text-base text-muted-foreground">
                  Share your theories with the community and receive constructive
                  feedback and reviews.
                </p>
              </div>
              <div className="bg-card/50 backdrop-blur p-4 md:p-6 rounded-lg border border-border">
                <Users className="w-8 h-8 md:w-10 md:h-10 text-accent mb-3 md:mb-4" />
                <h3 className="text-lg md:text-xl font-bold mb-2">Collaborate</h3>
                <p className="text-sm md:text-base text-muted-foreground">
                  Connect with researchers across disciplines to refine and
                  evolve your theoretical frameworks.
                </p>
              </div>
            </div>

            {isLoading ? (
              <div className="flex justify-center py-12">
                <Loader2 className="w-8 h-8 animate-spin text-primary" />
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {theories?.map((theory: TheoryForgeEntry) => (
                  <Card key={theory.id} className="bg-card/50 backdrop-blur">
                    <CardHeader>
                      <CardTitle className="truncate">{theory.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="prose prose-sm dark:prose-invert max-h-24 overflow-hidden text-ellipsis">
                        {theory.content.substring(0, 100)}
                        {theory.content.length > 100 && "..."}
                      </div>
                      {theory.tags && theory.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-4">
                          {theory.tags.map((tag, i) => (
                            <span key={i} className="text-xs bg-primary/20 px-2 py-0.5 rounded-md">
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <div className="text-xs text-muted-foreground">
                        {new Date(theory.created_at!).toLocaleDateString()}
                      </div>
                      <div className="flex gap-2">
                        {user && user.id === theory.user_id && (
                          <>
                            <Button 
                              variant="ghost" 
                              size="sm" 
                              onClick={() => handleEditTheory(theory)}
                            >
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button 
                              variant="destructive" 
                              size="sm"
                              onClick={() => handleDeleteTheory(theory.id!)}
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </>
                        )}
                      </div>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            )}

            {/* Create Theory Dialog */}
            <Dialog 
              open={isCreatingTheory} 
              onOpenChange={(open) => setIsCreatingTheory(open)}
            >
              <DialogContent className="max-w-4xl">
                <DialogHeader>
                  <DialogTitle>Create New Theory</DialogTitle>
                </DialogHeader>
                <div className="py-4">
                  <TheoryEditor 
                    onSave={handleCreateTheory} 
                    initialTheory={{
                      title: "",
                      content: "",
                      tags: []
                    }}
                  />
                </div>
              </DialogContent>
            </Dialog>

            {/* Edit Theory Dialog */}
            <Dialog 
              open={isEditingTheory} 
              onOpenChange={(open) => {
                setIsEditingTheory(open);
                if (!open) setCurrentTheory(null);
              }}
            >
              <DialogContent className="max-w-4xl">
                <DialogHeader>
                  <DialogTitle>Edit Theory</DialogTitle>
                </DialogHeader>
                <div className="py-4">
                  {currentTheory && (
                    <TheoryEditor 
                      onSave={handleUpdateTheory} 
                      initialTheory={currentTheory}
                    />
                  )}
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default TheoryForge;
