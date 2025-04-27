
import { Button } from "@/components/ui/button";
import { ArrowRight, Gamepad } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20 z-0"></div>
      <div className="absolute w-full h-full bg-gradient-to-t from-monad-dark via-transparent to-monad-dark z-0"></div>
      
      <motion.div 
        className="container mx-auto px-4 relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="glass-card p-8 md:p-16 relative overflow-hidden">
          {/* Background glow effects */}
          <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-monad/30 blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-monad-accent/20 blur-3xl translate-x-1/2 translate-y-1/2"></div>
          
          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="inline-block glass-card px-4 py-2 mb-8">
              <span className="text-sm font-medium text-monad flex items-center gap-2">
                <Gamepad className="h-4 w-4" /> Join the MonadVerse Today
              </span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Experience <span className="text-gradient">Next-Gen Blockchain Gaming</span>?
            </h2>
            
            <p className="text-gray-300 max-w-2xl mb-8">
              Connect your wallet now to join thousands of players in the MonadVerse ecosystem. 
              Experience lightning-fast blockchain gaming powered by Monad's Layer-1 technology.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="bg-monad hover:bg-monad-accent text-white button-glow text-lg py-6 px-8">
                <Link to="/play">
                  Connect Wallet <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-monad/50 hover:border-monad text-white text-lg py-6 px-8">
                <a href="https://monad.xyz" target="_blank" rel="noopener noreferrer">
                  Learn About Monad
                </a>
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CTA;
