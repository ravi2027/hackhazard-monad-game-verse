
import Layout from "@/components/layout/Layout";
import LeaderboardTable from "@/components/leaderboard/LeaderboardTable";
import { BarChart2 } from "lucide-react";
import { motion } from "framer-motion";

const LeaderboardPage = () => {
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
            <div className="inline-block glass-card px-4 py-2 mb-4">
              <span className="text-sm font-medium text-monad flex items-center gap-2">
                <BarChart2 className="h-4 w-4" /> On-Chain Verified Stats
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">Leaderboard</span>
            </h1>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Check out the top players in MonadVerse with real-time stats
              pulled directly from the Monad blockchain.
            </p>
          </motion.div>
        </div>
      </section>
      
      <section className="py-12 relative">
        <div className="container mx-auto px-4">
          <LeaderboardTable />
          
          <motion.div 
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-400 max-w-2xl mx-auto">
              All player statistics are verified and stored on the Monad blockchain,
              ensuring complete transparency and fairness.
            </p>
          </motion.div>
        </div>
        
        <div className="absolute bottom-0 -left-64 w-96 h-96 rounded-full bg-monad/30 blur-3xl"></div>
      </section>
    </Layout>
  );
};

export default LeaderboardPage;
