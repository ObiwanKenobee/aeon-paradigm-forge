
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "@/components/ui/use-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { signIn, user } = useAuth();
  const navigate = useNavigate();
  
  // Redirect if already logged in
  useEffect(() => {
    if (user) {
      navigate('/dashboard');
    }
  }, [user, navigate]);

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    try {
      await signIn(email, password);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleConnectWallet = () => {
    toast({
      title: "Web3 Integration Coming Soon",
      description: "This feature will be available in future updates.",
    });
  };

  return (
    <div className="min-h-screen cosmic-gradient flex items-center justify-center">
      <div className="fractal-pattern min-h-screen w-full flex items-center justify-center py-8 px-4">
        <div className="container max-w-md">
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

          <Card className="border-border bg-card/60 backdrop-blur-md">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl text-center">Welcome back</CardTitle>
              <CardDescription className="text-center">
                Enter your credentials to access your account
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="email" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-4">
                  <TabsTrigger value="email">Email</TabsTrigger>
                  <TabsTrigger value="wallet">Web3 Wallet</TabsTrigger>
                </TabsList>
                <TabsContent value="email" className="space-y-4">
                  <form onSubmit={handleSignIn} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input 
                        id="email" 
                        placeholder="name@example.com" 
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={isSubmitting}
                      />
                    </div>
                    <div className="space-y-2">
                      <div className="flex flex-wrap justify-between gap-1">
                        <Label htmlFor="password">Password</Label>
                        <Link to="/reset-password" className="text-xs text-muted-foreground hover:text-primary">
                          Forgot password?
                        </Link>
                      </div>
                      <Input 
                        id="password" 
                        placeholder="••••••••" 
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        disabled={isSubmitting}
                      />
                    </div>
                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? "Signing In..." : "Sign In"}
                    </Button>
                  </form>
                </TabsContent>
                <TabsContent value="wallet" className="space-y-4">
                  <div className="p-6 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-background flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary"
                      >
                        <rect width="20" height="14" x="2" y="5" rx="2" />
                        <path d="M22 10h-4a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h4" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-medium mb-2">Connect Wallet</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Sign in with your Web3 wallet to access your account and
                      participate in grant funding.
                    </p>
                    <Button 
                      className="w-full"
                      onClick={handleConnectWallet}
                    >
                      Connect Wallet
                    </Button>
                  </div>
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
                <Button variant="outline">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 mr-2" aria-hidden="true">
                    <path
                      d="M12.0003 4.75C13.7703 4.75 15.3553 5.36002 16.6053 6.54998L20.0303 3.125C17.9502 1.19 15.2353 0 12.0003 0C7.31028 0 3.25527 2.69 1.28027 6.60998L5.27028 9.70498C6.21525 6.86002 8.87028 4.75 12.0003 4.75Z"
                      fill="#EA4335"
                    />
                    <path
                      d="M23.49 12.275C23.49 11.49 23.415 10.73 23.3 10H12V14.51H18.47C18.18 15.99 17.34 17.25 16.08 18.1L19.945 21.1C22.2 19.01 23.49 15.92 23.49 12.275Z"
                      fill="#4285F4"
                    />
                    <path
                      d="M5.26498 14.2949C5.02498 13.5699 4.88501 12.7999 4.88501 11.9999C4.88501 11.1999 5.01998 10.4299 5.26498 9.7049L1.275 6.60986C0.46 8.22986 0 10.0599 0 11.9999C0 13.9399 0.46 15.7699 1.28 17.3899L5.26498 14.2949Z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12.0004 24.0001C15.2404 24.0001 17.9654 22.935 19.9454 21.095L16.0804 18.095C15.0054 18.82 13.6204 19.245 12.0004 19.245C8.8704 19.245 6.21537 17.135 5.2654 14.29L1.27539 17.385C3.25539 21.31 7.3104 24.0001 12.0004 24.0001Z"
                      fill="#34A853"
                    />
                  </svg>
                  Google
                </Button>
                <Button variant="outline">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 mr-2" aria-hidden="true">
                    <path
                      d="M16.365 1.43c0 1.14-.493 2.27-1.177 3.08-.945 1.12-2.29 1.8-3.6 1.71-1.83-.09-2.774-1.06-3.6-1.71-.736-.7-1.28-1.76-1.28-2.85 0-1.75 1.5-3.6 3.6-3.6 1.17 0 2.23.48 2.95.85.71.36 1.23.33 1.93.85.7.51 1.03 1.17 1.03 1.87z"
                      fill="currentColor"
                    />
                    <path
                      d="M22 17.31c0 3.05-2.63 5.45-5.45 5.45-1.02 0-2.04-.25-3.17-.75a4.162 4.162 0 01-1.88-1.75c-1.4-2.34-.47-5.5 1.88-7 .96-.61 2.25-1.06 3.37-.96 1.11.1 2.24.56 3.03.96 2.1 1.67 2.22 3.99 2.22 4.05z"
                      fill="currentColor"
                    />
                  </svg>
                  GitHub
                </Button>
              </div>
              <p className="text-center text-sm text-muted-foreground">
                Don't have an account?{" "}
                <Link to="/join" className="text-primary hover:underline">
                  Sign up
                </Link>
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Login;
