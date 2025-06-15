
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import TransformationShowcase from '@/components/TransformationShowcase';
import TestimonialSlider from '@/components/TestimonialSlider';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <TransformationShowcase />
        <TestimonialSlider />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
