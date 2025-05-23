
import React, { useEffect, useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, FlaskConical, Share2, Loader2, Plus, Edit, Trash2 } from "lucide-react";
import { ExperimentalCommonsAPI, ExperimentalCommonsEntry } from "@/services/api";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useToast } from "@/components/ui/use-toast";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { supabase } from "@/integrations/supabase/client";

const ExperimentalCommons = () => {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [user, setUser] = useState<any>(null);
  const [isCreatingExperiment, setIsCreatingExperiment] = useState(false);
  const [isEditingExperiment, setIsEditingExperiment] = useState(false);
  const [currentExperiment, setCurrentExperiment] = useState<ExperimentalCommonsEntry | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentFilter, setCurrentFilter] = useState("all");

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

  // Query experiments
  const { data: experiments, isLoading } = useQuery({
    queryKey: ["experiments"],
    queryFn: ExperimentalCommonsAPI.getAll,
  });

  // Mutations
  const createExperimentMutation = useMutation({
    mutationFn: ExperimentalCommonsAPI.create,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["experiments"] });
      toast({ title: "Success", description: "Experiment created successfully" });
      setIsCreatingExperiment(false);
    },
    onError: (error) => {
      toast({ title: "Error", description: error.message, variant: "destructive" });
    }
  });

  const updateExperimentMutation = useMutation({
    mutationFn: ({ id, experiment }: { id: string, experiment: ExperimentalCommonsEntry }) => 
      ExperimentalCommonsAPI.update(id, experiment),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["experiments"] });
      toast({ title: "Success", description: "Experiment updated successfully" });
      setIsEditingExperiment(false);
      setCurrentExperiment(null);
    },
    onError: (error) => {
      toast({ title: "Error", description: error.message, variant: "destructive" });
    }
  });

  const deleteExperimentMutation = useMutation({
    mutationFn: ExperimentalCommonsAPI.delete,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["experiments"] });
      toast({ title: "Success", description: "Experiment deleted successfully" });
    },
    onError: (error) => {
      toast({ title: "Error", description: error.message, variant: "destructive" });
    }
  });

  const handleCreateExperiment = async (experiment: ExperimentalCommonsEntry) => {
    createExperimentMutation.mutate({
      ...experiment,
      user_id: user?.id,
    });
  };

  const handleUpdateExperiment = async (experiment: ExperimentalCommonsEntry) => {
    if (currentExperiment?.id) {
      updateExperimentMutation.mutate({
        id: currentExperiment.id,
        experiment: {
          ...experiment,
          user_id: user?.id,
        }
      });
    }
  };

  const handleDeleteExperiment = async (id: string) => {
    if (confirm("Are you sure you want to delete this experiment?")) {
      deleteExperimentMutation.mutate(id);
    }
  };

  const handleEditExperiment = (experiment: ExperimentalCommonsEntry) => {
    setCurrentExperiment(experiment);
    setIsEditingExperiment(true);
  };

  // Filter and search experiments
  const filteredExperiments = experiments?.filter(exp => {
    const matchesSearch = searchTerm === "" || 
      exp.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      exp.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (currentFilter === "all") return matchesSearch;
    if (currentFilter === "featured") return matchesSearch && exp.tags?.includes("featured");
    if (currentFilter === "replicated") return matchesSearch && exp.status === "replicated";
    if (currentFilter === "seeking") return matchesSearch && exp.status === "seeking replication";
    
    return matchesSearch;
  });

  return (
    <div className="min-h-screen cosmic-gradient">
      <div className="fractal-pattern min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow container py-8 md:py-12 px-4 md:px-6">
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-3xl md:text-4xl font-bold glow">
                Experimental Commons
              </h1>
              {user && (
                <Button 
                  onClick={() => setIsCreatingExperiment(true)}
                  className="flex items-center gap-2"
                >
                  <Plus className="w-4 h-4" /> New Experiment
                </Button>
              )}
            </div>
            <p className="text-base md:text-xl text-muted-foreground max-w-4xl">
              Share lab reports, raw data, videos, and replication instructions.
              Build upon the work of others and contribute to open scientific
              discovery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">
            <div className="bg-card/50 backdrop-blur p-4 md:p-6 rounded-lg border border-border">
              <FlaskConical className="w-8 h-8 md:w-10 md:h-10 text-primary mb-3 md:mb-4" />
              <h3 className="text-lg md:text-xl font-bold mb-2">Upload Experiments</h3>
              <p className="text-sm md:text-base text-muted-foreground">
                Share your experimental data, methodologies, and results with the
                scientific community.
              </p>
            </div>
            <div className="bg-card/50 backdrop-blur p-4 md:p-6 rounded-lg border border-border">
              <FileText className="w-8 h-8 md:w-10 md:h-10 text-secondary mb-3 md:mb-4" />
              <h3 className="text-lg md:text-xl font-bold mb-2">Document Methods</h3>
              <p className="text-sm md:text-base text-muted-foreground">
                Create detailed step-by-step guides for others to replicate your
                experimental procedures.
              </p>
            </div>
            <div className="bg-card/50 backdrop-blur p-4 md:p-6 rounded-lg border border-border">
              <Share2 className="w-8 h-8 md:w-10 md:h-10 text-accent mb-3 md:mb-4" />
              <h3 className="text-lg md:text-xl font-bold mb-2">Track Replications</h3>
              <p className="text-sm md:text-base text-muted-foreground">
                Monitor who is replicating your experiments and the results they
                are achieving.
              </p>
            </div>
          </div>

          <div className="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <h2 className="text-xl md:text-2xl font-bold">Recent Experiments</h2>
            <div className="flex flex-col sm:flex-row w-full sm:w-auto gap-3">
              <Input 
                className="w-full sm:w-64" 
                placeholder="Search experiments..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              {user && (
                <Button 
                  className="w-full sm:w-auto"
                  onClick={() => setIsCreatingExperiment(true)}
                >
                  Upload New
                </Button>
              )}
            </div>
          </div>

          <Tabs defaultValue="all" value={currentFilter} onValueChange={setCurrentFilter}>
            <div className="mb-6 overflow-x-auto">
              <TabsList className="inline-flex min-w-max">
                <TabsTrigger value="all">All Experiments</TabsTrigger>
                <TabsTrigger value="featured">Featured</TabsTrigger>
                <TabsTrigger value="replicated">Most Replicated</TabsTrigger>
                <TabsTrigger value="seeking">Seeking Replication</TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value={currentFilter} className="mt-0">
              {isLoading ? (
                <div className="flex justify-center py-12">
                  <Loader2 className="w-8 h-8 animate-spin text-primary" />
                </div>
              ) : filteredExperiments && filteredExperiments.length > 0 ? (
                <div className="grid grid-cols-1 gap-4">
                  {filteredExperiments.map((experiment: ExperimentalCommonsEntry) => (
                    <Card key={experiment.id} className="bg-card/50 backdrop-blur">
                      <CardHeader className="pb-2">
                        <div className="flex flex-col sm:flex-row justify-between gap-2">
                          <CardTitle className="text-lg md:text-xl">{experiment.title}</CardTitle>
                          <span className="text-xs sm:text-sm bg-primary/20 text-primary-foreground px-3 py-1 rounded-full w-max">
                            {experiment.status || "Draft"}
                          </span>
                        </div>
                        <CardDescription>
                          Created: {new Date(experiment.created_at!).toLocaleDateString()}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="mb-4">{experiment.description}</p>
                        <div className="flex flex-wrap gap-2 my-2">
                          {experiment.tags?.map((tag, i) => (
                            <span key={i} className="text-xs bg-muted px-2 py-1 rounded-md">
                              #{tag}
                            </span>
                          ))}
                        </div>
                      </CardContent>
                      <CardFooter className="flex flex-col sm:flex-row gap-2 justify-between">
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm" className="w-full sm:w-auto">View Details</Button>
                          <Button size="sm" className="w-full sm:w-auto">Replicate</Button>
                        </div>
                        {user && user.id === experiment.user_id && (
                          <div className="flex gap-2">
                            <Button 
                              variant="ghost" 
                              size="sm" 
                              onClick={() => handleEditExperiment(experiment)}
                            >
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button 
                              variant="destructive" 
                              size="sm"
                              onClick={() => handleDeleteExperiment(experiment.id!)}
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        )}
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="p-8 text-center text-muted-foreground">
                  No experiments found. Be the first to upload one!
                </div>
              )}
            </TabsContent>
          </Tabs>

          {/* Create Experiment Dialog */}
          <Dialog 
            open={isCreatingExperiment} 
            onOpenChange={(open) => setIsCreatingExperiment(open)}
          >
            <DialogContent className="max-w-4xl">
              <DialogHeader>
                <DialogTitle>Create New Experiment</DialogTitle>
              </DialogHeader>
              <div className="py-4">
                <ExperimentForm 
                  onSubmit={handleCreateExperiment} 
                  initialData={{
                    title: "",
                    description: "",
                    methodology: "",
                    results: "",
                    status: "draft",
                    tags: []
                  }}
                />
              </div>
            </DialogContent>
          </Dialog>

          {/* Edit Experiment Dialog */}
          <Dialog 
            open={isEditingExperiment} 
            onOpenChange={(open) => {
              setIsEditingExperiment(open);
              if (!open) setCurrentExperiment(null);
            }}
          >
            <DialogContent className="max-w-4xl">
              <DialogHeader>
                <DialogTitle>Edit Experiment</DialogTitle>
              </DialogHeader>
              <div className="py-4">
                {currentExperiment && (
                  <ExperimentForm 
                    onSubmit={handleUpdateExperiment} 
                    initialData={currentExperiment}
                  />
                )}
              </div>
            </DialogContent>
          </Dialog>

        </main>
        <Footer />
      </div>
    </div>
  );
};

interface ExperimentFormProps {
  onSubmit: (experiment: ExperimentalCommonsEntry) => void;
  initialData: ExperimentalCommonsEntry;
}

const ExperimentForm: React.FC<ExperimentFormProps> = ({ onSubmit, initialData }) => {
  const [formData, setFormData] = useState<ExperimentalCommonsEntry>(initialData);
  const [tagInput, setTagInput] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAddTag = () => {
    if (tagInput.trim()) {
      setFormData({
        ...formData,
        tags: [...(formData.tags || []), tagInput.trim()],
      });
      setTagInput("");
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setFormData({
      ...formData,
      tags: (formData.tags || []).filter((tag) => tag !== tagToRemove),
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <Label htmlFor="title">Title</Label>
        <Input
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          rows={3}
          required
        />
      </div>

      <div>
        <Label htmlFor="methodology">Methodology</Label>
        <Textarea
          id="methodology"
          name="methodology"
          value={formData.methodology || ""}
          onChange={handleChange}
          rows={5}
        />
      </div>

      <div>
        <Label htmlFor="results">Results</Label>
        <Textarea
          id="results"
          name="results"
          value={formData.results || ""}
          onChange={handleChange}
          rows={5}
        />
      </div>

      <div>
        <Label htmlFor="status">Status</Label>
        <Select
          value={formData.status || "draft"}
          onValueChange={(value) => handleSelectChange("status", value)}
        >
          <SelectTrigger id="status">
            <SelectValue placeholder="Select status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="draft">Draft</SelectItem>
            <SelectItem value="active">Active</SelectItem>
            <SelectItem value="seeking replication">Seeking Replication</SelectItem>
            <SelectItem value="replicated">Replicated</SelectItem>
            <SelectItem value="completed">Completed</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="tags">Tags</Label>
        <div className="flex gap-2">
          <Input
            id="tags"
            value={tagInput}
            onChange={(e) => setTagInput(e.target.value)}
            placeholder="Add a tag"
          />
          <Button type="button" onClick={handleAddTag}>
            Add
          </Button>
        </div>

        {formData.tags && formData.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2">
            {formData.tags.map((tag, index) => (
              <div
                key={index}
                className="flex items-center gap-1 bg-primary/20 px-2 py-1 rounded-md"
              >
                <span className="text-sm">{tag}</span>
                <button
                  type="button"
                  onClick={() => handleRemoveTag(tag)}
                  className="text-xs hover:text-destructive"
                >
                  &times;
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="flex justify-end">
        <Button type="submit">Save Experiment</Button>
      </div>
    </form>
  );
};

export default ExperimentalCommons;
