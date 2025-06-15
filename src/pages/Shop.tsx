
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Filter, Search, Heart, ShoppingCart, Star } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Shop = () => {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const products = [
    {
      id: 1,
      name: "Vintage Saree Tote",
      price: "₹899",
      originalStory: "Ex-Wedding Saree",
      designer: "Rural Artisan",
      rating: 4.8,
      impactScore: 9.2,
      image: "🛍️"
    },
    {
      id: 2,
      name: "Denim Patchwork Jacket",
      price: "₹1,299",
      originalStory: "Old Jeans Collection",
      designer: "Urban Creator",
      rating: 4.9,
      impactScore: 8.7,
      image: "🧥"
    },
    {
      id: 3,
      name: "Military Cargo Bag",
      price: "₹1,099",
      originalStory: "Ex-Military Uniform",
      designer: "Street Designer",
      rating: 4.7,
      impactScore: 9.5,
      image: "🎒"
    }
  ];

  const filterCategories = [
    {
      name: "Type",
      options: ["Jacket", "Bag", "Top", "Rug", "Accessories"]
    },
    {
      name: "Origin Story",
      options: ["Ex-military", "Old Saree", "Denim", "Cotton Shirts", "Wedding Clothes"]
    },
    {
      name: "Designer Tag",
      options: ["Rural Artisan", "Urban Creator", "Student Designer", "Award Winner"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-brand-purple to-brand-pink bg-clip-text text-transparent">
              Shop Upcycled Fashion 🛍️
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Every piece has a story. Every purchase makes a difference.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <div className="lg:w-1/4">
              <Card className="sticky top-24">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-6">
                    <Filter className="h-5 w-5" />
                    <h3 className="font-bold text-lg">Filters</h3>
                  </div>

                  {filterCategories.map((category) => (
                    <div key={category.name} className="mb-6">
                      <h4 className="font-semibold mb-3">{category.name}</h4>
                      <div className="space-y-2">
                        {category.options.map((option) => (
                          <label key={option} className="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              className="w-4 h-4 text-brand-purple"
                              onChange={(e) => {
                                if (e.target.checked) {
                                  setSelectedFilters([...selectedFilters, option]);
                                } else {
                                  setSelectedFilters(selectedFilters.filter(f => f !== option));
                                }
                              }}
                            />
                            <span className="text-sm">{option}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Products Grid */}
            <div className="lg:w-3/4">
              {/* Search Bar */}
              <div className="mb-8">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search for upcycled fashion..."
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-purple focus:border-transparent"
                  />
                </div>
              </div>

              {/* Products */}
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {products.map((product) => (
                  <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                    <CardContent className="p-0">
                      {/* Product Image */}
                      <div className="aspect-square bg-gradient-to-br from-brand-pink/20 to-brand-purple/20 flex items-center justify-center text-6xl">
                        {product.image}
                      </div>

                      <div className="p-6">
                        {/* Impact Badge */}
                        <div className="flex justify-between items-center mb-3">
                          <span className="bg-brand-mint/20 text-brand-mint px-2 py-1 rounded-full text-xs font-semibold">
                            Impact Score: {product.impactScore}
                          </span>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <Heart className="h-4 w-4" />
                          </Button>
                        </div>

                        {/* Product Info */}
                        <h3 className="font-bold text-lg mb-2">{product.name}</h3>
                        <p className="text-sm text-gray-600 mb-1">Origin: {product.originalStory}</p>
                        <p className="text-sm text-brand-purple mb-3">By {product.designer}</p>

                        {/* Rating */}
                        <div className="flex items-center gap-1 mb-4">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm font-semibold">{product.rating}</span>
                        </div>

                        {/* Price and Actions */}
                        <div className="flex items-center justify-between">
                          <span className="text-2xl font-bold text-brand-purple">{product.price}</span>
                          <div className="flex gap-2">
                            <Button size="sm" variant="outline">
                              Quick View
                            </Button>
                            <Button size="sm" className="bg-brand-purple hover:bg-brand-purple/90">
                              <ShoppingCart className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Load More */}
              <div className="text-center mt-12">
                <Button size="lg" variant="outline" className="border-2 border-brand-purple text-brand-purple hover:bg-brand-purple hover:text-white">
                  Load More Products
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Shop;
