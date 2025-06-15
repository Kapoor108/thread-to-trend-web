
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Sparkles, Recycle, Heart } from 'lucide-react';

const HeroSection = () => {
  const [statsCount, setStatsCount] = useState({
    clothesRecycled: 0,
    peopleImpacted: 0,
    waterSaved: 0
  });

  // Animated counter effect
  useEffect(() => {
    const targets = {
      clothesRecycled: 25420,
      peopleImpacted: 8750,
      waterSaved: 125000
    };

    const duration = 2500;
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
    <section className="min-h-screen bg-rv-hero-gradient flex items-center justify-center relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-32 h-32 bg-rv-primary rounded-full animate-float blur-xl"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-rv-secondary rounded-full animate-float delay-300 blur-lg"></div>
        <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-rv-accent rounded-full animate-float delay-700 blur-lg"></div>
        <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-rv-secondary rounded-full animate-float delay-1000 blur-md"></div>
      </div>

      <div className="container-custom text-center relative z-10">
        {/* Main Headline */}
        <div className="animate-fade-in">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="h-8 w-8 text-rv-primary mr-2 animate-bounce-in" />
            <span className="font-heading font-bold text-rv-primary bg-rv-primary/10 px-4 py-2 rounded-full text-sm">
              SUSTAINABLE FASHION REVOLUTION
            </span>
            <Sparkles className="h-8 w-8 text-rv-secondary ml-2 animate-bounce-in delay-200" />
          </div>
          
          <h1 className="text-6xl md:text-8xl font-heading font-black mb-8 leading-tight">
            <span className="block text-rv-text-primary text-shadow">From</span>
            <span className="block gradient-text animate-pulse-glow">
              Trash to Trend
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-rv-text-secondary mb-12 max-w-4xl mx-auto leading-relaxed font-body">
            ♻️ Transforming forgotten clothes into <span className="gradient-text font-semibold">sustainable fashion</span> that makes a difference. 
            Every piece tells a story of <span className="text-rv-primary font-semibold">renewal</span> and <span className="text-rv-secondary font-semibold">hope</span>.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20 animate-fade-in delay-300">
          <Button className="neon-button text-lg py-4 px-8 group">
            <Heart className="mr-2 h-5 w-5 group-hover:animate-bounce" />
            Donate Clothes 💝
          </Button>
          <Button 
            variant="outline" 
            className="border-2 border-rv-primary text-rv-primary hover:bg-rv-primary hover:text-white font-heading font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 group"
          >
            <Recycle className="mr-2 h-5 w-5 group-hover:animate-spin" />
            Shop Now 🛍️
          </Button>
        </div>

        {/* Animated Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 animate-fade-in delay-500">
          <div className="glass-card rounded-3xl p-8 hover:shadow-neon transition-all duration-500 transform hover:scale-105 group">
            <div className="text-4xl md:text-5xl font-heading font-black gradient-text mb-3 group-hover:animate-pulse">
              {statsCount.clothesRecycled.toLocaleString()}+
            </div>
            <div className="text-rv-text-secondary font-body font-semibold">Clothes Upcycled</div>
            <div className="w-12 h-1 bg-rv-gradient mx-auto mt-3 rounded-full"></div>
          </div>
          
          <div className="glass-card rounded-3xl p-8 hover:shadow-neon transition-all duration-500 transform hover:scale-105 group">
            <div className="text-4xl md:text-5xl font-heading font-black gradient-text mb-3 group-hover:animate-pulse">
              {statsCount.peopleImpacted.toLocaleString()}+
            </div>
            <div className="text-rv-text-secondary font-body font-semibold">Lives Impacted</div>
            <div className="w-12 h-1 bg-rv-gradient mx-auto mt-3 rounded-full"></div>
          </div>
          
          <div className="glass-card rounded-3xl p-8 hover:shadow-neon transition-all duration-500 transform hover:scale-105 group">
            <div className="text-4xl md:text-5xl font-heading font-black gradient-text mb-3 group-hover:animate-pulse">
              {statsCount.waterSaved.toLocaleString()}L
            </div>
            <div className="text-rv-text-secondary font-body font-semibold">Water Saved</div>
            <div className="w-12 h-1 bg-rv-gradient mx-auto mt-3 rounded-full"></div>
          </div>
        </div>

        {/* Tagline */}
        <div className="glass-card rounded-2xl p-6 mb-12 max-w-2xl mx-auto">
          <p className="text-lg font-heading font-semibold gradient-text">
            "We don't sell clothes. We sell second chances." ✨
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="animate-bounce">
          <ArrowDown className="h-8 w-8 text-rv-primary mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
