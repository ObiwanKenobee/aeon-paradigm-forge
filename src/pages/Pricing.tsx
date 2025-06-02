
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PricingCard from '@/components/PricingCard';
import { Button } from '@/components/ui/button';
import { Check, Info } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Toaster } from '@/components/ui/toaster';
import { toast } from '@/components/ui/sonner';
import { supabase } from '@/integrations/supabase/client';

const Pricing = () => {
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  React.useEffect(() => {
    // Get current user session
    const getSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session?.user?.email) {
        setUserEmail(session.user.email);
      }
    };
    getSession();
  }, []);

  const pricingTiers = [
    {
      id: 'free',
      name: 'Community Explorer',
      description: 'Access basic scientific resources and discussions',
      price: 0,
      interval: 'forever',
      features: [
        'Read-only access to public research',
        'Community forum participation',
        'Basic experiment replications',
        'Monthly newsletter'
      ],
      audience: 'For curious minds and students',
      buttonText: 'Start Free',
      planId: '',
      supabaseRole: 'free',
      popular: false,
      color: 'from-foreground/10 to-foreground/5'
    },
    {
      id: 'builder',
      name: 'Lab Builder',
      description: 'Full access to collaborative research tools',
      price: 1000,
      interval: 'month',
      features: [
        'All Community features',
        'Create and publish experiments',
        'Participate in theory building',
        'Access to research database',
        'Collaborative document editing'
      ],
      audience: 'For researchers and science enthusiasts',
      buttonText: 'Become a Builder',
      planId: 'lab_builder_plan',
      supabaseRole: 'builder',
      popular: true,
      color: 'from-primary/20 to-primary/5'
    },
    {
      id: 'node',
      name: 'Innovation Node',
      description: 'Advanced research tools with dedicated support',
      price: 9900,
      interval: 'month',
      features: [
        'All Builder features',
        'Fund distribution voting rights',
        'Research grant eligibility',
        'Priority replication network access',
        'Custom API integrations',
        'Dedicated support channel'
      ],
      audience: 'For labs, institutions, and serious researchers',
      buttonText: 'Become a Node',
      planId: 'innovation_node',
      supabaseRole: 'node',
      popular: false,
      color: 'from-secondary/20 to-secondary/5'
    },
    {
      id: 'patron',
      name: 'Diaspora Ally',
      description: 'Support open science with a donation',
      price: 1000,
      interval: 'month',
      customPrice: true,
      features: [
        'All Builder features',
        'Special acknowledgment on research',
        'Early access to breakthrough findings',
        'Patron-only events and webinars',
        'Custom donation amount options'
      ],
      audience: 'For supporters and patrons of open science',
      buttonText: 'Become an Ally',
      planId: 'diaspora_ally',
      supabaseRole: 'patron',
      popular: false,
      color: 'from-accent/20 to-accent/5'
    }
  ];

  const openPaystackCheckout = async (planId: string, amount: number) => {
    if (!userEmail) {
      toast.error("Please log in to subscribe", {
        description: "You need to be logged in to purchase a subscription."
      });
      return;
    }

    if (!planId) {
      // For free plan
      toast.success("You're now on the Community Explorer plan!", {
        description: "No payment needed. Start exploring Aeon Labs."
      });
      return;
    }

    setIsLoading(true);

    try {
      // Create payment using our Edge Function
      const { data, error } = await supabase.functions.invoke('create-payment', {
        body: {
          email: userEmail,
          planId,
          amount,
          currency: 'NGN'
        }
      });

      if (error) throw error;

      if (!data.success) {
        throw new Error(data.error || 'Failed to create payment');
      }

      // Load Paystack inline script if not already loaded
      if (!window.PaystackPop) {
        const script = document.createElement('script');
        script.src = 'https://js.paystack.co/v1/inline.js';
        script.onload = () => initiatePayment(data.data);
        document.head.appendChild(script);
      } else {
        initiatePayment(data.data);
      }

    } catch (error) {
      console.error('Payment error:', error);
      toast.error("Payment initialization failed", {
        description: error.message || "Please try again later."
      });
    } finally {
      setIsLoading(false);
    }
  };

  const initiatePayment = (paymentData: any) => {
    const handler = window.PaystackPop.setup({
      key: import.meta.env.VITE_PAYSTACK_PUBLIC_KEY,
      email: userEmail!,
      amount: paymentData.amount,
      currency: 'NGN',
      ref: paymentData.reference,
      onClose: function() {
        toast.info("Payment cancelled", {
          description: "You can try again whenever you're ready."
        });
      },
      callback: async function(response: any) {
        try {
          // Verify payment with our Edge Function
          const { data, error } = await supabase.functions.invoke('verify-payment', {
            body: { reference: response.reference }
          });

          if (error) throw error;

          if (data.success && data.data.status === 'success') {
            toast.success("Payment successful!", {
              description: "Your account has been upgraded. Welcome to your new plan!"
            });
          } else {
            throw new Error('Payment verification failed');
          }
        } catch (error) {
          console.error('Payment verification error:', error);
          toast.error("Payment verification failed", {
            description: "Please contact support if you were charged."
          });
        }
      }
    });

    handler.openIframe();
  };

  return (
    <div className="min-h-screen cosmic-gradient">
      <div className="fractal-pattern min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="py-12 md:py-20 relative overflow-hidden px-4 md:px-6">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
            <div className="container relative z-10">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 tracking-tight glow">
                  Join the Scientific Renaissance
                </h1>
                <p className="text-xl md:text-2xl mb-6 text-muted-foreground max-w-2xl mx-auto">
                  Choose the tier that fits your role in our collective evolution of scientific discovery.
                </p>
              </div>
            </div>
          </section>

          {/* Pricing Tiers */}
          <section className="py-8 md:py-12 px-4 md:px-6">
            <div className="container">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {pricingTiers.map((tier) => (
                  <PricingCard 
                    key={tier.id}
                    {...tier}
                    onSelect={() => openPaystackCheckout(tier.planId, tier.price)}
                  />
                ))}
              </div>

              {/* Features Comparison */}
              <div className="mt-16 md:mt-24">
                <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">All Plans Include</h2>
                <div className="bg-card rounded-lg border p-6 shadow-sm">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-4">Platform Features</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span>Access to the Aeon Labs platform</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span>Community of forward-thinking scientists</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span>Open-source research contributions</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span>Regular platform updates and improvements</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-4">Support & Community</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span>Community forum access</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span>Weekly scientific newsletter</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span>Email support</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span>Access to public events</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-16 md:mt-24 max-w-4xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
                
                <div className="space-y-6">
                  <div className="bg-card rounded-lg border p-6">
                    <h3 className="text-lg font-medium mb-2">How do the different tiers work?</h3>
                    <p className="text-muted-foreground">Each tier provides different levels of access and features for the Aeon Labs platform. Higher tiers unlock more powerful tools for research, collaboration, and funding opportunities.</p>
                  </div>
                  
                  <div className="bg-card rounded-lg border p-6">
                    <h3 className="text-lg font-medium mb-2">Can I upgrade or downgrade my plan later?</h3>
                    <p className="text-muted-foreground">Yes, you can change your plan at any time. When upgrading, you'll gain immediate access to the new features. When downgrading, you'll maintain your current level of access until the end of your billing period.</p>
                  </div>
                  
                  <div className="bg-card rounded-lg border p-6">
                    <h3 className="text-lg font-medium mb-2">What payment methods are accepted?</h3>
                    <p className="text-muted-foreground">We accept all major credit cards, debit cards, and mobile money through our secure payment processor, Paystack.</p>
                  </div>
                  
                  <div className="bg-card rounded-lg border p-6">
                    <h3 className="text-lg font-medium mb-2">Do you offer discounts for academic institutions?</h3>
                    <p className="text-muted-foreground">Yes, we offer special pricing for educational institutions, research labs, and non-profit organizations. Please contact our team for more information.</p>
                  </div>
                </div>
                
                <div className="mt-12 text-center">
                  <div className="inline-flex items-center gap-2 bg-muted p-4 rounded-lg">
                    <Info className="h-5 w-5 text-blue-500" />
                    <p className="text-sm">Have more questions? <a href="#" className="text-primary font-medium hover:underline">Contact our team</a></p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-12 md:py-16 relative overflow-hidden px-4 md:px-6">
            <div className="container">
              <div className="max-w-4xl mx-auto text-center bg-card border rounded-lg p-8 shadow-lg">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Join the Movement?</h2>
                <p className="text-lg mb-6 text-muted-foreground">
                  Become part of the next scientific renaissance and help reshape how we approach knowledge.
                </p>
                <Button 
                  size="lg" 
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                  asChild
                >
                  <a href="#pricing-tiers">Choose Your Plan</a>
                </Button>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
        <Toaster />
      </div>
    </div>
  );
};

export default Pricing;
