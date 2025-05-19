
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, User, Microscope, ArrowRight } from "lucide-react";

const Join = () => {
  return (
    <div className="min-h-screen cosmic-gradient">
      <div className="fractal-pattern min-h-screen w-full flex items-center justify-center py-8 px-4">
        <div className="container max-w-6xl">
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4 glow">
                Join the Scientific Revolution
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-6">
                Become part of a global community reimagining the future of science through
                decentralized research, cross-disciplinary collaboration, and open-source
                methodologies.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-bold text-lg">Connect with Like-Minded Researchers</h3>
                    <p className="text-muted-foreground">
                      Collaborate with scientists and free-thinkers pushing the boundaries
                      of conventional research.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-bold text-lg">Access Cutting-Edge Tools</h3>
                    <p className="text-muted-foreground">
                      Utilize advanced platforms for theory development, experimental
                      design, and data analysis.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-bold text-lg">Participate in Revolutionary Research</h3>
                    <p className="text-muted-foreground">
                      Contribute to groundbreaking studies that challenge paradigms and
                      expand our understanding of reality.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <Card className="border-border bg-card/60 backdrop-blur-md">
                <CardHeader>
                  <CardTitle className="text-2xl text-center">Create Your Account</CardTitle>
                  <CardDescription className="text-center">
                    Join thousands of researchers exploring the frontiers of science
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="researcher" className="w-full">
                    <TabsList className="grid w-full grid-cols-2 mb-6">
                      <TabsTrigger value="researcher">
                        <User className="w-4 h-4 mr-2" />
                        Researcher
                      </TabsTrigger>
                      <TabsTrigger value="lab">
                        <Microscope className="w-4 h-4 mr-2" />
                        Laboratory
                      </TabsTrigger>
                    </TabsList>

                    <TabsContent value="researcher" className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input id="name" placeholder="Dr. Jane Smith" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input id="email" type="email" placeholder="jane.smith@example.com" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="password">Password</Label>
                        <Input id="password" type="password" placeholder="••••••••" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="field">Field of Research</Label>
                        <Input id="field" placeholder="e.g., Quantum Physics, Consciousness Studies" />
                      </div>
                      <Button type="submit" className="w-full">
                        Create Researcher Account
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </TabsContent>

                    <TabsContent value="lab" className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="lab-name">Laboratory Name</Label>
                        <Input id="lab-name" placeholder="Quantum Consciousness Institute" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lab-email">Email Address</Label>
                        <Input id="lab-email" type="email" placeholder="admin@qci-lab.org" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lab-password">Password</Label>
                        <Input id="lab-password" type="password" placeholder="••••••••" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lab-location">Location</Label>
                        <Input id="lab-location" placeholder="City, Country" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lab-focus">Research Focus</Label>
                        <Input id="lab-focus" placeholder="Primary research areas" />
                      </div>
                      <Button type="submit" className="w-full">
                        Register Laboratory
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </TabsContent>
                  </Tabs>
                </CardContent>
                <CardFooter className="flex flex-col space-y-4">
                  <div className="relative w-full">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-border"></div>
                    </div>
                    <div className="relative flex justify-center text-xs">
                      <span className="bg-card px-2 text-muted-foreground">Or continue with</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <Button variant="outline">Google</Button>
                    <Button variant="outline">ORCID</Button>
                  </div>
                  <p className="text-center text-sm text-muted-foreground">
                    Already have an account?{" "}
                    <Link to="/login" className="text-primary hover:underline">
                      Sign in
                    </Link>
                  </p>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Join;
