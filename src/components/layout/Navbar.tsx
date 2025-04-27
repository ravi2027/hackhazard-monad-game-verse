
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Gamepad, Menu, X, Wallet } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? "py-3 glass-card" : "py-6 bg-transparent"
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <Gamepad className="h-8 w-8 text-monad" />
          <span className="text-2xl font-bold text-gradient">MonadVerse</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-8">
            <Link to="/features" className="text-white hover:text-monad transition-colors">
              Features
            </Link>
            <Link to="/how-it-works" className="text-white hover:text-monad transition-colors">
              How It Works
            </Link>
            <Link to="/leaderboard" className="text-white hover:text-monad transition-colors">
              Leaderboard
            </Link>
          </div>
          <Button className="bg-monad hover:bg-monad-accent text-white button-glow">
            <Wallet className="mr-2 h-4 w-4" /> Connect Wallet
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button variant="ghost" onClick={toggleMenu} className="text-white">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden glass-card mt-2 p-4 mx-4 flex flex-col gap-4 animate-fade-in">
          <Link 
            to="/features" 
            className="text-white hover:text-monad py-2 transition-colors"
            onClick={toggleMenu}
          >
            Features
          </Link>
          <Link 
            to="/how-it-works" 
            className="text-white hover:text-monad py-2 transition-colors"
            onClick={toggleMenu}
          >
            How It Works
          </Link>
          <Link 
            to="/leaderboard" 
            className="text-white hover:text-monad py-2 transition-colors"
            onClick={toggleMenu}
          >
            Leaderboard
          </Link>
          <Button className="bg-monad hover:bg-monad-accent text-white w-full button-glow">
            <Wallet className="mr-2 h-4 w-4" /> Connect Wallet
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
