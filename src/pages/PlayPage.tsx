
import { useState, useEffect } from "react";
import Layout from "@/components/layout/Layout";
import WalletConnect from "@/components/blockchain/WalletConnect";
import { Button } from "@/components/ui/button";
import { Gamepad } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

const PlayPage = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  // Check if wallet is connected whenever the wallet info changes
  useEffect(() => {
    const checkWalletConnection = () => {
      // In a real app, we would check for active wallet connections
      // For now, we'll just check if there's wallet info in localStorage
      const hasWalletInfo = localStorage.getItem('walletInfo') !== null;
      setIsConnected(hasWalletInfo);
    };
    
    // Set up an event listener for wallet connection changes
    window.addEventListener('storage', checkWalletConnection);
    checkWalletConnection();
    
    return () => {
      window.removeEventListener('storage', checkWalletConnection);
    };
  }, []);

  // This is a mock function to simulate NFT minting
  const mintDemoNFT = async () => {
    setIsLoading(true);
    
    try {
      // Simulate blockchain interaction
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "NFT Minted!",
        description: "Your game character NFT has been minted successfully.",
        variant: "default",
      });
      
    } catch (error) {
      toast({
        title: "Minting Failed",
        description: "There was an error minting your NFT.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  // This would be called from the WalletConnect component
  const handleWalletConnect = () => {
    setIsConnected(true);
  };

  return (
    <Layout>
      <section className="pt-32 pb-16 relative min-h-screen">
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
                <Gamepad className="h-4 w-4" /> MonadVerse Game
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">Play Now</span>
            </h1>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Connect your wallet to access MonadVerse and begin your blockchain gaming adventure.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <div className="glass-card p-8 md:p-12">
              {!isConnected ? (
                <div className="flex flex-col items-center">
                  <p className="text-gray-300 mb-6">
                    To start playing MonadVerse, connect your wallet using the button below.
                    This will allow you to interact with the Monad blockchain and manage your in-game assets.
                  </p>
                  
                  <WalletConnect className="px-8 py-3 text-lg" />
                  
                  <p className="mt-6 text-sm text-gray-400">
                    By connecting your wallet, you agree to our Terms of Service and Privacy Policy.
                  </p>
                </div>
              ) : (
                <div className="space-y-8">
                  <div className="p-6 bg-monad/5 rounded-lg">
                    <h3 className="text-xl font-bold mb-2">Your Character</h3>
                    <p className="text-gray-300 mb-4">
                      Mint your unique character NFT on the Monad blockchain. This character will be
                      truly owned by you and can be used across the MonadVerse ecosystem.
                    </p>
                    
                    <div className="flex items-center gap-6">
                      <div className="relative w-32 h-32">
                        <div className="absolute inset-0 bg-gradient-to-r from-monad to-monad-accent rounded-lg animate-pulse-glow"></div>
                        <div className="absolute inset-1 bg-monad-dark rounded-lg flex items-center justify-center">
                          <img 
                            src="https://assets-lovable.b-cdn.net/cyberpunk-avatar-1.webp" 
                            alt="NFT Character" 
                            className="w-24 h-24 rounded"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <Button
                          onClick={mintDemoNFT}
                          disabled={isLoading}
                          className="bg-monad hover:bg-monad-accent text-white button-glow"
                        >
                          {isLoading ? (
                            <div className="flex items-center">
                              <div className="w-4 h-4 mr-2 border-2 border-t-transparent border-white rounded-full animate-spin"></div>
                              Minting...
                            </div>
                          ) : (
                            <>Mint Character NFT</>
                          )}
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6 bg-monad/5 rounded-lg">
                    <h3 className="text-xl font-bold mb-2">Game Dashboard</h3>
                    <p className="text-gray-300 mb-4">
                      Access the MonadVerse game dashboard to manage your assets, view stats,
                      and enter different game modes.
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Button 
                        variant="outline" 
                        className="border-monad/50 hover:border-monad text-white"
                      >
                        Adventure Mode
                      </Button>
                      <Button 
                        variant="outline" 
                        className="border-monad/50 hover:border-monad text-white"
                      >
                        PvP Arena
                      </Button>
                      <Button 
                        variant="outline" 
                        className="border-monad/50 hover:border-monad text-white"
                      >
                        Marketplace
                      </Button>
                      <Button 
                        variant="outline" 
                        className="border-monad/50 hover:border-monad text-white"
                      >
                        My Assets
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PlayPage;
