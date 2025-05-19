
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { CheckIcon } from "lucide-react";

const Join = () => {
  const researchInterests = [
    "Consciousness Studies",
    "New Energy Systems",
    "Quantum Biology",
    "Alternative Physics Models",
    "Frontier Medical Research",
    "Advanced Propulsion",
    "Consciousness-Matter Interactions",
    "Anomalous Cognition"
  ];

  return (
    <div className="min-h-screen cosmic-gradient">
      <div className="fractal-pattern min-h-screen w-full flex flex-col">
        <div className="container max-w-4xl py-12">
          <Link to="/" className="flex items-center justify-center mb-8 space-x-2">
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6 text-primary"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </svg>
            </div>
            <span className="text-xl font-bold tracking-tight glow">
              Aeon <span className="text-primary">Labs</span>
            </span>
          </Link>

          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-2 glow">Join the Research Community</h1>
            <p className="text-xl text-muted-foreground">
              Become part of a global network of researchers exploring the frontiers of science
            </p>
          </div>

          <Card className="border-border bg-card/60 backdrop-blur-md">
            <CardHeader>
              <CardTitle>Create your account</CardTitle>
              <CardDescription>
                Fill out the form below to join Aeon Labs and start contributing to research
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="researcher" className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-8">
                  <TabsTrigger value="researcher">Researcher</TabsTrigger>
                  <TabsTrigger value="organization">Organization</TabsTrigger>
                  <TabsTrigger value="supporter">Supporter</TabsTrigger>
                </TabsList>

                <TabsContent value="researcher" className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="Enter your first name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Enter your last name" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="name@example.com" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" type="password" placeholder="Create a secure password" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="background">Research Background</Label>
                    <Textarea 
                      id="background" 
                      placeholder="Briefly describe your background, experience, and areas of expertise"
                      className="min-h-[100px]"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Research Interests (select all that apply)</Label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
                      {researchInterests.map((interest, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <div className="w-5 h-5 rounded border border-primary/50 flex items-center justify-center">
                            <CheckIcon className="w-3 h-3 text-primary" />
                          </div>
                          <span className="text-sm">{interest}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="organization" className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="orgName">Organization Name</Label>
                    <Input id="orgName" placeholder="Enter your organization name" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="orgType">Organization Type</Label>
                    <Input id="orgType" placeholder="e.g., Research Lab, University, Non-profit" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="orgWebsite">Website</Label>
                    <Input id="orgWebsite" placeholder="https://www.example.com" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="orgEmail">Contact Email</Label>
                    <Input id="orgEmail" type="email" placeholder="contact@organization.com" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="orgDescription">Organization Description</Label>
                    <Textarea 
                      id="orgDescription" 
                      placeholder="Describe your organization's mission, research focus, and goals"
                      className="min-h-[100px]"
                    />
                  </div>
                </TabsContent>

                <TabsContent value="supporter" className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="supporterFirstName">First Name</Label>
                      <Input id="supporterFirstName" placeholder="Enter your first name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="supporterLastName">Last Name</Label>
                      <Input id="supporterLastName" placeholder="Enter your last name" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="supporterEmail">Email Address</Label>
                    <Input id="supporterEmail" type="email" placeholder="name@example.com" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="supporterPassword">Password</Label>
                    <Input id="supporterPassword" type="password" placeholder="Create a secure password" />
                  </div>

                  <div className="space-y-2">
                    <Label>Areas of Interest (select all that apply)</Label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
                      {researchInterests.map((interest, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <div className="w-5 h-5 rounded border border-primary/50 flex items-center justify-center">
                            <CheckIcon className="w-3 h-3 text-primary" />
                          </div>
                          <span className="text-sm">{interest}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
              <Button className="w-full">Create Account</Button>
              <p className="text-center text-sm text-muted-foreground">
                Already have an account?{" "}
                <Link to="/login" className="text-primary hover:underline">
                  Sign in
                </Link>
              </p>
              <p className="text-xs text-muted-foreground text-center">
                By creating an account, you agree to our{" "}
                <Link to="/terms" className="text-primary hover:underline">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link to="/privacy" className="text-primary hover:underline">
                  Privacy Policy
                </Link>
              </p>
            </CardFooter>
          </Card>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-card/50 backdrop-blur p-6 rounded-lg border border-border">
              <div className="w-12 h-12 mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <path d="M21 12a9 9 0 0 0-9-9 9 9 0 0 0-9 9c0 4.97 4.03 9 9 9"></path>
                  <path d="M12 12v9"></path>
                  <path d="M8 15.5c0-1.5 1.5-3 4-3s4 1.5 4 3"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Collaborate</h3>
              <p className="text-muted-foreground">
                Connect with like-minded researchers and participate in groundbreaking projects.
              </p>
            </div>
            <div className="bg-card/50 backdrop-blur p-6 rounded-lg border border-border">
              <div className="w-12 h-12 mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Contribute</h3>
              <p className="text-muted-foreground">
                Share your ideas, theories, and experimental data with a global community.
              </p>
            </div>
            <div className="bg-card/50 backdrop-blur p-6 rounded-lg border border-border">
              <div className="w-12 h-12 mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <line x1="12" y1="2" x2="12" y2="22"></line>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Fund Research</h3>
              <p className="text-muted-foreground">
                Support innovative projects through our decentralized grant pools and funding mechanisms.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Join;
