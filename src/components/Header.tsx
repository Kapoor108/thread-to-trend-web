
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Heart, ShoppingCart, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const leftNavItems = [
    { name: 'Home', href: '/' },
    { name: 'Shop', href: '/shop' },
    { name: 'Upcycle Studio', href: '/upcycle-studio' },
    { name: 'Customize My Outfit', href: '/customize' }
  ];

  const rightNavItems = [
    { name: 'Donate Clothes', href: '/donate' },
    { name: 'Tailor/Designer Portal', href: '/tailor-portal' },
    { name: 'NGO/Partners', href: '/ngo-partners' },
    { name: 'StyleFeed', href: '/stylefeed' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-rv-bg-dark/95 backdrop-blur-glass border-b border-rv-primary/20">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between lg:justify-center">
          
          {/* Left Navigation - Hidden on mobile */}
          <nav className="hidden lg:flex items-center space-x-6 flex-1 justify-end mr-8">
            {leftNavItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-rv-bg-light hover:text-rv-accent transition-all duration-300 font-body font-medium text-sm whitespace-nowrap relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-rv-gradient after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Centered Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-rv-gradient rounded-2xl flex items-center justify-center shadow-neon group-hover:animate-pulse-glow transition-all duration-300">
              <span className="text-white font-heading font-black text-xl">R</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl md:text-3xl font-heading font-black text-white">
                ReVastra
              </span>
              <span className="text-xs font-body text-rv-accent -mt-1 tracking-wider uppercase">
                FROM TRASH TO TREND
              </span>
            </div>
          </Link>

          {/* Right Navigation - Hidden on mobile */}
          <nav className="hidden lg:flex items-center space-x-6 flex-1 justify-start ml-8">
            {rightNavItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-rv-bg-light hover:text-rv-accent transition-all duration-300 font-body font-medium text-sm whitespace-nowrap relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-rv-gradient after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right Side Icons & Mobile Menu */}
          <div className="flex items-center space-x-3 lg:absolute lg:right-6">
            <Button variant="ghost" size="icon" className="hidden sm:flex hover:bg-rv-primary/20 hover:text-rv-accent transition-all duration-300 text-rv-bg-light">
              <Heart className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-rv-primary/20 hover:text-rv-accent transition-all duration-300 relative text-rv-bg-light">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-2 -right-2 bg-rv-accent text-rv-text-primary text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                3
              </span>
            </Button>
            <Link to="/dashboard">
              <Button variant="ghost" size="icon" className="hidden sm:flex hover:bg-rv-primary/20 hover:text-rv-accent transition-all duration-300 text-rv-bg-light">
                <User className="h-5 w-5" />
              </Button>
            </Link>
            
            {/* Mobile Menu Button */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="lg:hidden hover:bg-rv-primary/20 text-rv-bg-light"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-6 pb-6 border-t border-rv-primary/20 pt-6 glass-card rounded-2xl bg-rv-bg-light/95">
            <nav className="flex flex-col space-y-4">
              {[...leftNavItems, ...rightNavItems].map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-rv-text-primary hover:text-rv-accent transition-all duration-300 font-body font-medium py-3 px-4 rounded-xl hover:bg-rv-primary/10"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/dashboard"
                className="text-rv-text-primary hover:text-rv-accent transition-all duration-300 font-body font-medium py-3 px-4 rounded-xl hover:bg-rv-primary/10"
                onClick={() => setIsMenuOpen(false)}
              >
                Dashboard
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
