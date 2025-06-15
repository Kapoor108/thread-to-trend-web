
import React from 'react';
import { Button } from '@/components/ui/button';
import { Heart, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const footerSections = [
    {
      title: "Shop",
      links: [
        { name: "All Products", href: "#" },
        { name: "Bags & Accessories", href: "#" },
        { name: "Clothing", href: "#" },
        { name: "Home Decor", href: "#" },
        { name: "Gift Cards", href: "#" }
      ]
    },
    {
      title: "Get Involved",
      links: [
        { name: "Donate Clothes", href: "#" },
        { name: "Upcycle Studio", href: "#" },
        { name: "Designer Program", href: "#" },
        { name: "NGO Partnership", href: "#" },
        { name: "Volunteer", href: "#" }
      ]
    },
    {
      title: "Impact",
      links: [
        { name: "Our Story", href: "#" },
        { name: "Impact Tracker", href: "#" },
        { name: "Sustainability", href: "#" },
        { name: "Blog", href: "#" },
        { name: "Press", href: "#" }
      ]
    },
    {
      title: "Support",
      links: [
        { name: "Help Center", href: "#" },
        { name: "Contact Us", href: "#" },
        { name: "Shipping Info", href: "#" },
        { name: "Returns", href: "#" },
        { name: "Size Guide", href: "#" }
      ]
    }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-brand-purple to-brand-pink py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Stay in the Loop! 💌
          </h3>
          <p className="text-lg mb-6 opacity-90">
            Get the latest upcycled fashion drops, impact stories, and exclusive offers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <Button className="bg-white text-brand-purple hover:bg-gray-100 font-semibold px-8 py-3 rounded-full">
              Subscribe ✨
            </Button>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-brand-gradient rounded-full flex items-center justify-center">
                <span className="text-white font-bold">R</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-brand-pink to-brand-purple bg-clip-text text-transparent">
                ReVastra
              </span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Transforming forgotten clothes into sustainable fashion that makes a difference. 
              Every thread tells a story of renewal, hope, and positive impact.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="hover:bg-brand-pink/20 hover:text-brand-pink">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-brand-pink/20 hover:text-brand-pink">
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-bold text-lg mb-4 text-white">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-brand-pink transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Impact Stats */}
        <div className="border-t border-gray-800 pt-12 mt-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-brand-pink mb-2">15K+</div>
              <div className="text-gray-400">Clothes Transformed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-brand-mint mb-2">3K+</div>
              <div className="text-gray-400">Lives Impacted</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-brand-sky mb-2">89K+</div>
              <div className="text-gray-400">Liters Water Saved</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-brand-yellow mb-2">25+</div>
              <div className="text-gray-400">NGO Partners</div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 mt-12 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 mb-4 md:mb-0">
            © 2024 ReVastra. Made with <Heart className="inline h-4 w-4 text-brand-pink" /> for a sustainable future.
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
