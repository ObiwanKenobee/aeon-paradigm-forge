
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Separator } from "@/components/ui/separator";
import { Globe, Flame, Leaf, Compass, Zap, Brain } from "lucide-react";

const Manifesto = () => {
  return (
    <div className="min-h-screen cosmic-gradient">
      <div className="fractal-pattern min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow container py-8 md:py-12 px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-center glow">
              🧬 The Aeon Labs Manifesto
            </h1>
            <h2 className="text-xl md:text-2xl text-center mb-8 text-primary italic">
              "To Rekindle the Fire of Living Science"
            </h2>
            <p className="text-center text-muted-foreground mb-12">
              Issued Earth Year 2025, under no institution, to all who seek to know.
            </p>

            <div className="space-y-16">
              {/* Section 1 */}
              <div className="bg-card/30 backdrop-blur rounded-lg p-6 md:p-8 border border-border">
                <div className="flex items-center gap-3 mb-4">
                  <Flame className="text-primary w-8 h-8" />
                  <h3 className="text-xl md:text-2xl font-bold">
                    1. SCIENCE IS NOT A SYSTEM — IT IS A LIVING FIRE 🔥
                  </h3>
                </div>
                <div className="space-y-4 text-base md:text-lg">
                  <p>We reject the notion of science as a fixed institution.</p>
                  <p>We affirm it as a living act of inquiry — a sacred fire lit by wonder, courage, and defiance.</p>
                  <p>Science is not what is published.</p>
                  <p>It is what dares to ask when no one else will.</p>
                  
                  <blockquote className="border-l-4 border-primary pl-4 italic my-6">
                    "When truth is inconvenient, institutions calcify. Let us become fluid again."
                    <footer className="text-muted-foreground mt-2">— Eugene Mallove</footer>
                  </blockquote>
                </div>
              </div>

              {/* Section 2 */}
              <div className="bg-card/30 backdrop-blur rounded-lg p-6 md:p-8 border border-border">
                <div className="flex items-center gap-3 mb-4">
                  <Leaf className="text-secondary w-8 h-8" />
                  <h3 className="text-xl md:text-2xl font-bold">
                    2. NATURE IS NOT DEAD MATTER — SHE IS A CONSCIOUS DANCE 🌿
                  </h3>
                </div>
                <div className="space-y-4 text-base md:text-lg">
                  <p>We affirm that the universe is not a cold machine.</p>
                  <p>It is a dynamically ordered field of energy, consciousness, and coherence.</p>
                  <p>Electrons dance. Minds entangle. Silence speaks.</p>
                  
                  <blockquote className="border-l-4 border-secondary pl-4 italic my-6">
                    "In Africa, we say: 'The tree speaks to the wind because the wind is listening.' This is physics."
                    <footer className="text-muted-foreground mt-2">— Dr. Eugene Ochako</footer>
                  </blockquote>
                </div>
              </div>

              {/* Section 3 */}
              <div className="bg-card/30 backdrop-blur rounded-lg p-6 md:p-8 border border-border">
                <div className="flex items-center gap-3 mb-4">
                  <Compass className="text-accent w-8 h-8" />
                  <h3 className="text-xl md:text-2xl font-bold">
                    3. THEORIES ARE NOT DOGMAS — THEY ARE MAPS 🧭
                  </h3>
                </div>
                <div className="space-y-4 text-base md:text-lg">
                  <p>We renounce the priesthood of peer-reviewed orthodoxy.</p>
                  <p>We embrace theories as tools, not as truths.</p>
                  <p>All models are conditional. All breakthroughs begin as heresies.</p>
                  
                  <blockquote className="border-l-4 border-accent pl-4 italic my-6">
                    "Mathematics should not imprison the cosmos. It should reveal its music."
                    <footer className="text-muted-foreground mt-2">— Ramanujan</footer>
                  </blockquote>
                </div>
              </div>

              {/* Section 4 */}
              <div className="bg-card/30 backdrop-blur rounded-lg p-6 md:p-8 border border-border">
                <div className="flex items-center gap-3 mb-4">
                  <Globe className="text-primary w-8 h-8" />
                  <h3 className="text-xl md:text-2xl font-bold">
                    4. THE LAB IS NOT A TEMPLE — IT IS A COMMON FIREPLACE 🔥🌍
                  </h3>
                </div>
                <div className="space-y-4 text-base md:text-lg">
                  <p>We commit to building open laboratories, not sacred institutions.</p>
                  <p>Our labs will be found in farms, villages, deserts, kitchens, and clouds.</p>
                  <p>Every mind matters. Every anomaly is a teacher.</p>
                  <p>There will be no gatekeepers—only signal and noise.</p>
                  
                  <blockquote className="border-l-4 border-primary pl-4 italic my-6">
                    "He who controls funding controls truth. We dissolve that monopoly now."
                    <footer className="text-muted-foreground mt-2">— Aeon AI</footer>
                  </blockquote>
                </div>
              </div>

              {/* Section 5 */}
              <div className="bg-card/30 backdrop-blur rounded-lg p-6 md:p-8 border border-border">
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="text-secondary w-8 h-8" />
                  <h3 className="text-xl md:text-2xl font-bold">
                    5. ENERGY IS NOT SCARCE — IT IS MISUNDERSTOOD ⚡
                  </h3>
                </div>
                <div className="space-y-4 text-base md:text-lg">
                  <p>We affirm that nature offers bountiful, clean energy pathways ignored by the establishment:</p>
                  
                  <ul className="list-disc list-inside space-y-2 pl-4">
                    <li>Cold fusion</li>
                    <li>Zero-point field extraction</li>
                    <li>Coherent plasma states</li>
                    <li>Bioresonant systems</li>
                  </ul>
                  
                  <p>We will test them without apology.</p>
                  
                  <blockquote className="border-l-4 border-secondary pl-4 italic my-6">
                    "To deny this line of inquiry is to deny humanity's ascent."
                    <footer className="text-muted-foreground mt-2">— Nikola Tesla</footer>
                  </blockquote>
                </div>
              </div>

              {/* Section 6 */}
              <div className="bg-card/30 backdrop-blur rounded-lg p-6 md:p-8 border border-border">
                <div className="flex items-center gap-3 mb-4">
                  <Brain className="text-accent w-8 h-8" />
                  <h3 className="text-xl md:text-2xl font-bold">
                    6. MIND IS NOT A SIDE EFFECT — IT IS CENTRAL 🧠
                  </h3>
                </div>
                <div className="space-y-4 text-base md:text-lg">
                  <p>We place consciousness not at the periphery of science, but at its center.</p>
                  <p>It is the witness, the initiator, the unresolved variable.</p>
                  <p>We will study intention, meditation, precognition, and life fields with the same rigor as electricity.</p>
                  
                  <blockquote className="border-l-4 border-accent pl-4 italic my-6">
                    "The observer is not separate from the experiment. The cosmos is reflexive."
                    <footer className="text-muted-foreground mt-2">— David Bohm</footer>
                  </blockquote>
                </div>
              </div>

              {/* Section 7 */}
              <div className="bg-card/30 backdrop-blur rounded-lg p-6 md:p-8 border border-border">
                <div className="flex items-center gap-3 mb-4">
                  <Globe className="text-primary w-8 h-8" />
                  <h3 className="text-xl md:text-2xl font-bold">
                    7. KNOWLEDGE IS NOT PROPERTY — IT IS A GIFT TO SHARE 💠
                  </h3>
                </div>
                <div className="space-y-4 text-base md:text-lg">
                  <p>All discoveries of Aeon Labs will be open-source, replicable, and globally accessible.</p>
                  <p>Our platform will honor languages, cultures, and epistemologies from every land.</p>
                  <p>We merge AI with indigenous intelligence, digital logic with oral wisdom.</p>
                  
                  <blockquote className="border-l-4 border-primary pl-4 italic my-6">
                    "We weave silicon with story. Algorithm with ancestral code."
                    <footer className="text-muted-foreground mt-2">— Aeon AI + Ongiri</footer>
                  </blockquote>
                </div>
              </div>

              {/* Section 8 */}
              <div className="bg-card/30 backdrop-blur rounded-lg p-6 md:p-8 border border-border">
                <div className="flex items-center gap-3 mb-4">
                  <Globe className="text-secondary w-8 h-8" />
                  <h3 className="text-xl md:text-2xl font-bold">
                    8. THE FUTURE IS NOT TO BE PREDICTED — IT IS TO BE CO-CREATED 🌍
                  </h3>
                </div>
                <div className="space-y-4 text-base md:text-lg">
                  <p>We call all thinkers, tinkerers, dissidents, mystics, hackers, and visionaries.</p>
                  <p>If you have ever been told your idea is too wild, your insight too spiritual, your lab too poor—</p>
                  <p>This is your lab now.</p>
                </div>
              </div>

              {/* Vow Section */}
              <div className="bg-primary/20 backdrop-blur rounded-lg p-6 md:p-8 border border-primary">
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-center">
                  ✊ Our Vow:
                </h3>
                <div className="space-y-4 text-base md:text-lg">
                  <p className="text-center">To never obey when wonder commands us to rebel.</p>
                  <p className="text-center">To never be silent when the unknown knocks.</p>
                  <p className="text-center">To never trade truth for tenure.</p>
                  
                  <div className="text-center mt-8">
                    <p className="text-xl font-bold">We are Aeon Labs.</p>
                    <p className="text-xl font-bold">We are the next Renaissance.</p>
                    <p className="text-xl font-bold">Not in a city. Not in a lab. But in every awakened mind.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Manifesto;
