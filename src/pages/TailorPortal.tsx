
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Scissors, Upload, Star, Trophy, Users, DollarSign, Calendar, CheckCircle2 } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const TailorPortal = () => {
  const [activeTab, setActiveTab] = useState('register');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    role: '',
    specialization: '',
    experience: '',
    location: '',
    portfolio: '',
    whyJoin: ''
  });

  const roles = [
    { value: 'tailor', label: 'Professional Tailor' },
    { value: 'designer', label: 'Fashion Designer' },
    { value: 'student', label: 'Student Designer' },
    { value: 'hobbyist', label: 'Hobbyist Creator' }
  ];

  const specializations = [
    { value: 'patchwork', label: 'Patchwork & Quilting' },
    { value: 'streetwear', label: 'Streetwear & Urban' },
    { value: 'embroidery', label: 'Embroidery & Handwork' },
    { value: 'formal', label: 'Formal & Traditional' },
    { value: 'boho', label: 'Boho & Vintage' },
    { value: 'accessories', label: 'Bags & Accessories' }
  ];

  const badges = [
    { name: 'Apprentice', icon: '🌱', desc: 'New to the platform', color: 'bg-green-100 text-green-800' },
    { name: 'Skilled Artisan', icon: '✂️', desc: '5+ completed orders', color: 'bg-blue-100 text-blue-800' },
    { name: 'Creator Pro', icon: '🌟', desc: '25+ orders with high ratings', color: 'bg-purple-100 text-purple-800' },
    { name: 'Mentor', icon: '🧠', desc: 'Verified expert & teacher', color: 'bg-yellow-100 text-yellow-800' }
  ];

  const opportunities = [
    {
      id: 1,
      title: "Vintage Saree to Modern Dress",
      client: "Priya S.",
      budget: "₹2,500",
      deadline: "5 days",
      skills: ["Traditional", "Modern Cut"],
      difficulty: "Medium"
    },
    {
      id: 2,
      title: "Denim Jacket Patchwork",
      client: "Rahul K.",
      budget: "₹1,800",
      deadline: "3 days",
      skills: ["Patchwork", "Streetwear"],
      difficulty: "Easy"
    },
    {
      id: 3,
      title: "Boho Maxi from Old Curtains",
      client: "Anjali M.",
      budget: "₹3,200",
      deadline: "7 days",
      skills: ["Boho", "Creative Design"],
      difficulty: "Hard"
    }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const renderRegisterForm = () => (
    <div className="space-y-6">
      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="text-2xl text-rv-text-primary flex items-center gap-2">
            <Scissors className="w-6 h-6" />
            Join as Tailor/Designer
          </CardTitle>
          <CardDescription>
            Start your journey with ReVastra and turn creativity into income
          </CardDescription>
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
              />
            </div>
            <div>
              <Label htmlFor="location">Location</Label>
              <Input
                id="location"
                placeholder="City, State"
                value={formData.location}
                onChange={(e) => handleInputChange('location', e.target.value)}
                className="input"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="role">Your Role *</Label>
              <select 
                className="input"
                value={formData.role}
                onChange={(e) => handleInputChange('role', e.target.value)}
              >
                <option value="">Select your role</option>
                {roles.map(role => (
                  <option key={role.value} value={role.value}>{role.label}</option>
                ))}
              </select>
            </div>
            <div>
              <Label htmlFor="specialization">Specialization *</Label>
              <select 
                className="input"
                value={formData.specialization}
                onChange={(e) => handleInputChange('specialization', e.target.value)}
              >
                <option value="">Select specialization</option>
                {specializations.map(spec => (
                  <option key={spec.value} value={spec.value}>{spec.label}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <Label htmlFor="experience">Years of Experience</Label>
            <select 
              className="input"
              value={formData.experience}
              onChange={(e) => handleInputChange('experience', e.target.value)}
            >
              <option value="">Select experience level</option>
              <option value="beginner">Beginner (0-1 years)</option>
              <option value="intermediate">Intermediate (2-5 years)</option>
              <option value="experienced">Experienced (5-10 years)</option>
              <option value="expert">Expert (10+ years)</option>
            </select>
          </div>

          <div>
            <Label htmlFor="portfolio">Portfolio Upload</Label>
            <Input type="file" multiple accept="image/*" className="input" />
            <p className="text-sm text-rv-text-secondary mt-1">
              Upload your best work (up to 10 images)
            </p>
          </div>

          <div>
            <Label htmlFor="whyJoin">Why do you want to join ReVastra? *</Label>
            <Textarea
              id="whyJoin"
              placeholder="Tell us about your passion for sustainable fashion and what you hope to achieve..."
              value={formData.whyJoin}
              onChange={(e) => handleInputChange('whyJoin', e.target.value)}
              className="input"
              rows={4}
            />
          </div>

          <Button className="btn-primary w-full">
            <CheckCircle2 className="w-5 h-5 mr-2" />
            Submit Application
          </Button>
        </CardContent>
      </Card>

      {/* Badge System Info */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="text-xl text-rv-text-primary">Badge System</CardTitle>
          <CardDescription>Grow your reputation and unlock new opportunities</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {badges.map((badge, index) => (
              <div key={index} className="flex items-center gap-3 p-3 border rounded-xl">
                <div className="text-2xl">{badge.icon}</div>
                <div>
                  <Badge className={badge.color}>{badge.name}</Badge>
                  <p className="text-sm text-rv-text-secondary mt-1">{badge.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderOpportunities = () => (
    <div className="space-y-6">
      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="text-2xl text-rv-text-primary">Available Opportunities</CardTitle>
          <CardDescription>Browse and apply for upcycling projects</CardDescription>
        </CardHeader>
      </Card>

      {opportunities.map((opportunity) => (
        <Card key={opportunity.id} className="glass-card hover:shadow-lg transition-shadow">
          <CardContent className="p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-heading font-bold text-rv-text-primary mb-2">
                  {opportunity.title}
                </h3>
                <p className="text-rv-text-secondary">Client: {opportunity.client}</p>
              </div>
              <Badge className={
                opportunity.difficulty === 'Easy' ? 'bg-green-100 text-green-800' :
                opportunity.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                'bg-red-100 text-red-800'
              }>
                {opportunity.difficulty}
              </Badge>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mb-4">
              <div className="flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-rv-accent" />
                <span className="font-bold text-rv-text-primary">{opportunity.budget}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-rv-secondary" />
                <span className="text-rv-text-secondary">{opportunity.deadline}</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-rv-primary" />
                <span className="text-rv-text-secondary">Skills Match: 85%</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {opportunity.skills.map((skill, index) => (
                <Badge key={index} variant="outline" className="border-rv-secondary text-rv-secondary">
                  {skill}
                </Badge>
              ))}
            </div>

            <div className="flex gap-3">
              <Button className="btn-primary flex-1">
                Apply for Project
              </Button>
              <Button variant="outline">
                View Details
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  const renderDashboard = () => (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid md:grid-cols-4 gap-6">
        <Card className="glass-card text-center">
          <CardContent className="p-6">
            <Trophy className="w-8 h-8 text-rv-accent mx-auto mb-2" />
            <div className="text-2xl font-bold text-rv-text-primary">12</div>
            <div className="text-sm text-rv-text-secondary">Completed Orders</div>
          </CardContent>
        </Card>
        <Card className="glass-card text-center">
          <CardContent className="p-6">
            <Star className="w-8 h-8 text-rv-secondary mx-auto mb-2" />
            <div className="text-2xl font-bold text-rv-text-primary">4.8</div>
            <div className="text-sm text-rv-text-secondary">Average Rating</div>
          </CardContent>
        </Card>
        <Card className="glass-card text-center">
          <CardContent className="p-6">
            <DollarSign className="w-8 h-8 text-green-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-rv-text-primary">₹28,500</div>
            <div className="text-sm text-rv-text-secondary">Total Earnings</div>
          </CardContent>
        </Card>
        <Card className="glass-card text-center">
          <CardContent className="p-6">
            <Users className="w-8 h-8 text-rv-primary mx-auto mb-2" />
            <div className="text-2xl font-bold text-rv-text-primary">45</div>
            <div className="text-sm text-rv-text-secondary">Happy Customers</div>
          </CardContent>
        </Card>
      </div>

      {/* Current Badge & Next Level */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="text-xl text-rv-text-primary">Your Progress</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="text-3xl">✂️</div>
              <div>
                <Badge className="bg-blue-100 text-blue-800 mb-1">Skilled Artisan</Badge>
                <p className="text-sm text-rv-text-secondary">Current Badge</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm text-rv-text-secondary">Next: Creator Pro</div>
              <div className="text-sm text-rv-primary font-bold">13 more orders needed</div>
            </div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-rv-secondary h-2 rounded-full" style={{ width: '48%' }}></div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  return (
    <div className="min-h-screen bg-rv-bg-light">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container-custom">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-heading font-black text-rv-text-primary mb-4">
              Tailor & Designer <span className="gradient-text">Portal</span>
            </h1>
            <p className="text-lg text-rv-text-secondary max-w-2xl mx-auto">
              Join our community of creative professionals and turn your skills into sustainable income
            </p>
          </div>

          {/* Tabs */}
          <div className="flex justify-center mb-8">
            <div className="glass-card p-2 inline-flex rounded-2xl">
              {[
                { id: 'register', label: 'Register', icon: Scissors },
                { id: 'opportunities', label: 'Opportunities', icon: Trophy },
                { id: 'dashboard', label: 'Dashboard', icon: Users }
              ].map(tab => (
                <Button
                  key={tab.id}
                  variant={activeTab === tab.id ? "default" : "ghost"}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 ${
                    activeTab === tab.id ? 'bg-rv-secondary text-white' : ''
                  }`}
                >
                  <tab.icon className="w-4 h-4" />
                  {tab.label}
                </Button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="max-w-4xl mx-auto">
            {activeTab === 'register' && renderRegisterForm()}
            {activeTab === 'opportunities' && renderOpportunities()}
            {activeTab === 'dashboard' && renderDashboard()}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TailorPortal;
