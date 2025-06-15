
import React from 'react';
import { Button } from '@/components/ui/button';
import { Heart, Recycle, Users } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-brand-pink via-brand-purple to-brand-mint relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 border-4 border-white rounded-full"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-white rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white/50 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 border-4 border-white/50 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="text-white mb-12">
          <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
            Join thousands of eco-warriors who are transforming fashion, one thread at a time. 
            Your old clothes could be someone's new favorite outfit! ✨
          </p>
        </div>

        {/* Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 text-white hover:bg-white/30 transition-all duration-300 transform hover:scale-105">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold mb-3">Donate Clothes</h3>
            <p className="opacity-90 mb-4">Turn your unused clothes into hope for others</p>
            <Button className="bg-white text-brand-purple hover:bg-gray-100 font-semibold">
              Start Donating
            </Button>
          </div>

          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 text-white hover:bg-white/30 transition-all duration-300 transform hover:scale-105">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Recycle className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold mb-3">Shop Upcycled</h3>
            <p className="opacity-90 mb-4">Find unique pieces with amazing stories</p>
            <Button className="bg-white text-brand-purple hover:bg-gray-100 font-semibold">
              Shop Now
            </Button>
          </div>

          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 text-white hover:bg-white/30 transition-all duration-300 transform hover:scale-105">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold mb-3">Join Community</h3>
            <p className="opacity-90 mb-4">Connect with like-minded eco-warriors</p>
            <Button className="bg-white text-brand-purple hover:bg-gray-100 font-semibold">
              Join Us
            </Button>
          </div>
        </div>

        {/* Main CTA */}
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
            "We don't sell clothes. We sell second chances." 💫
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-brand-purple hover:bg-gray-100 font-bold py-4 px-8 rounded-full text-lg shadow-lg">
              Get Started Today 🚀
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-brand-purple font-bold py-4 px-8 rounded-full text-lg">
              Learn More 📖
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
