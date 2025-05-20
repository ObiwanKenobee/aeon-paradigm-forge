
import React, { createContext, useState, useEffect, useContext } from 'react';
import { User, Session } from '@supabase/supabase-js';
import { supabase } from '@/integrations/supabase/client';
import { useNavigate } from 'react-router-dom';
import { toast } from '@/components/ui/use-toast';

// Define user location type
export interface UserLocation {
  continent: string;
  country: string;
  region?: string;
}

// Define user metadata type
export interface UserMetadata {
  role?: string;
  location?: UserLocation;
  plan?: string;
}

// Define the context type
interface AuthContextType {
  user: User | null;
  session: Session | null;
  userMetadata: UserMetadata | null;
  isLoading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  updateUserRole: (role: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [userMetadata, setUserMetadata] = useState<UserMetadata | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  // Initialize auth state
  useEffect(() => {
    // First set up auth state listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, newSession) => {
        // Update session state
        setSession(newSession);
        setUser(newSession?.user ?? null);
        
        // Update user metadata
        if (newSession?.user) {
          const metadata = newSession.user.user_metadata as UserMetadata;
          setUserMetadata(metadata);
        } else {
          setUserMetadata(null);
        }
        
        // Handle specific auth events
        if (event === 'SIGNED_IN') {
          // Defer any additional Supabase calls using setTimeout
          setTimeout(() => {
            // If user doesn't have a role, redirect to onboarding
            const metadata = newSession?.user?.user_metadata as UserMetadata;
            if (!metadata?.role) {
              navigate('/onboarding');
            }
          }, 0);
        }
      }
    );

    // Then check for existing session
    supabase.auth.getSession().then(({ data: { session: initialSession } }) => {
      setSession(initialSession);
      setUser(initialSession?.user ?? null);
      
      if (initialSession?.user) {
        const metadata = initialSession.user.user_metadata as UserMetadata;
        setUserMetadata(metadata);
      }
      
      setIsLoading(false);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [navigate]);

  // Sign in function
  const signIn = async (email: string, password: string) => {
    try {
      setIsLoading(true);
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) throw error;
    } catch (error: any) {
      toast({
        title: "Authentication error",
        description: error.message,
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Sign up function
  const signUp = async (email: string, password: string) => {
    try {
      setIsLoading(true);
      const { error } = await supabase.auth.signUp({ email, password });
      if (error) throw error;
      toast({
        title: "Success!",
        description: "Check your email for a confirmation link.",
      });
    } catch (error: any) {
      toast({
        title: "Registration error",
        description: error.message,
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Sign out function
  const signOut = async () => {
    try {
      setIsLoading(true);
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      navigate('/login');
    } catch (error: any) {
      toast({
        title: "Sign out error",
        description: error.message,
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Update user role function
  const updateUserRole = async (role: string) => {
    try {
      setIsLoading(true);
      const { error } = await supabase.auth.updateUser({
        data: { role }
      });
      if (error) throw error;
      
      // Update the local state
      if (user) {
        const updatedMetadata = { ...userMetadata, role };
        setUserMetadata(updatedMetadata);
      }
      
      toast({
        title: "Role updated",
        description: `Your role has been set to ${role}.`,
      });
    } catch (error: any) {
      toast({
        title: "Update error",
        description: error.message,
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Context value
  const value = {
    user,
    session,
    userMetadata,
    isLoading,
    signIn,
    signUp,
    signOut,
    updateUserRole,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// Custom hook for using the auth context
export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
