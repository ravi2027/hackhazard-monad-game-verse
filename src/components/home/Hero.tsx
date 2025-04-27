
import { ArrowRight, Gamepad } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      <div className="absolute inset-0 grid-pattern z-0"></div>
      <div className="absolute top-0 right-0 w-full h-full bg-gradient-radial from-monad/20 via-transparent to-transparent opacity-70 z-0"></div>
      
      {/* Animated orbs */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-monad/10 blur-3xl animate-pulse-glow z-0"></div>
      <div className="absolute bottom-1/4 left-1/3 w-96 h-96 rounded-full bg-monad-accent/10 blur-3xl animate-pulse-glow animation-delay-1000 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2 space-y-6">
            <div className="inline-block glass-card px-4 py-2 mb-4">
              <span className="text-sm font-medium text-monad flex items-center gap-2">
                <Gamepad className="h-4 w-4" /> Built on Monad's Layer-1 Blockchain
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              <span className="text-gradient">Next-Gen Blockchain</span> Gaming Experience
            </h1>
            
            <p className="text-lg text-gray-300 max-w-lg">
              MonadVerse brings blockchain gaming to life with lightning-fast transactions, 
              true ownership of in-game assets, and seamless gameplay powered by Monad's 
              high-performance Layer-1 blockchain.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild className="bg-monad hover:bg-monad-accent text-white button-glow text-lg py-6 px-8">
                <Link to="/play">
                  Start Playing <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-monad/50 hover:border-monad text-white text-lg py-6 px-8">
                <Link to="/how-it-works">
                  Learn More
                </Link>
              </Button>
            </div>
            
            <div className="pt-8 flex flex-col sm:flex-row gap-6 text-center sm:text-left">
              <div>
                <div className="text-3xl font-bold text-monad">100K+</div>
                <div className="text-sm text-gray-400">Active Players</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-monad">1M+</div>
                <div className="text-sm text-gray-400">NFTs Minted</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-monad">$20M+</div>
                <div className="text-sm text-gray-400">Trading Volume</div>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <div className="relative">
              <div className="glass-card rounded-xl overflow-hidden border-2 border-monad/20 animate-float">
                <img 
                  src="https://assets-lovable.b-cdn.net/cyberpunk-game-character-futuristic.webp" 
                  alt="MonadVerse Game" 
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 glass-card p-4 rounded-lg">
                <div className="text-monad font-bold">Powered by</div>
                <div className="text-2xl font-bold text-white">Monad Blockchain</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
