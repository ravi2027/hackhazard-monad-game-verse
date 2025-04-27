
import Layout from "@/components/layout/Layout";
import HowItWorks from "@/components/home/HowItWorks";
import { motion } from "framer-motion";

const HowItWorksPage = () => {
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
              <span className="text-gradient">How It Works</span>
            </h1>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Discover how MonadVerse leverages Monad's Layer-1 blockchain 
              to create a seamless gaming experience.
            </p>
          </motion.div>
        </div>
      </section>
      
      <HowItWorks />
      
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Technical <span className="text-gradient">Architecture</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              A look under the hood at how MonadVerse is built on Monad's high-performance blockchain.
            </p>
          </motion.div>
          
          <div className="glass-card p-8 md:p-12 max-w-4xl mx-auto">
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-center">
                <div className="bg-gradient-to-br from-monad to-monad-accent rounded-lg p-1">
                  <div className="bg-monad-dark rounded-lg p-6 h-full">
                    <h3 className="text-xl font-bold mb-4">Front End</h3>
                    <div className="space-y-2 text-sm text-gray-300">
                      <p>React.js Application</p>
                      <p>Ethers.js / Web3</p>
                      <p>Wallet Integration</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <div className="bg-gradient-to-br from-monad-accent to-monad-secondary rounded-lg p-1">
                  <div className="bg-monad-dark rounded-lg p-6 h-full">
                    <h3 className="text-xl font-bold mb-4">Smart Contracts</h3>
                    <div className="space-y-2 text-sm text-gray-300">
                      <p>Game Logic</p>
                      <p>NFT Standards</p>
                      <p>Ownership Registry</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <div className="bg-gradient-to-br from-monad-secondary to-monad-tertiary rounded-lg p-1">
                  <div className="bg-monad-dark rounded-lg p-6 h-full">
                    <h3 className="text-xl font-bold mb-4">Monad Blockchain</h3>
                    <div className="space-y-2 text-sm text-gray-300">
                      <p>High Throughput</p>
                      <p>Low Latency</p>
                      <p>Minimal Fees</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="mt-12 grid-pattern rounded-lg p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="text-center">
                <h3 className="text-xl font-bold mb-4">Data Flow</h3>
                <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                  <div className="glass-card px-6 py-3">
                    <span className="text-monad">User Action</span>
                  </div>
                  <div className="text-monad rotate-90 md:rotate-0">→</div>
                  <div className="glass-card px-6 py-3">
                    <span className="text-monad">Smart Contract</span>
                  </div>
                  <div className="text-monad rotate-90 md:rotate-0">→</div>
                  <div className="glass-card px-6 py-3">
                    <span className="text-monad">Monad Blockchain</span>
                  </div>
                  <div className="text-monad rotate-90 md:rotate-0">→</div>
                  <div className="glass-card px-6 py-3">
                    <span className="text-monad">Game State Update</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        
        <div className="absolute bottom-0 -right-64 w-96 h-96 rounded-full bg-monad/30 blur-3xl"></div>
      </section>
    </Layout>
  );
};

export default HowItWorksPage;
