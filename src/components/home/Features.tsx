
import { Gamepad, Wallet, Link2, BarChart2 } from "lucide-react";
import { motion } from "framer-motion";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
}

const FeatureCard = ({ title, description, icon, delay }: FeatureCardProps) => {
  return (
    <motion.div 
      className="glass-card p-6 hover:border-monad/40 transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="bg-gradient-to-br from-monad to-monad-accent rounded-lg p-3 w-12 h-12 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  );
};

const Features = () => {
  const features = [
    {
      title: "On-Chain Gameplay",
      description: "All game actions and achievements are recorded on Monad's blockchain, ensuring transparency and fairness.",
      icon: <Gamepad className="h-6 w-6 text-white" />,
    },
    {
      title: "True Asset Ownership",
      description: "Own your in-game items as NFTs, freely trade them, and take them with you across the MonadVerse ecosystem.",
      icon: <Wallet className="h-6 w-6 text-white" />,
    },
    {
      title: "Instant Transactions",
      description: "Monad's high-throughput Layer-1 ensures lightning-fast transactions with minimal fees.",
      icon: <Link2 className="h-6 w-6 text-white" />,
    },
    {
      title: "Real-Time Stats",
      description: "Track your achievements, leaderboard position, and asset value in real-time with on-chain verification.",
      icon: <BarChart2 className="h-6 w-6 text-white" />,
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden" id="features">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Blockchain-Powered</span> Game Features
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Experience the next generation of gaming with MonadVerse's unique blockchain features,
            all powered by Monad's lightning-fast Layer-1 technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              delay={index}
            />
          ))}
        </div>
      </div>

      <div className="absolute top-0 -right-64 w-96 h-96 rounded-full bg-monad/30 blur-3xl"></div>
      <div className="absolute bottom-0 -left-64 w-96 h-96 rounded-full bg-monad-accent/20 blur-3xl"></div>
    </section>
  );
};

export default Features;
