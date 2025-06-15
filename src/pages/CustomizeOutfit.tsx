
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Upload, Sparkles, Palette, Users } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const CustomizeOutfit = () => {
  const [uploadedImages, setUploadedImages] = useState<string[]>([]);
  const [selectedDesign, setSelectedDesign] = useState<string>('');

  const designIdeas = [
    { id: 'tote', name: 'Trendy Tote Bag', price: '₹150', time: '5-7 days' },
    { id: 'jacket', name: 'Upcycled Jacket', price: '₹250', time: '7-10 days' },
    { id: 'patchwork', name: 'Patchwork Top', price: '₹180', time: '4-6 days' }
  ];

  const designerTypes = [
    { type: 'student', name: 'Student Designer', fee: '₹50', description: 'Fresh creative minds' },
    { type: 'professional', name: 'Professional Designer', fee: '₹150', description: 'Experienced crafters' },
    { type: 'award', name: 'Award-winning Designer', fee: '₹250', description: 'Premium artisans' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-brand-purple to-brand-pink bg-clip-text text-transparent">
              Customize My Outfit ✨
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              "Your old clothes. Your style. Our touch." Transform your forgotten pieces into trendy fashion statements!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Upload Section */}
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Upload className="h-6 w-6 text-brand-purple" />
                  Upload Your Clothes
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="border-2 border-dashed border-brand-purple/30 rounded-xl p-8 text-center hover:border-brand-purple/60 transition-colors">
                  <Upload className="h-12 w-12 text-brand-purple mx-auto mb-4" />
                  <p className="text-gray-600 mb-4">Upload up to 3 pictures of your clothes</p>
                  <Button className="bg-brand-purple hover:bg-brand-purple/90">
                    Choose Files
                  </Button>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Describe Your Vision
                  </label>
                  <textarea
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-purple focus:border-transparent"
                    rows={4}
                    placeholder="e.g., 'Want this to become a tote bag with GenZ emojis'"
                  />
                </div>
              </CardContent>
            </Card>

            {/* AI Suggestions */}
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="h-6 w-6 text-brand-mint" />
                  AI Design Suggestions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {designIdeas.map((idea) => (
                  <div
                    key={idea.id}
                    className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                      selectedDesign === idea.id
                        ? 'border-brand-purple bg-brand-purple/10'
                        : 'border-gray-200 hover:border-brand-purple/50'
                    }`}
                    onClick={() => setSelectedDesign(idea.id)}
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-semibold text-gray-800">{idea.name}</h3>
                        <p className="text-sm text-gray-600">{idea.time}</p>
                      </div>
                      <div className="text-brand-purple font-bold">{idea.price}</div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Designer Selection */}
          <div className="mt-12 max-w-6xl mx-auto">
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-6 w-6 text-brand-coral" />
                  Choose Your Designer
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {designerTypes.map((designer) => (
                    <div key={designer.type} className="border border-gray-200 rounded-xl p-6 hover:border-brand-purple transition-colors">
                      <h3 className="font-bold text-lg mb-2">{designer.name}</h3>
                      <p className="text-gray-600 mb-4">{designer.description}</p>
                      <div className="text-2xl font-bold text-brand-purple mb-4">{designer.fee}</div>
                      <Button className="w-full bg-brand-gradient hover:opacity-90">
                        Select Designer
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Add-ons Section */}
          <div className="mt-12 max-w-6xl mx-auto">
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Palette className="h-6 w-6 text-brand-yellow" />
                  Add-ons & Extras
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg">Fabric Add-ons</h3>
                    <div className="space-y-2">
                      <label className="flex items-center space-x-3">
                        <input type="checkbox" className="w-4 h-4 text-brand-purple" />
                        <span>Extra Cotton Patches (+₹30)</span>
                      </label>
                      <label className="flex items-center space-x-3">
                        <input type="checkbox" className="w-4 h-4 text-brand-purple" />
                        <span>Denim Accents (+₹50)</span>
                      </label>
                      <label className="flex items-center space-x-3">
                        <input type="checkbox" className="w-4 h-4 text-brand-purple" />
                        <span>Silk Lining (+₹80)</span>
                      </label>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg">Design Features</h3>
                    <div className="space-y-2">
                      <label className="flex items-center space-x-3">
                        <input type="checkbox" className="w-4 h-4 text-brand-purple" />
                        <span>Embroidery Work (+₹70)</span>
                      </label>
                      <label className="flex items-center space-x-3">
                        <input type="checkbox" className="w-4 h-4 text-brand-purple" />
                        <span>Patch Art (+₹40)</span>
                      </label>
                      <label className="flex items-center space-x-3">
                        <input type="checkbox" className="w-4 h-4 text-brand-purple" />
                        <span>Street Prints (+₹60)</span>
                      </label>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Final CTA */}
          <div className="mt-12 text-center">
            <Button size="lg" className="bg-brand-gradient hover:opacity-90 text-white font-bold py-4 px-12 rounded-full text-lg shadow-lg">
              Start My Custom Design Journey 🎨
            </Button>
            <p className="text-gray-600 mt-4">Get your digital sketch in 24-48 hours!</p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CustomizeOutfit;
