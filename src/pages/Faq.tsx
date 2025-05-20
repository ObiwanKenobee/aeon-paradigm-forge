
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { HelpCircle } from "lucide-react";

const Faq = () => {
  const faqs = [
    {
      question: "What is Aeon Labs?",
      answer: "Aeon Labs is a scientific metaplatform for decentralized, cross-disciplinary, and open-source research. We provide tools and infrastructure for collaborative scientific discovery outside traditional institutions."
    },
    {
      question: "How is Aeon Labs different from traditional academic platforms?",
      answer: "Unlike traditional platforms, Aeon Labs is built on principles of open access, decentralized funding, and cross-disciplinary collaboration. We don't require academic credentials, use community-driven peer review, and prioritize transparency in all research processes."
    },
    {
      question: "Do I need academic credentials to participate?",
      answer: "No. Aeon Labs is open to anyone with a passion for scientific inquiry, regardless of formal credentials. We evaluate contributions based on merit, methodology, and evidence, not on academic titles."
    },
    {
      question: "How is research funded on Aeon Labs?",
      answer: "Research is funded through various mechanisms including community grant pools, direct crowdfunding, patron subscriptions, and bounties for specific research questions. Our DAO-style governance allows the community to participate in funding decisions."
    },
    {
      question: "How do you ensure scientific rigor and quality?",
      answer: "We implement open peer review, transparent methodologies, and prioritize replication. Our Replication Map tracks which experiments have been successfully reproduced. Additionally, our Paradigm Council establishes ethical and methodological guidelines."
    },
    {
      question: "What is the Theory Forge module?",
      answer: "Theory Forge is our collaborative platform for developing theoretical frameworks. It includes tools for documenting hypotheses, mathematical models, and theoretical predictions with support for markdown, LaTeX, and version control."
    },
    {
      question: "How does the Experimental Commons work?",
      answer: "Experimental Commons is our repository for sharing experimental data, protocols, and results. Researchers upload detailed methodologies, raw data, and video documentation to allow others to reproduce and build upon their work."
    },
    {
      question: "What type of science can I do on Aeon Labs?",
      answer: "Any field of scientific inquiry is welcome, from physics and biology to consciousness studies and novel energy research. We particularly encourage work that crosses traditional disciplinary boundaries."
    },
    {
      question: "How do I get started with Aeon Labs?",
      answer: "Create an account, select your role and areas of interest, and join the community. You can start by exploring existing projects, contributing to discussions, or launching your own research initiative."
    },
    {
      question: "Is Aeon Labs open source?",
      answer: "Yes, the Aeon Labs platform itself is open source, and all research conducted through our platform is made available under open access principles."
    }
  ];

  return (
    <div className="min-h-screen cosmic-gradient">
      <div className="fractal-pattern min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow container py-8 md:py-12 px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <HelpCircle className="h-8 w-8 text-primary" />
              <h1 className="text-3xl md:text-4xl font-bold glow">Frequently Asked Questions</h1>
            </div>
            
            <p className="text-base md:text-xl text-muted-foreground mb-8">
              Find answers to common questions about Aeon Labs and our scientific metaplatform.
            </p>

            <Card className="bg-card/50 backdrop-blur">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left px-6 py-4 hover:no-underline hover:bg-background/50">
                      <span className="text-base md:text-lg font-medium">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 pt-2">
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Card>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Faq;
