
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { TheoryForgeEntry } from "@/services/api";

interface TheoryEditorProps {
  onSave: (theory: TheoryForgeEntry) => void;
  initialTheory: TheoryForgeEntry;
}

const TheoryEditor = ({ onSave, initialTheory }: TheoryEditorProps) => {
  const [theory, setTheory] = useState<TheoryForgeEntry>(initialTheory);
  const [tagInput, setTagInput] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setTheory({
      ...theory,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddTag = () => {
    if (tagInput.trim()) {
      setTheory({
        ...theory,
        tags: [...(theory.tags || []), tagInput.trim()],
      });
      setTagInput("");
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setTheory({
      ...theory,
      tags: (theory.tags || []).filter((tag) => tag !== tagToRemove),
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(theory);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <Label htmlFor="title">Title</Label>
        <Input
          id="title"
          name="title"
          value={theory.title}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <Label htmlFor="content">Content</Label>
        <Textarea
          id="content"
          name="content"
          value={theory.content}
          onChange={handleChange}
          rows={10}
          required
          className="font-mono"
        />
        <p className="text-xs text-muted-foreground mt-1">
          Supports Markdown and LaTeX syntax.
        </p>
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

        {theory.tags && theory.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2">
            {theory.tags.map((tag, index) => (
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
        <Button type="submit">Save Theory</Button>
      </div>
    </form>
  );
};

export default TheoryEditor;
