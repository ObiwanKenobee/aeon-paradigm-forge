
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DollarSign, Users, Award } from "lucide-react";

const GrantPools = () => {
  const grants = [
    {
      title: "Quantum Consciousness Research Initiative",
      description: "Investigating the quantum mechanical basis of consciousness through novel experimental approaches",
      amount: 50000,
      raised: 32500,
      days: 18,
      contributors: 47
    },
    {
      title: "Open Source Fusion Replication Project",
      description: "Building an open hardware platform for replicating and validating fusion energy experiments",
      amount: 75000,
      raised: 62000,
      days: 25,
      contributors: 89
    },
    {
      title: "Crop Circle Formation Analysis",
      description: "Comprehensive scientific analysis of electromagnetic and physical anomalies in crop formations",
      amount: 15000,
      raised: 8200,
      days: 12,
      contributors: 34
    }
  ];

  return (
    <div className="min-h-screen cosmic-gradient">
      <div className="fractal-pattern min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow container py-8 md:py-12 px-4 md:px-6">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4 glow">
              Grant Pools
            </h1>
            <p className="text-base md:text-xl text-muted-foreground max-w-4xl">
              Access DAO-style funding dashboards for voting, staking, and
              bounties. Support research that matters to you and help shape the
              future of science.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">
            <div className="bg-card/50 backdrop-blur p-4 md:p-6 rounded-lg border border-border">
              <DollarSign className="w-8 h-8 md:w-10 md:h-10 text-primary mb-3 md:mb-4" />
              <h3 className="text-lg md:text-xl font-bold mb-2">Fund Research</h3>
              <p className="text-sm md:text-base text-muted-foreground">
                Contribute to groundbreaking scientific research that aligns with
                your values and interests.
              </p>
            </div>
            <div className="bg-card/50 backdrop-blur p-4 md:p-6 rounded-lg border border-border">
              <Users className="w-8 h-8 md:w-10 md:h-10 text-secondary mb-3 md:mb-4" />
              <h3 className="text-lg md:text-xl font-bold mb-2">Community Voting</h3>
              <p className="text-sm md:text-base text-muted-foreground">
                Participate in democratic decision-making to allocate funds to
                the most promising research proposals.
              </p>
            </div>
            <div className="bg-card/50 backdrop-blur p-4 md:p-6 rounded-lg border border-border">
              <Award className="w-8 h-8 md:w-10 md:h-10 text-accent mb-3 md:mb-4" />
              <h3 className="text-lg md:text-xl font-bold mb-2">Results & Impact</h3>
              <p className="text-sm md:text-base text-muted-foreground">
                Track the outcomes of funded research and see the direct impact
                of your contributions.
              </p>
            </div>
          </div>

          <Tabs defaultValue="active">
            <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <TabsList className="overflow-x-auto min-w-0">
                <TabsTrigger value="active">Active Grants</TabsTrigger>
                <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
                <TabsTrigger value="completed">Completed</TabsTrigger>
              </TabsList>
              <Button className="w-full sm:w-auto">Submit Proposal</Button>
            </div>
            <TabsContent value="active" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {grants.map((grant, index) => (
                  <Card key={index} className="bg-card/50 backdrop-blur">
                    <CardHeader>
                      <CardTitle className="text-lg md:text-xl">{grant.title}</CardTitle>
                      <CardDescription>{grant.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="mb-4">
                        <div className="flex justify-between text-sm mb-2">
                          <span>${grant.raised.toLocaleString()} raised</span>
                          <span>Goal: ${grant.amount.toLocaleString()}</span>
                        </div>
                        <Progress value={(grant.raised / grant.amount) * 100} />
                      </div>
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span>{grant.days} days left</span>
                        <span>{grant.contributors} contributors</span>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">Contribute</Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="upcoming" className="mt-0">
              <div className="p-8 text-center text-muted-foreground">
                Upcoming grant proposals will be displayed here
              </div>
            </TabsContent>
            <TabsContent value="completed" className="mt-0">
              <div className="p-8 text-center text-muted-foreground">
                Completed grants and their results will be displayed here
              </div>
            </TabsContent>
          </Tabs>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default GrantPools;
