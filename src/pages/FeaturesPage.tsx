
import Layout from "@/components/layout/Layout";
import Features from "@/components/home/Features";
import { motion } from "framer-motion";

const FeaturesPage = () => {
  return (
    <Layout>
      <section className="pt-32 pb-16 relative">
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-radial from-monad/20 via-transparent to-transparent opacity-70 z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">Game Features</span>
            </h1>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Explore the unique blockchain-powered features that make MonadVerse
              a next-generation gaming experience.
            </p>
          </motion.div>
        </div>
      </section>
      
      <Features />
      
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div 
              className="glass-card p-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-4 text-gradient">On-Chain Game Logic</h3>
              <p className="text-gray-300 mb-6">
                MonadVerse's core game mechanics are implemented directly on the Monad blockchain,
                ensuring complete transparency, fairness, and verifiability.
              </p>
              <div className="grid-pattern w-full h-40 rounded-lg flex items-center justify-center">
                <div className="glass-card px-6 py-3">
                  <code className="text-monad">Monad Smart Contract</code>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="glass-card p-8"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-2xl font-bold mb-4 text-gradient">NFT Character System</h3>
              <p className="text-gray-300 mb-6">
                Create, customize, and evolve your in-game characters as true NFTs that you
                own completely, with all stats and history stored on the Monad blockchain.
              </p>
              <div className="flex justify-center">
                <div className="relative w-40 h-40">
                  <div className="absolute inset-0 bg-gradient-to-r from-monad to-monad-accent rounded-lg animate-pulse-glow"></div>
                  <div className="absolute inset-1 bg-monad-dark rounded-lg flex items-center justify-center">
                    <img 
                      src="https://assets-lovable.b-cdn.net/cyberpunk-avatar-1.webp" 
                      alt="NFT Character" 
                      className="w-32 h-32 rounded"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="glass-card p-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h3 className="text-2xl font-bold mb-4 text-gradient">P2P Trading Marketplace</h3>
              <p className="text-gray-300 mb-6">
                Trade your in-game assets directly with other players through our
                decentralized marketplace, powered by Monad's fast transaction speeds.
              </p>
              <div className="flex justify-center gap-6">
                <div className="glass-card p-3 flex items-center justify-center">
                  <span className="text-monad">Player A</span>
                </div>
                <div className="text-monad">⟷</div>
                <div className="glass-card p-3 flex items-center justify-center">
                  <span className="text-monad">Player B</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="glass-card p-8"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <h3 className="text-2xl font-bold mb-4 text-gradient">Cross-Game Assets</h3>
              <p className="text-gray-300 mb-6">
                Use your MonadVerse assets across multiple games in our ecosystem,
                with all ownership verification happening on the Monad blockchain.
              </p>
              <div className="flex justify-center gap-4">
                <div className="glass-card p-3 w-20 h-20 flex items-center justify-center">
                  <span className="text-monad">Game 1</span>
                </div>
                <div className="glass-card p-3 w-20 h-20 flex items-center justify-center">
                  <span className="text-monad">Game 2</span>
                </div>
                <div className="glass-card p-3 w-20 h-20 flex items-center justify-center">
                  <span className="text-monad">Game 3</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FeaturesPage;
