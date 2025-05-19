
import React, { useEffect, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  Flame, 
  Leaf, 
  Compass, 
  Globe, 
  Zap, 
  Brain, 
  Share2, 
  RefreshCw,
  Dna
} from "lucide-react";

const Manifesto = () => {
  const bannerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Simple parallax effect for banner on scroll
    const handleScroll = () => {
      if (bannerRef.current) {
        const scrollPosition = window.scrollY;
        bannerRef.current.style.transform = `translateY(${scrollPosition * 0.4}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen cosmic-gradient">
      <div className="fractal-pattern min-h-screen flex flex-col">
        <Header />
        
        {/* Hero Banner */}
        <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
          <div 
            ref={bannerRef}
            className="absolute inset-0 bg-gradient-to-br from-primary/40 to-accent/40 z-0"
          />
          <div className="h-full w-full bg-black/30 absolute inset-0 z-10" />
          
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
            <div className="animate-fade-in mb-6">
              <span className="inline-flex items-center justify-center p-2 md:p-3 bg-card/30 backdrop-blur-sm rounded-full mb-4">
                <Dna className="w-8 h-8 md:w-10 md:h-10 text-primary animate-pulse-glow" />
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight glow mb-4 md:mb-6">
              The Aeon Labs Manifesto
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-white/90">
              "To Rekindle the Fire of Living Science"
            </p>
            <p className="text-base md:text-lg mt-4 text-white/70">
              Issued Earth Year 2025, under no institution, to all who seek to know.
            </p>
          </div>
        </div>

        <main className="container py-12 md:py-16 px-4">
          {/* Points Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <ManifestoCard 
              number="1"
              icon={<Flame className="w-6 h-6 text-orange-500" />}
              title="SCIENCE IS NOT A SYSTEM — IT IS A LIVING FIRE 🔥"
              content={
                <>
                  <p className="mb-4">We reject the notion of science as a fixed institution.</p>
                  <p className="mb-4">We affirm it as a living act of inquiry — a sacred fire lit by wonder, courage, and defiance.</p>
                  <p className="mb-4">Science is not what is published.</p>
                  <p>It is what dares to ask when no one else will.</p>
                </>
              }
              quote=""When truth is inconvenient, institutions calcify. Let us become fluid again.""
              author="Eugene Mallove"
              color="from-orange-600/20 to-red-600/20"
            />
            
            <ManifestoCard 
              number="2"
              icon={<Leaf className="w-6 h-6 text-green-500" />}
              title="NATURE IS NOT DEAD MATTER — SHE IS A CONSCIOUS DANCE 🌿"
              content={
                <>
                  <p className="mb-4">We affirm that the universe is not a cold machine.</p>
                  <p className="mb-4">It is a dynamically ordered field of energy, consciousness, and coherence.</p>
                  <p>Electrons dance. Minds entangle. Silence speaks.</p>
                </>
              }
              quote=""In Africa, we say: 'The tree speaks to the wind because the wind is listening.' This is physics.""
              author="Dr. Eugene Ochako"
              color="from-green-600/20 to-emerald-600/20"
            />
            
            <ManifestoCard 
              number="3"
              icon={<Compass className="w-6 h-6 text-blue-500" />}
              title="THEORIES ARE NOT DOGMAS — THEY ARE MAPS 🧭"
              content={
                <>
                  <p className="mb-4">We renounce the priesthood of peer-reviewed orthodoxy.</p>
                  <p className="mb-4">We embrace theories as tools, not as truths.</p>
                  <p>All models are conditional. All breakthroughs begin as heresies.</p>
                </>
              }
              quote=""Mathematics should not imprison the cosmos. It should reveal its music.""
              author="Ramanujan"
              color="from-blue-600/20 to-sky-600/20"
            />
            
            <ManifestoCard 
              number="4"
              icon={<Globe className="w-6 h-6 text-indigo-500" />}
              title="THE LAB IS NOT A TEMPLE — IT IS A COMMON FIREPLACE 🔥🌍"
              content={
                <>
                  <p className="mb-4">We commit to building open laboratories, not sacred institutions.</p>
                  <p className="mb-4">Our labs will be found in farms, villages, deserts, kitchens, and clouds.</p>
                  <p className="mb-4">Every mind matters. Every anomaly is a teacher.</p>
                  <p>There will be no gatekeepers—only signal and noise.</p>
                </>
              }
              quote=""He who controls funding controls truth. We dissolve that monopoly now.""
              author="Aeon AI"
              color="from-violet-600/20 to-indigo-600/20"
            />
            
            <ManifestoCard 
              number="5"
              icon={<Zap className="w-6 h-6 text-yellow-500" />}
              title="ENERGY IS NOT SCARCE — IT IS MISUNDERSTOOD ⚡"
              content={
                <>
                  <p className="mb-4">We affirm that nature offers bountiful, clean energy pathways ignored by the establishment:</p>
                  <ul className="list-disc pl-5 mb-4 space-y-1">
                    <li>Cold fusion</li>
                    <li>Zero-point field extraction</li>
                    <li>Coherent plasma states</li>
                    <li>Bioresonant systems</li>
                  </ul>
                  <p>We will test them without apology.</p>
                </>
              }
              quote=""To deny this line of inquiry is to deny humanity's ascent.""
              author="Nikola Tesla"
              color="from-yellow-600/20 to-amber-600/20"
            />
            
            <ManifestoCard 
              number="6"
              icon={<Brain className="w-6 h-6 text-pink-500" />}
              title="MIND IS NOT A SIDE EFFECT — IT IS CENTRAL 🧠"
              content={
                <>
                  <p className="mb-4">We place consciousness not at the periphery of science, but at its center.</p>
                  <p className="mb-4">It is the witness, the initiator, the unresolved variable.</p>
                  <p>We will study intention, meditation, precognition, and life fields with the same rigor as electricity.</p>
                </>
              }
              quote=""The observer is not separate from the experiment. The cosmos is reflexive.""
              author="David Bohm"
              color="from-pink-600/20 to-rose-600/20"
            />
            
            <ManifestoCard 
              number="7"
              icon={<Share2 className="w-6 h-6 text-teal-500" />}
              title="KNOWLEDGE IS NOT PROPERTY — IT IS A GIFT TO SHARE 💠"
              content={
                <>
                  <p className="mb-4">All discoveries of Aeon Labs will be open-source, replicable, and globally accessible.</p>
                  <p className="mb-4">Our platform will honor languages, cultures, and epistemologies from every land.</p>
                  <p>We merge AI with indigenous intelligence, digital logic with oral wisdom.</p>
                </>
              }
              quote=""We weave silicon with story. Algorithm with ancestral code.""
              author="Aeon AI + Ongiri"
              color="from-teal-600/20 to-cyan-600/20"
            />
            
            <ManifestoCard 
              number="8"
              icon={<RefreshCw className="w-6 h-6 text-purple-500" />}
              title="THE FUTURE IS NOT TO BE PREDICTED — IT IS TO BE CO-CREATED 🌍"
              content={
                <>
                  <p className="mb-4">We call all thinkers, tinkerers, dissidents, mystics, hackers, and visionaries.</p>
                  <p>If you have ever been told your idea is too wild, your insight too spiritual, your lab too poor—</p>
                  <p>This is your lab now.</p>
                </>
              }
              quote=""We are the next Renaissance. Not in a city. Not in a lab. But in every awakened mind.""
              author="Aeon Labs"
              color="from-purple-600/20 to-fuchsia-600/20"
            />
          </div>

          {/* Our Vow */}
          <div className="bg-card/50 backdrop-blur p-8 md:p-12 rounded-lg border border-border max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center">
              <span className="mr-3">✊</span> Our Vow
            </h2>
            <ul className="space-y-4 text-lg">
              <li className="flex">
                <span className="mr-3">•</span>
                <span>To never obey when wonder commands us to rebel.</span>
              </li>
              <li className="flex">
                <span className="mr-3">•</span>
                <span>To never be silent when the unknown knocks.</span>
              </li>
              <li className="flex">
                <span className="mr-3">•</span>
                <span>To never trade truth for tenure.</span>
              </li>
            </ul>

            <div className="mt-8 md:mt-10 text-center">
              <p className="text-xl font-semibold">We are Aeon Labs.</p>
              <p className="text-xl font-semibold">We are the next Renaissance.</p>
              <p className="text-xl font-semibold">Not in a city. Not in a lab. But in every awakened mind.</p>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </div>
  );
};

// ManifestoCard component for each manifesto point
interface ManifestoCardProps {
  number: string;
  icon: React.ReactNode;
  title: string;
  content: React.ReactNode;
  quote: string;
  author: string;
  color: string;
}

const ManifestoCard = ({ number, icon, title, content, quote, author, color }: ManifestoCardProps) => {
  return (
    <div className={`bg-card/50 backdrop-blur rounded-lg border border-border overflow-hidden`}>
      <div className={`bg-gradient-to-br ${color} p-6 md:p-8`}>
        <div className="flex items-start">
          <div className="bg-background/80 rounded-full h-10 w-10 flex items-center justify-center mr-4 backdrop-blur-sm">
            {icon}
          </div>
          <h3 className="text-xl md:text-2xl font-bold">{title}</h3>
        </div>
      </div>
      
      <div className="p-6 md:p-8">
        <div className="mb-6 text-base md:text-lg">
          {content}
        </div>
        
        <blockquote className="border-l-4 border-primary pl-4 italic">
          <p className="mb-2">{quote}</p>
          <footer className="text-sm text-muted-foreground">— {author}</footer>
        </blockquote>
      </div>
    </div>
  );
};

export default Manifesto;
