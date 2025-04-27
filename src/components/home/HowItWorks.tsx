
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Connect Your Wallet",
    description: "Link your MetaMask or other web3 wallet to access the MonadVerse ecosystem.",
    color: "from-monad to-monad-accent"
  },
  {
    number: "02",
    title: "Create Your Character",
    description: "Mint your own unique NFT character that you truly own on the Monad blockchain.",
    color: "from-monad-accent to-monad-secondary"
  },
  {
    number: "03",
    title: "Play & Earn",
    description: "Compete in games, complete quests, and earn rewards stored securely on-chain.",
    color: "from-monad-secondary to-monad-tertiary"
  },
  {
    number: "04",
    title: "Trade & Evolve",
    description: "Trade assets in our marketplace and evolve your gameplay experience over time.",
    color: "from-monad-tertiary to-monad"
  }
];

const HowItWorks = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="py-24 relative" id="how-it-works">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            How <span className="text-gradient">MonadVerse</span> Works
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A seamless gaming experience powered by Monad's high-performance blockchain technology
          </p>
        </motion.div>

        <motion.div 
          className="relative max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Vertical line connecting steps */}
          <div className="absolute left-[30px] md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-monad via-monad-accent to-monad-tertiary opacity-30 transform -translate-x-1/2 z-0 hidden md:block"></div>
          
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              className={`flex flex-col md:flex-row items-center gap-8 mb-20 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
              variants={itemVariants}
            >
              <div className="md:w-1/2 flex justify-center">
                <div className={`glass-card w-60 h-60 rounded-full flex items-center justify-center bg-gradient-to-br ${step.color} p-1`}>
                  <div className="bg-monad-dark rounded-full w-[95%] h-[95%] flex flex-col items-center justify-center p-6 text-center">
                    <span className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-monad to-monad-accent mb-2">{step.number}</span>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-sm text-gray-400">{step.description}</p>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="glass-card p-6 md:p-10">
                  <div className="md:hidden text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-monad to-monad-accent mb-2">{step.number}</div>
                  <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                  
                  {/* Additional details based on step */}
                  {index === 0 && (
                    <div className="mt-4 p-4 bg-white/5 rounded-lg">
                      <p className="text-sm text-gray-300">Monad's blockchain ensures secure and fast wallet connections with minimal gas fees.</p>
                    </div>
                  )}
                  {index === 1 && (
                    <div className="mt-4 p-4 bg-white/5 rounded-lg">
                      <p className="text-sm text-gray-300">Your NFT character exists permanently on the Monad blockchain, giving you true ownership.</p>
                    </div>
                  )}
                  {index === 2 && (
                    <div className="mt-4 p-4 bg-white/5 rounded-lg">
                      <p className="text-sm text-gray-300">Transactions are processed in milliseconds thanks to Monad's high-throughput architecture.</p>
                    </div>
                  )}
                  {index === 3 && (
                    <div className="mt-4 p-4 bg-white/5 rounded-lg">
                      <p className="text-sm text-gray-300">The MonadVerse marketplace leverages Monad's scalable infrastructure for seamless trading.</p>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      {/* Background elements */}
      <div className="absolute top-1/4 -left-64 w-96 h-96 rounded-full bg-monad/20 blur-3xl"></div>
      <div className="absolute bottom-1/4 -right-64 w-96 h-96 rounded-full bg-monad-accent/20 blur-3xl"></div>
    </section>
  );
};

export default HowItWorks;
