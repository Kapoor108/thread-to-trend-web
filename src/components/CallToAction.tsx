
import React from 'react';
import { Button } from '@/components/ui/button';
import { Heart, Recycle, Users, Sparkles, Star } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="section-padding bg-rv-gradient relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 border-4 border-white rounded-full animate-float"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-white rounded-full animate-float delay-300"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white/50 rounded-full animate-float delay-700"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 border-4 border-white/50 rounded-full animate-float delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Sparkles className="h-32 w-32 text-white/10 animate-pulse" />
        </div>
      </div>

      <div className="container-custom text-center relative z-10">
        <div className="text-white mb-16">
          <div className="flex items-center justify-center mb-6">
            <Star className="h-6 w-6 mr-2 animate-bounce" />
            <span className="font-heading font-bold bg-white/20 px-4 py-2 rounded-full text-sm backdrop-blur-sm">
              JOIN THE MOVEMENT
            </span>
            <Star className="h-6 w-6 ml-2 animate-bounce delay-200" />
          </div>
          
          <h2 className="text-5xl md:text-7xl font-heading font-black mb-8 leading-tight text-shadow">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl md:text-2xl mb-12 opacity-90 max-w-4xl mx-auto font-body leading-relaxed">
            Join thousands of eco-warriors who are transforming fashion, <span className="font-bold">one thread at a time</span>. 
            Your old clothes could be someone's new favorite outfit! ✨
          </p>
        </div>

        {/* Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="glass-card rounded-3xl p-8 text-white hover:bg-white/30 transition-all duration-500 transform hover:scale-105 hover:shadow-neon group">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:animate-bounce-in">
              <Heart className="h-10 w-10" />
            </div>
            <h3 className="text-2xl font-heading font-bold mb-4">Donate Clothes</h3>
            <p className="opacity-90 mb-6 font-body">Turn your unused clothes into hope for others</p>
            <Button className="bg-white text-rv-primary hover:bg-white/90 font-heading font-bold rounded-xl transition-all duration-300 transform hover:scale-105">
              Start Donating
            </Button>
          </div>

          <div className="glass-card rounded-3xl p-8 text-white hover:bg-white/30 transition-all duration-500 transform hover:scale-105 hover:shadow-neon group">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:animate-bounce-in delay-200">
              <Recycle className="h-10 w-10" />
            </div>
            <h3 className="text-2xl font-heading font-bold mb-4">Shop Upcycled</h3>
            <p className="opacity-90 mb-6 font-body">Find unique pieces with amazing stories</p>
            <Button className="bg-white text-rv-primary hover:bg-white/90 font-heading font-bold rounded-xl transition-all duration-300 transform hover:scale-105">
              Shop Now
            </Button>
          </div>

          <div className="glass-card rounded-3xl p-8 text-white hover:bg-white/30 transition-all duration-500 transform hover:scale-105 hover:shadow-neon group">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:animate-bounce-in delay-400">
              <Users className="h-10 w-10" />
            </div>
            <h3 className="text-2xl font-heading font-bold mb-4">Join Community</h3>
            <p className="opacity-90 mb-6 font-body">Connect with like-minded eco-warriors</p>
            <Button className="bg-white text-rv-primary hover:bg-white/90 font-heading font-bold rounded-xl transition-all duration-300 transform hover:scale-105">
              Join Us
            </Button>
          </div>
        </div>

        {/* Main CTA */}
        <div className="glass-card rounded-3xl p-12 max-w-5xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-heading font-bold text-white mb-8">
            "We don't sell clothes. We sell second chances." 💫
          </h3>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button className="neon-button bg-white text-rv-primary hover:bg-white/90 text-lg py-4 px-8">
              Get Started Today 🚀
            </Button>
            <Button 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-rv-primary font-heading font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105"
            >
              Learn More 📖
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
