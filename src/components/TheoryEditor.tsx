
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

const TheoryEditor = () => {
  const [markdown, setMarkdown] = useState("# My Theory\n\nIntroduce your hypothesis here...\n\nFor mathematical expressions, use LaTeX syntax: $E = mc^2$\n\n## Methods\n\nDescribe your methods...\n\n## Conclusions\n\nState your conclusions...");

  // This would be replaced with a real Markdown/LaTeX renderer
  const renderPreview = () => {
    return (
      <div className="prose prose-invert max-w-none">
        <div dangerouslySetInnerHTML={{ __html: markdown
          .replace(/# (.*?)\n/g, '<h1>$1</h1>')
          .replace(/## (.*?)\n/g, '<h2>$1</h2>')
          .replace(/\n\n/g, '<br><br>')
          .replace(/\$(.*?)\$/g, '<code class="bg-muted p-1 rounded text-primary">$1</code>')
        }} />
      </div>
    );
  };

  return (
    <Card className="w-full border border-border bg-card/50 backdrop-blur">
      <CardHeader>
        <CardTitle>Theory Forge</CardTitle>
        <CardDescription>
          Document your theories, hypotheses and derivations with support for Markdown and LaTeX.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-4 space-y-2">
          <Input 
            placeholder="Title your theory"
            className="text-lg font-medium"
            defaultValue="Quantum Coherence in Biological Systems"
          />
          
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" size="sm">
              #quantum-biology
            </Button>
            <Button variant="outline" size="sm">
              #consciousness
            </Button>
            <Button variant="outline" size="sm" className="bg-primary/10">
              + Add Tag
            </Button>
          </div>
        </div>
        
        <Tabs defaultValue="edit">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="edit">Edit</TabsTrigger>
            <TabsTrigger value="preview">Preview</TabsTrigger>
          </TabsList>
          <TabsContent value="edit" className="min-h-[300px]">
            <Textarea
              className="min-h-[300px] font-mono resize-none bg-muted/50"
              value={markdown}
              onChange={(e) => setMarkdown(e.target.value)}
            />
          </TabsContent>
          <TabsContent value="preview" className="min-h-[300px] p-4 bg-muted/20 rounded-md overflow-auto">
            {renderPreview()}
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Save Draft</Button>
        <Button>Submit to Community</Button>
      </CardFooter>
    </Card>
  );
};

export default TheoryEditor;
