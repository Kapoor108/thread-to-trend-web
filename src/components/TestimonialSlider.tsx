
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const TestimonialSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Anjali Sharma",
      role: "Customer",
      image: "👩‍💼",
      text: "I donated my old wedding saree and it became the most beautiful laptop bag! Knowing it's helping someone while looking stylish makes me so happy.",
      impact: "Donated 5 items"
    },
    {
      id: 2,
      name: "Hope Foundation",
      role: "NGO Partner",
      image: "🏢",
      text: "ReVastra has been incredible in helping us provide quality clothing to families in need. The transformation process is amazing to witness.",
      impact: "500+ families helped"
    },
    {
      id: 3,
      name: "Ravi Kumar",
      role: "Designer Partner",
      image: "👨‍🎨",
      text: "Working with ReVastra gives me purpose. Every design I create from donated clothes feels like I'm making a real difference in the world.",
      impact: "200+ designs created"
    },
    {
      id: 4,
      name: "Meera Patel",
      role: "Student",
      image: "👩‍🎓",
      text: "As a Gen-Z who cares about sustainability, ReVastra is exactly what we need. Trendy, eco-friendly, and socially conscious!",
      impact: "Repeat customer"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-800">
            What People Are Saying 💬
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real stories from our community of donors, customers, and partners who are making sustainability fashionable.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0">
                  <Card className="mx-4 shadow-xl border-0 bg-gradient-to-br from-white to-purple-50">
                    <CardContent className="p-8 md:p-12 text-center">
                      <div className="text-6xl mb-6">{testimonial.image}</div>
                      
                      <blockquote className="text-xl md:text-2xl text-gray-700 mb-6 leading-relaxed italic">
                        "{testimonial.text}"
                      </blockquote>
                      
                      <div className="mb-4">
                        <h4 className="font-bold text-lg text-gray-800">{testimonial.name}</h4>
                        <p className="text-brand-purple font-semibold">{testimonial.role}</p>
                      </div>
                      
                      <div className="inline-block bg-brand-mint/20 text-brand-mint px-4 py-2 rounded-full text-sm font-semibold">
                        {testimonial.impact}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <Button
                key={index}
                variant="ghost"
                size="sm"
                className={`w-3 h-3 rounded-full p-0 ${
                  index === currentSlide 
                    ? 'bg-brand-purple' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-center space-x-4 mt-6">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
              className="rounded-full"
            >
              ←
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentSlide((prev) => (prev + 1) % testimonials.length)}
              className="rounded-full"
            >
              →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
