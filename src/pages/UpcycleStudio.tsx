
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Upload, Palette, Users, Clock, Truck } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const UpcycleStudio = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const styleVibes = [
    { id: 'boho', name: 'Boho Chic', icon: '🌙', description: 'Flowy and free-spirited' },
    { id: 'genz', name: 'Gen-Z Vibes', icon: '✨', description: 'Bold and trendy' },
    { id: 'ethnic', name: 'Ethnic Twist', icon: '🌺', description: 'Traditional with a modern touch' },
    { id: 'street', name: 'Streetwear', icon: '🔥', description: 'Urban and edgy' }
  ];

  const tailors = [
    { id: 1, name: 'Priya Sharma', rating: 4.9, speciality: 'Ethnic Fusion', location: 'Delhi', price: '₹299' },
    { id: 2, name: 'Arjun Designs', rating: 4.8, speciality: 'Streetwear', location: 'Mumbai', price: '₹349' },
    { id: 3, name: 'Meera Craft', rating: 5.0, speciality: 'Boho Style', location: 'Jaipur', price: '₹279' }
  ];

  const steps = [
    { step: 1, title: 'Upload Clothes', icon: Upload },
    { step: 2, title: 'Choose Style', icon: Palette },
    { step: 3, title: 'Select Tailor', icon: Users },
    { step: 4, title: 'Track Progress', icon: Clock },
    { step: 5, title: 'Delivery', icon: Truck }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-brand-purple to-brand-pink bg-clip-text text-transparent">
              Upcycle Studio ♻️
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Transform your old clothes into trendy pieces with our expert tailors. From upload to delivery, we make magic happen!
            </p>
          </div>

          {/* Progress Steps */}
          <div className="mb-12">
            <div className="flex justify-between items-center max-w-4xl mx-auto">
              {steps.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.step} className="flex flex-col items-center">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 ${
                      currentStep >= item.step 
                        ? 'bg-brand-purple text-white' 
                        : 'bg-gray-200 text-gray-500'
                    }`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className={`text-sm font-medium ${
                      currentStep >= item.step ? 'text-brand-purple' : 'text-gray-500'
                    }`}>
                      {item.title}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Step Content */}
          {currentStep === 1 && (
            <Card className="max-w-2xl mx-auto shadow-xl">
              <CardHeader>
                <CardTitle className="text-center">Upload Your Old Clothes</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="border-2 border-dashed border-brand-purple/30 rounded-xl p-8 text-center hover:border-brand-purple/60 transition-colors">
                  <Upload className="h-16 w-16 text-brand-purple mx-auto mb-4" />
                  <p className="text-gray-600 mb-4">Drag & drop your clothes photos or click to browse</p>
                  <Button className="bg-brand-purple hover:bg-brand-purple/90">
                    Choose Files
                  </Button>
                </div>
                <div className="text-center">
                  <Button 
                    onClick={() => setCurrentStep(2)}
                    className="bg-brand-gradient hover:opacity-90 px-8"
                  >
                    Next: Choose Style →
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {currentStep === 2 && (
            <div className="max-w-4xl mx-auto">
              <Card className="shadow-xl">
                <CardHeader>
                  <CardTitle className="text-center">Pick Your Vibe</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {styleVibes.map((vibe) => (
                      <div key={vibe.id} className="border-2 border-gray-200 rounded-xl p-6 text-center hover:border-brand-purple hover:shadow-lg transition-all cursor-pointer">
                        <div className="text-4xl mb-4">{vibe.icon}</div>
                        <h3 className="font-bold text-lg mb-2">{vibe.name}</h3>
                        <p className="text-gray-600 text-sm">{vibe.description}</p>
                      </div>
                    ))}
                  </div>
                  <div className="text-center mt-8">
                    <Button 
                      onClick={() => setCurrentStep(3)}
                      className="bg-brand-gradient hover:opacity-90 px-8"
                    >
                      Next: Select Tailor →
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {currentStep === 3 && (
            <div className="max-w-4xl mx-auto">
              <Card className="shadow-xl">
                <CardHeader>
                  <CardTitle className="text-center">Choose Your Tailor</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {tailors.map((tailor) => (
                      <div key={tailor.id} className="border border-gray-200 rounded-xl p-6 hover:border-brand-purple hover:shadow-lg transition-all">
                        <div className="text-center mb-4">
                          <div className="w-16 h-16 bg-brand-gradient rounded-full mx-auto mb-3 flex items-center justify-center text-white font-bold text-xl">
                            {tailor.name.charAt(0)}
                          </div>
                          <h3 className="font-bold text-lg">{tailor.name}</h3>
                          <p className="text-sm text-gray-600">⭐ {tailor.rating} • {tailor.location}</p>
                        </div>
                        <div className="space-y-2 mb-4">
                          <p className="text-sm"><strong>Speciality:</strong> {tailor.speciality}</p>
                          <p className="text-lg font-bold text-brand-purple">{tailor.price}</p>
                        </div>
                        <Button className="w-full bg-brand-purple hover:bg-brand-purple/90">
                          Select {tailor.name}
                        </Button>
                      </div>
                    ))}
                  </div>
                  <div className="text-center mt-8">
                    <Button 
                      onClick={() => setCurrentStep(4)}
                      className="bg-brand-gradient hover:opacity-90 px-8"
                    >
                      Start My Upcycle Journey! 🚀
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {currentStep === 4 && (
            <div className="max-w-2xl mx-auto">
              <Card className="shadow-xl">
                <CardHeader>
                  <CardTitle className="text-center">Track Your Progress</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="mb-8">
                    <div className="w-32 h-32 bg-brand-gradient rounded-full mx-auto flex items-center justify-center text-white text-4xl mb-4">
                      🎨
                    </div>
                    <h3 className="text-xl font-bold mb-2">Your Design is in Progress!</h3>
                    <p className="text-gray-600">Priya Sharma is working on your Boho Chic piece</p>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                      <span>✅ Order Received</span>
                      <span className="text-sm text-gray-500">2 hours ago</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                      <span>✅ Design Started</span>
                      <span className="text-sm text-gray-500">1 hour ago</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                      <span>🔄 In Progress</span>
                      <span className="text-sm text-gray-500">Now</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg opacity-50">
                      <span>⏳ Quality Check</span>
                      <span className="text-sm text-gray-500">Pending</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg opacity-50">
                      <span>📦 Ready for Delivery</span>
                      <span className="text-sm text-gray-500">Pending</span>
                    </div>
                  </div>

                  <Button className="bg-brand-gradient hover:opacity-90">
                    View Live Updates
                  </Button>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default UpcycleStudio;
