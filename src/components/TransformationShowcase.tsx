
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Award, Droplets } from 'lucide-react';

const TransformationShowcase = () => {
  const transformations = [
    {
      id: 1,
      before: "Vintage Saree",
      after: "Trendy Tote Bag",
      story: "Grandmother's silk saree becomes a modern everyday companion with ethnic charm",
      impact: "Saved 2.5L water",
      designer: "Priya Artisan Co-op",
      badge: "🌟 Most Loved",
      color: "from-rv-primary to-rv-secondary"
    },
    {
      id: 2,
      before: "Worn Denim",
      after: "Streetwear Jacket",
      story: "Faded jeans get a second life as premium streetwear with custom patches",
      impact: "Prevented 1kg waste",
      designer: "Urban Revival Studio",
      badge: "🔥 Trending",
      color: "from-rv-secondary to-rv-accent"
    },
    {
      id: 3,
      before: "Cotton Shirts",
      after: "Bohemian Dress",
      story: "Three forgotten shirts merged into one beautiful flowing summer dress",
      impact: "Helped 1 family",
      designer: "Sustainable Sisters",
      badge: "💝 Impact Hero",
      color: "from-rv-accent to-rv-primary"
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-rv-bg-light to-white">
      <div className="container-custom">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="h-6 w-6 text-rv-primary mr-2 animate-bounce" />
            <span className="font-heading font-bold text-rv-primary bg-rv-primary/10 px-4 py-2 rounded-full text-sm">
              TRANSFORMATION STORIES
            </span>
            <Sparkles className="h-6 w-6 text-rv-secondary ml-2 animate-bounce delay-200" />
          </div>
          
          <h2 className="text-5xl md:text-6xl font-heading font-black mb-8 gradient-text">
            From Forgotten to Fabulous
          </h2>
          <p className="text-xl text-rv-text-secondary max-w-3xl mx-auto font-body leading-relaxed">
            Every piece in our collection has a <span className="gradient-text font-semibold">previous life</span>. 
            Here are some incredible transformations that show the <span className="text-rv-primary font-semibold">magic of upcycling</span>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {transformations.map((item, index) => (
            <Card 
              key={item.id} 
              className={`overflow-hidden shadow-lg hover:shadow-neon transition-all duration-500 transform hover:scale-105 animate-fade-in border-0 rounded-3xl group`} 
              style={{animationDelay: `${index * 200}ms`}}
            >
              <CardContent className="p-0">
                {/* Transformation Visual */}
                <div className={`relative h-72 bg-gradient-to-r ${item.color} flex items-center justify-center overflow-hidden`}>
                  {/* Badge */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-heading font-bold text-rv-text-primary">
                    {item.badge}
                  </div>
                  
                  <div className="text-center z-10">
                    <div className="flex items-center justify-center space-x-6 mb-6">
                      <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-2xl text-white font-heading font-bold text-sm">
                        {item.before}
                      </div>
                      <ArrowRight className="h-8 w-8 text-white animate-pulse" />
                      <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-2xl text-white font-heading font-bold text-sm">
                        {item.after}
                      </div>
                    </div>
                    <div className="w-32 h-32 mx-auto bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center group-hover:animate-bounce-in">
                      <Sparkles className="text-white text-4xl" />
                    </div>
                  </div>
                  
                  {/* Floating Elements */}
                  <div className="absolute top-16 right-8 w-6 h-6 bg-white/30 rounded-full animate-float"></div>
                  <div className="absolute bottom-16 left-8 w-4 h-4 bg-white/40 rounded-full animate-float delay-300"></div>
                </div>

                {/* Story Content */}
                <div className="p-8 bg-white">
                  <h3 className="font-heading font-bold text-xl mb-4 text-rv-text-primary group-hover:gradient-text transition-all duration-300">
                    {item.story}
                  </h3>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between">
                      <span className="text-rv-text-secondary font-body flex items-center">
                        <Droplets className="h-4 w-4 mr-2 text-rv-accent" />
                        Impact:
                      </span>
                      <span className="font-heading font-bold text-rv-accent">{item.impact}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-rv-text-secondary font-body flex items-center">
                        <Award className="h-4 w-4 mr-2 text-rv-primary" />
                        Designer:
                      </span>
                      <span className="font-heading font-bold text-rv-primary">{item.designer}</span>
                    </div>
                  </div>

                  <Button className="w-full bg-rv-gradient hover:opacity-90 text-white font-heading font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-neon">
                    See Full Journey ✨
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button 
            size="lg" 
            variant="outline" 
            className="border-2 border-rv-primary text-rv-primary hover:bg-rv-primary hover:text-white font-heading font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105"
          >
            View All Transformations 🎨
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TransformationShowcase;
