
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Globe } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real implementation, this would connect to an API to send the message
    toast({
      title: "Message received",
      description: "Thank you for your message. We'll get back to you soon!",
    });
  };

  return (
    <div className="min-h-screen cosmic-gradient">
      <div className="fractal-pattern min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow container py-8 md:py-12 px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4 glow">Contact Us</h1>
            <p className="text-base md:text-xl text-muted-foreground mb-8">
              Have questions about Aeon Labs? Reach out to our team or connect with our community.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <Card className="bg-card/50 backdrop-blur h-full">
                  <CardHeader>
                    <CardTitle>Send a Message</CardTitle>
                    <CardDescription>
                      Fill out the form below and we'll get back to you as soon as possible.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label htmlFor="name" className="text-sm font-medium">
                            Name
                          </label>
                          <Input id="name" placeholder="Your name" required />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="email" className="text-sm font-medium">
                            Email
                          </label>
                          <Input id="email" type="email" placeholder="Your email" required />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="subject" className="text-sm font-medium">
                          Subject
                        </label>
                        <Input id="subject" placeholder="What is this regarding?" required />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium">
                          Message
                        </label>
                        <Textarea 
                          id="message" 
                          placeholder="Your message..." 
                          rows={6}
                          required 
                        />
                      </div>
                      
                      <Button type="submit" className="w-full sm:w-auto">
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
              
              <div>
                <Card className="bg-card/50 backdrop-blur mb-6">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Mail className="h-5 w-5 text-primary" />
                      Email Contact
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <p className="text-sm">General Inquiries:</p>
                      <p className="text-primary">info@aeonlabs.science</p>
                    </div>
                    <div className="space-y-2 mt-4">
                      <p className="text-sm">Research Collaboration:</p>
                      <p className="text-primary">research@aeonlabs.science</p>
                    </div>
                    <div className="space-y-2 mt-4">
                      <p className="text-sm">Technical Support:</p>
                      <p className="text-primary">support@aeonlabs.science</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-card/50 backdrop-blur">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Globe className="h-5 w-5 text-primary" />
                      Global Hubs
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex gap-2">
                        <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                        <div>
                          <p className="font-medium">Nairobi Hub</p>
                          <p className="text-sm text-muted-foreground">
                            Innovation Centre, Langata Road
                            <br />
                            Nairobi, Kenya
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex gap-2">
                        <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                        <div>
                          <p className="font-medium">São Paulo Node</p>
                          <p className="text-sm text-muted-foreground">
                            Av. Paulista 1000
                            <br />
                            São Paulo, Brazil
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex gap-2">
                        <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                        <div>
                          <p className="font-medium">Bangalore Node</p>
                          <p className="text-sm text-muted-foreground">
                            Electronic City, Phase 1
                            <br />
                            Bangalore, India
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
