
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const TheoryForgeDemo = () => {
  const sampleTheory = {
    title: "Quantum Consciousness Framework",
    content: `# Quantum Consciousness Framework

## Abstract
This theoretical framework proposes a connection between quantum mechanical processes and consciousness phenomena.

## Key Concepts
- **Quantum Coherence**: The state of quantum systems that may relate to conscious awareness
- **Information Integration**: How quantum information processing might explain unified conscious experience
- **Observer Effect**: The role of consciousness in quantum measurement

## Mathematical Foundation
The wave function ψ represents the superposition of conscious states:

ψ = α|conscious⟩ + β|unconscious⟩

Where |α|² + |β|² = 1

## Experimental Predictions
1. Consciousness should demonstrate quantum-like properties
2. Entanglement effects in neural networks
3. Measurement-induced consciousness transitions`,
    tags: ["quantum", "consciousness", "theoretical-physics"]
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          {sampleTheory.title}
          <Button asChild size="sm">
            <Link to="/theory-forge">Try It Live</Link>
          </Button>
        </CardTitle>
        <CardDescription>
          Interactive demo of the Theory Forge editor with markdown and LaTeX support
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {sampleTheory.tags.map((tag, index) => (
              <span 
                key={index} 
                className="px-2 py-1 bg-primary/20 rounded-md text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="bg-muted/30 p-4 rounded-lg">
            <pre className="whitespace-pre-wrap text-sm font-mono">
              {sampleTheory.content}
            </pre>
          </div>
          <div className="text-center">
            <Button asChild>
              <Link to="/theory-forge">Start Creating Theories</Link>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TheoryForgeDemo;
