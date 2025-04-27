
import { Link } from "react-router-dom";
import { Gamepad, Twitter, Github, ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black/50 pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between gap-8 mb-12">
          <div className="md:w-1/4">
            <div className="flex items-center gap-2 mb-4">
              <Gamepad className="h-8 w-8 text-monad" />
              <span className="text-2xl font-bold text-gradient">MonadVerse</span>
            </div>
            <p className="text-gray-400 mb-4">
              A blockchain-based game built on Monad's fast and scalable Layer-1 technology.
            </p>
            <div className="flex gap-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-monad">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-monad">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:w-2/3">
            <div>
              <h3 className="text-white font-bold mb-4">Navigation</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-400 hover:text-monad">Home</Link></li>
                <li><Link to="/features" className="text-gray-400 hover:text-monad">Features</Link></li>
                <li><Link to="/how-it-works" className="text-gray-400 hover:text-monad">How It Works</Link></li>
                <li><Link to="/leaderboard" className="text-gray-400 hover:text-monad">Leaderboard</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-bold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <a href="https://monad.xyz" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-monad flex items-center gap-1">
                    Monad <ExternalLink className="h-3 w-3" />
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-monad">Documentation</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-monad">Smart Contracts</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-monad">FAQs</a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-bold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-monad">Terms of Service</a></li>
                <li><a href="#" className="text-gray-400 hover:text-monad">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8 text-center md:text-left">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} MonadVerse Game. All rights reserved. Built on Monad.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
