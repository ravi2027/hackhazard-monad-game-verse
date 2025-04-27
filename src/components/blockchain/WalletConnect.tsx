
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Wallet } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface WalletConnectProps {
  className?: string;
}

interface WalletInfo {
  address: string;
  balance: string;
  network: string;
}

const WalletConnect = ({ className = "" }: WalletConnectProps) => {
  const [connecting, setConnecting] = useState(false);
  const [walletInfo, setWalletInfo] = useState<WalletInfo | null>(null);
  const [isMetaMaskInstalled, setIsMetaMaskInstalled] = useState<boolean | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    // Check if MetaMask is installed when the component mounts
    const checkMetaMaskInstalled = () => {
      const installed = typeof window !== "undefined" && !!window.ethereum;
      setIsMetaMaskInstalled(installed);
    };
    
    checkMetaMaskInstalled();
  }, []);

  const connectWallet = async () => {
    setConnecting(true);

    // This is a mock implementation - in a real app, this would use ethers.js or wagmi
    try {
      // Check if MetaMask is installed
      if (window.ethereum) {
        // Request account access
        try {
          // Simulate a real connection by waiting
          await new Promise(resolve => setTimeout(resolve, 1000));
          
          // In a real implementation, we would do:
          // const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
          // const account = accounts[0];
          
          // Mock successful connection with a random address
          const mockAddress = "0x" + Array(40).fill(0).map(() => 
            Math.floor(Math.random() * 16).toString(16)).join('');
            
          setWalletInfo({
            address: mockAddress,
            balance: "1000 MON",
            network: "Monad Testnet"
          });

          toast({
            title: "Wallet Connected",
            description: "Successfully connected to your wallet",
            variant: "default",
          });
        } catch (error) {
          console.error("User rejected the connection request", error);
          toast({
            title: "Connection Rejected",
            description: "You rejected the connection request",
            variant: "destructive",
          });
        }
      } else {
        toast({
          title: "MetaMask not found",
          description: "Please install MetaMask to connect your wallet",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Error connecting wallet:", error);
      toast({
        title: "Connection Failed",
        description: "Failed to connect to your wallet",
        variant: "destructive",
      });
    } finally {
      setConnecting(false);
    }
  };

  const disconnectWallet = () => {
    setWalletInfo(null);
    toast({
      title: "Wallet Disconnected",
      description: "Your wallet has been disconnected",
      variant: "default",
    });
  };

  const formatAddress = (address: string) => {
    return `${address.substring(0, 6)}...${address.substring(address.length - 4)}`;
  };

  if (walletInfo) {
    return (
      <div className={`glass-card p-4 ${className}`}>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-gray-300">{walletInfo.network}</span>
          </div>
          <div className="text-monad font-mono">{formatAddress(walletInfo.address)}</div>
          <div className="text-sm text-gray-300">Balance: {walletInfo.balance}</div>
          <Button 
            variant="outline" 
            className="mt-2 border-monad/50 hover:border-monad text-white"
            onClick={disconnectWallet}
          >
            Disconnect
          </Button>
        </div>
      </div>
    );
  }

  return (
    <Button
      onClick={connectWallet}
      disabled={connecting}
      className={`bg-monad hover:bg-monad-accent text-white button-glow ${className}`}
    >
      {connecting ? (
        <div className="flex items-center">
          <div className="w-4 h-4 mr-2 border-2 border-t-transparent border-white rounded-full animate-spin"></div>
          Connecting...
        </div>
      ) : (
        <>
          <Wallet className="mr-2 h-4 w-4" /> Connect Wallet
        </>
      )}
    </Button>
  );
};

export default WalletConnect;
