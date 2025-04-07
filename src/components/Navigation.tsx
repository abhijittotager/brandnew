import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Menu, X, Home } from 'lucide-react';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-[#58005b] text-white px-6 py-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 hover:text-purple-200">
            <Shield className="h-8 w-8" />
            <span className="text-xl font-bold">CyVAWG</span>
          </Link>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="flex items-center space-x-1 hover:text-purple-200">
              <Home className="h-5 w-5" />
              <span>Home</span>
            </Link>
            <Link to="/case-stories" className="hover:text-purple-200">Case Study</Link>
            <Link to="/toolkit" className="hover:text-purple-200">Tool Kit</Link>
            <Link to="/workshop" className="hover:text-purple-200">Workshop</Link>
            <Link to="/resources" className="hover:text-purple-200">Resource & Support</Link>
          </div>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <Link 
              to="/" 
              className="flex items-center space-x-2 hover:text-purple-200"
              onClick={() => setIsMenuOpen(false)}
            >
              <Home className="h-5 w-5" />
              <span>Home</span>
            </Link>
            <Link 
              to="/case-stories" 
              className="block hover:text-purple-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Case Story
            </Link>
            <Link 
              to="/toolkit" 
              className="block hover:text-purple-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Tool Kit
            </Link>
            <Link 
              to="/workshop" 
              className="block hover:text-purple-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Workshop
            </Link>
            <Link 
              to="/resources" 
              className="block hover:text-purple-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Resource & Support
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}