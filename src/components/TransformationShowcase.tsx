
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowUp } from 'lucide-react';

const TransformationShowcase = () => {
  const transformations = [
    {
      id: 1,
      before: "Old Saree",
      after: "Trendy Tote Bag",
      story: "Grandmother's silk saree becomes a modern everyday companion",
      impact: "Saved 2.5L water",
      designer: "Priya Artisan Co-op"
    },
    {
      id: 2,
      before: "Worn Jeans",
      after: "Stylish Jacket",
      story: "Faded denim gets a second life as streetwear fashion",
      impact: "Prevented 1kg waste",
      designer: "Urban Revival Studio"
    },
    {
      id: 3,
      before: "Cotton Shirts",
      after: "Bohemian Dress",
      story: "Three old shirts merged into one beautiful flowing dress",
      impact: "Helped 1 family",
      designer: "Sustainable Sisters"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-brand-purple to-brand-pink bg-clip-text text-transparent">
            Transformation Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Every piece in our collection has a previous life. Here are some incredible transformations that show the magic of upcycling.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {transformations.map((item, index) => (
            <Card key={item.id} className={`overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 animate-fade-in`} style={{animationDelay: `${index * 200}ms`}}>
              <CardContent className="p-0">
                {/* Before/After Visual */}
                <div className="relative h-64 bg-gradient-to-r from-gray-100 to-gray-200 flex items-center justify-center">
                  <div className="text-center">
                    <div className="flex items-center justify-center space-x-4 mb-4">
                      <div className="bg-red-100 px-4 py-2 rounded-full text-red-600 font-semibold text-sm">
                        {item.before}
                      </div>
                      <ArrowUp className="h-6 w-6 text-brand-purple transform rotate-90" />
                      <div className="bg-green-100 px-4 py-2 rounded-full text-green-600 font-semibold text-sm">
                        {item.after}
                      </div>
                    </div>
                    <div className="w-32 h-32 mx-auto bg-brand-gradient rounded-2xl flex items-center justify-center">
                      <span className="text-white text-2xl">✨</span>
                    </div>
                  </div>
                </div>

                {/* Story Content */}
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-3 text-gray-800">{item.story}</h3>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Impact:</span>
                      <span className="font-semibold text-brand-mint">{item.impact}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Designer:</span>
                      <span className="font-semibold text-brand-purple">{item.designer}</span>
                    </div>
                  </div>

                  <Button className="w-full bg-brand-gradient hover:opacity-90 text-white font-semibold">
                    See Full Journey
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="border-2 border-brand-purple text-brand-purple hover:bg-brand-purple hover:text-white font-bold py-3 px-8 rounded-full">
            View All Transformations
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TransformationShowcase;
