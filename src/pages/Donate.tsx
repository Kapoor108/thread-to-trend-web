
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Upload, MapPin, Heart, Truck, CheckCircle2 } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Donate = () => {
  const [donationStep, setDonationStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    clothingType: '',
    condition: '',
    quantity: '',
    message: '',
    ngoPreference: '',
    washed: false
  });

  const clothingTypes = [
    { value: 'shirts', label: 'Shirts & Tops' },
    { value: 'jeans', label: 'Jeans & Pants' },
    { value: 'dresses', label: 'Dresses & Skirts' },
    { value: 'sarees', label: 'Sarees & Traditional Wear' },
    { value: 'jackets', label: 'Jackets & Outerwear' },
    { value: 'others', label: 'Others' }
  ];

  const conditions = [
    { value: 'new', label: 'New with tags' },
    { value: 'excellent', label: 'Excellent condition' },
    { value: 'good', label: 'Good condition' },
    { value: 'fair', label: 'Fair condition (minor wear)' },
    { value: 'repair', label: 'Needs minor repair' }
  ];

  const ngoPartners = [
    { value: 'careforall', label: 'CareForAll Foundation' },
    { value: 'earthgivers', label: 'EarthGivers NGO' },
    { value: 'hopefoundation', label: 'Hope Foundation' },
    { value: 'any', label: 'Any suitable NGO' }
  ];

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setDonationStep(4); // Success step
  };

  const renderStep1 = () => (
    <Card className="glass-card">
      <CardHeader>
        <CardTitle className="text-2xl text-rv-text-primary">Personal Information</CardTitle>
        <CardDescription>Let us know who you are so we can coordinate the pickup</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="fullName">Full Name *</Label>
            <Input
              id="fullName"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={(e) => handleInputChange('fullName', e.target.value)}
              className="input"
              required
            />
          </div>
          <div>
            <Label htmlFor="email">Email Address *</Label>
            <Input
              id="email"
              type="email"
              placeholder="your.email@example.com"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className="input"
              required
            />
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="phone">Phone Number *</Label>
            <Input
              id="phone"
              placeholder="+91 98765 43210"
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              className="input"
              required
            />
          </div>
          <div>
            <Label htmlFor="quantity">Approximate Quantity</Label>
            <select 
              className="input"
              value={formData.quantity}
              onChange={(e) => handleInputChange('quantity', e.target.value)}
            >
              <option value="">Select quantity</option>
              <option value="1-5">1-5 pieces</option>
              <option value="6-10">6-10 pieces</option>
              <option value="11-20">11-20 pieces</option>
              <option value="20+">20+ pieces</option>
            </select>
          </div>
        </div>

        <div>
          <Label htmlFor="address">Pickup Address *</Label>
          <Textarea
            id="address"
            placeholder="Enter your complete address for pickup"
            value={formData.address}
            onChange={(e) => handleInputChange('address', e.target.value)}
            className="input"
            required
          />
        </div>

        <Button 
          onClick={() => setDonationStep(2)}
          className="btn-primary w-full"
          disabled={!formData.fullName || !formData.email || !formData.phone || !formData.address}
        >
          Next: Clothing Details
        </Button>
      </CardContent>
    </Card>
  );

  const renderStep2 = () => (
    <Card className="glass-card">
      <CardHeader>
        <CardTitle className="text-2xl text-rv-text-primary">Clothing Details</CardTitle>
        <CardDescription>Tell us about the clothes you're donating</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="clothingType">Type of Clothing *</Label>
            <select 
              className="input"
              value={formData.clothingType}
              onChange={(e) => handleInputChange('clothingType', e.target.value)}
              required
            >
              <option value="">Select clothing type</option>
              {clothingTypes.map(type => (
                <option key={type.value} value={type.value}>{type.label}</option>
              ))}
            </select>
          </div>
          <div>
            <Label htmlFor="condition">Condition *</Label>
            <select 
              className="input"
              value={formData.condition}
              onChange={(e) => handleInputChange('condition', e.target.value)}
              required
            >
              <option value="">Select condition</option>
              {conditions.map(condition => (
                <option key={condition.value} value={condition.value}>{condition.label}</option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <Label htmlFor="photos">Upload Photos (Optional)</Label>
          <Input type="file" multiple accept="image/*" className="input" />
          <p className="text-sm text-rv-text-secondary mt-1">
            Upload photos to help us better understand your donation
          </p>
        </div>

        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="washed"
            checked={formData.washed}
            onChange={(e) => handleInputChange('washed', e.target.checked)}
            className="rounded"
          />
          <Label htmlFor="washed">Clothes are washed and ready to donate</Label>
        </div>

        <div className="flex gap-4">
          <Button 
            variant="outline" 
            onClick={() => setDonationStep(1)}
            className="flex-1"
          >
            Back
          </Button>
          <Button 
            onClick={() => setDonationStep(3)}
            className="btn-primary flex-1"
            disabled={!formData.clothingType || !formData.condition}
          >
            Next: Preferences
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  const renderStep3 = () => (
    <Card className="glass-card">
      <CardHeader>
        <CardTitle className="text-2xl text-rv-text-primary">Donation Preferences</CardTitle>
        <CardDescription>Help us direct your donation to the right place</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Label htmlFor="ngoPreference">Preferred NGO Partner</Label>
          <select 
            className="input"
            value={formData.ngoPreference}
            onChange={(e) => handleInputChange('ngoPreference', e.target.value)}
          >
            <option value="">Select NGO preference</option>
            {ngoPartners.map(ngo => (
              <option key={ngo.value} value={ngo.value}>{ngo.label}</option>
            ))}
          </select>
        </div>

        <div>
          <Label htmlFor="message">Message to Recipient (Optional)</Label>
          <Textarea
            id="message"
            placeholder="Write a heartfelt message for the person who will receive your clothes..."
            value={formData.message}
            onChange={(e) => handleInputChange('message', e.target.value)}
            className="input"
            rows={4}
          />
        </div>

        <div className="bg-rv-secondary/10 p-4 rounded-xl">
          <h4 className="font-heading font-bold text-rv-text-primary mb-2">Impact Preview</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-rv-secondary">1</div>
              <div className="text-sm text-rv-text-secondary">Family Helped</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-rv-accent">2.5kg</div>
              <div className="text-sm text-rv-text-secondary">Waste Reduced</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-rv-primary">500L</div>
              <div className="text-sm text-rv-text-secondary">Water Saved</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-600">15kg</div>
              <div className="text-sm text-rv-text-secondary">CO₂ Reduced</div>
            </div>
          </div>
        </div>

        <div className="flex gap-4">
          <Button 
            variant="outline" 
            onClick={() => setDonationStep(2)}
            className="flex-1"
          >
            Back
          </Button>
          <Button 
            onClick={handleSubmit}
            className="btn-primary flex-1"
          >
            <Heart className="w-5 h-5 mr-2" />
            Confirm Donation
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  const renderSuccess = () => (
    <Card className="glass-card text-center">
      <CardContent className="p-8">
        <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h2 className="text-2xl font-heading font-bold text-rv-text-primary mb-4">
          Thank You for Your Donation! 🎉
        </h2>
        <p className="text-rv-text-secondary mb-6">
          Your donation request has been received. We'll contact you within 24 hours to schedule the pickup.
        </p>
        
        <div className="bg-rv-bg-light p-4 rounded-xl mb-6">
          <h3 className="font-bold text-rv-text-primary mb-2">Donation ID: #RV{Math.random().toString(36).substr(2, 9).toUpperCase()}</h3>
          <p className="text-sm text-rv-text-secondary">
            Save this ID to track your donation impact
          </p>
        </div>

        <div className="space-y-3">
          <Button className="btn-primary w-full">
            <Truck className="w-5 h-5 mr-2" />
            Track Pickup Status
          </Button>
          <Button variant="outline" className="w-full">
            Download Impact Certificate
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-rv-bg-light">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container-custom max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-heading font-black text-rv-text-primary mb-4">
              Donate <span className="gradient-text">Clothes</span>
            </h1>
            <p className="text-lg text-rv-text-secondary max-w-2xl mx-auto">
              Transform lives by donating clothes you no longer wear. Every donation creates a ripple of positive impact.
            </p>
          </div>

          {/* Progress Indicator */}
          <div className="flex justify-center mb-8">
            <div className="flex items-center space-x-4">
              {[1, 2, 3, 4].map((step) => (
                <React.Fragment key={step}>
                  <div className={`flex items-center justify-center w-10 h-10 rounded-full ${
                    donationStep >= step ? 'bg-rv-secondary text-white' : 'bg-gray-200 text-gray-500'
                  }`}>
                    {donationStep > step ? <CheckCircle2 className="w-6 h-6" /> : step}
                  </div>
                  {step < 4 && (
                    <div className={`w-12 h-1 ${
                      donationStep > step ? 'bg-rv-secondary' : 'bg-gray-200'
                    }`} />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Form Steps */}
          {donationStep === 1 && renderStep1()}
          {donationStep === 2 && renderStep2()}
          {donationStep === 3 && renderStep3()}
          {donationStep === 4 && renderSuccess()}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Donate;
