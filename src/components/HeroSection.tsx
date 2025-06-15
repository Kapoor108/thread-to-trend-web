
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  const [statsCount, setStatsCount] = useState({
    clothesRecycled: 0,
    peopleImpacted: 0,
    waterSaved: 0
  });

  // Animated counter effect
  useEffect(() => {
    const targets = {
      clothesRecycled: 15420,
      peopleImpacted: 3250,
      waterSaved: 89500
    };

    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = duration / steps;

    const timer = setInterval(() => {
      setStatsCount(prev => ({
        clothesRecycled: Math.min(prev.clothesRecycled + Math.ceil(targets.clothesRecycled / steps), targets.clothesRecycled),
        peopleImpacted: Math.min(prev.peopleImpacted + Math.ceil(targets.peopleImpacted / steps), targets.peopleImpacted),
        waterSaved: Math.min(prev.waterSaved + Math.ceil(targets.waterSaved / steps), targets.waterSaved)
      }));
    }, increment);

    setTimeout(() => clearInterval(timer), duration);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-screen bg-hero-gradient flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-brand-pink rounded-full animate-float"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-brand-mint rounded-full animate-float delay-300"></div>
        <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-brand-coral rounded-full animate-float delay-700"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Main Headline */}
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            <span className="block text-gray-800">From</span>
            <span className="block bg-gradient-to-r from-brand-pink via-brand-purple to-brand-mint bg-clip-text text-transparent">
              Trash to Trend
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            ♻️ Transforming forgotten clothes into sustainable fashion that makes a difference. 
            Every piece tells a story of renewal and hope.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in delay-300">
          <Button size="lg" className="bg-brand-pink hover:bg-brand-coral text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            Donate Clothes 💝
          </Button>
          <Button size="lg" variant="outline" className="border-2 border-brand-purple text-brand-purple hover:bg-brand-purple hover:text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105">
            Shop Now 🛍️
          </Button>
        </div>

        {/* Animated Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 animate-fade-in delay-500">
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <div className="text-3xl md:text-4xl font-black text-brand-purple mb-2">
              {statsCount.clothesRecycled.toLocaleString()}+
            </div>
            <div className="text-gray-600 font-semibold">Clothes Recycled</div>
          </div>
          
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <div className="text-3xl md:text-4xl font-black text-brand-mint mb-2">
              {statsCount.peopleImpacted.toLocaleString()}+
            </div>
            <div className="text-gray-600 font-semibold">People Impacted</div>
          </div>
          
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <div className="text-3xl md:text-4xl font-black text-brand-sky mb-2">
              {statsCount.waterSaved.toLocaleString()}L
            </div>
            <div className="text-gray-600 font-semibold">Water Saved</div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="animate-bounce">
          <ArrowDown className="h-8 w-8 text-brand-purple mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
