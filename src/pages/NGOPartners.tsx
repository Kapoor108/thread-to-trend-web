
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Heart, Users, Globe, Download, CheckCircle2, Building, HandHeart, Leaf } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const NGOPartners = () => {
  const [activeTab, setActiveTab] = useState('partners');
  const [formData, setFormData] = useState({
    ngoName: '',
    website: '',
    email: '',
    phone: '',
    orgType: '',
    description: '',
    mission: '',
    address: '',
    contactPerson: '',
    yearEstablished: ''
  });

  const orgTypes = [
    { value: 'education', label: 'Education & Skill Development' },
    { value: 'orphanage', label: 'Orphanage & Child Care' },
    { value: 'women', label: 'Women Empowerment' },
    { value: 'environment', label: 'Environment & Sustainability' },
    { value: 'disaster', label: 'Disaster Relief' },
    { value: 'elderly', label: 'Elderly Care' },
    { value: 'health', label: 'Healthcare & Medical' },
    { value: 'rural', label: 'Rural Development' }
  ];

  const partnerNGOs = [
    {
      name: "CareForAll Foundation",
      type: "Education & Child Care",
      location: "Mumbai, Maharashtra",
      established: "2015",
      beneficiaries: "2,500+",
      description: "Providing education and basic necessities to underprivileged children across urban slums.",
      impact: { clothes: 1250, families: 450, students: 320 },
      verified: true,
      logo: "/placeholder.svg"
    },
    {
      name: "EarthGivers NGO",
      type: "Environment & Women Empowerment",
      location: "Bangalore, Karnataka",
      established: "2012",
      beneficiaries: "1,800+",
      description: "Empowering rural women through sustainable livelihood programs and environmental conservation.",
      impact: { clothes: 890, families: 290, training: 150 },
      verified: true,
      logo: "/placeholder.svg"
    },
    {
      name: "Hope Foundation",
      type: "Disaster Relief & Rural Development",
      location: "Delhi, NCR",
      established: "2018",
      beneficiaries: "3,200+",
      description: "Providing immediate relief during disasters and long-term rural development programs.",
      impact: { clothes: 1650, families: 520, villages: 25 },
      verified: true,
      logo: "/placeholder.svg"
    }
  ];

  const impactStats = {
    totalNGOs: 28,
    clothesDistributed: 15680,
    familiesHelped: 4250,
    citiesCovered: 12
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const renderPartners = () => (
    <div className="space-y-8">
      {/* Impact Stats */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="text-2xl text-rv-text-primary text-center">Our Impact Together</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-rv-primary">{impactStats.totalNGOs}</div>
              <div className="text-rv-text-secondary">Partner NGOs</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-rv-secondary">{impactStats.clothesDistributed.toLocaleString()}</div>
              <div className="text-rv-text-secondary">Clothes Distributed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-rv-accent">{impactStats.familiesHelped.toLocaleString()}</div>
              <div className="text-rv-text-secondary">Families Helped</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600">{impactStats.citiesCovered}</div>
              <div className="text-rv-text-secondary">Cities Covered</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Partner NGOs */}
      <div className="grid gap-6">
        {partnerNGOs.map((ngo, index) => (
          <Card key={index} className="glass-card hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <img 
                    src={ngo.logo} 
                    alt={ngo.name}
                    className="w-24 h-24 rounded-2xl object-cover border-2 border-rv-secondary"
                  />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-heading font-bold text-rv-text-primary flex items-center gap-2">
                        {ngo.name}
                        {ngo.verified && <CheckCircle2 className="w-5 h-5 text-green-500" />}
                      </h3>
                      <p className="text-rv-text-secondary">{ngo.location} • Est. {ngo.established}</p>
                    </div>
                    <Badge className="bg-rv-secondary/20 text-rv-secondary border-rv-secondary">
                      {ngo.type}
                    </Badge>
                  </div>
                  
                  <p className="text-rv-text-secondary mb-4">{ngo.description}</p>
                  
                  <div className="grid md:grid-cols-3 gap-4 mb-4">
                    <div className="text-center p-3 bg-rv-bg-light rounded-xl">
                      <div className="text-lg font-bold text-rv-primary">{ngo.impact.clothes}</div>
                      <div className="text-sm text-rv-text-secondary">Clothes Received</div>
                    </div>
                    <div className="text-center p-3 bg-rv-bg-light rounded-xl">
                      <div className="text-lg font-bold text-rv-secondary">{ngo.impact.families}</div>
                      <div className="text-sm text-rv-text-secondary">Families Served</div>
                    </div>
                    <div className="text-center p-3 bg-rv-bg-light rounded-xl">
                      <div className="text-lg font-bold text-rv-accent">{ngo.beneficiaries}</div>
                      <div className="text-sm text-rv-text-secondary">Total Beneficiaries</div>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <Button className="btn-primary">
                      <Heart className="w-4 h-4 mr-2" />
                      Donate to {ngo.name.split(' ')[0]}
                    </Button>
                    <Button variant="outline">
                      View Impact Report
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderApplicationForm = () => (
    <div className="max-w-3xl mx-auto">
      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="text-2xl text-rv-text-primary flex items-center gap-2">
            <Building className="w-6 h-6" />
            Become a ReVastra NGO Partner
          </CardTitle>
          <CardDescription>
            Join our network of verified NGO partners and help us create greater social impact
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="ngoName">NGO Name *</Label>
              <Input
                id="ngoName"
                placeholder="Enter NGO name"
                value={formData.ngoName}
                onChange={(e) => handleInputChange('ngoName', e.target.value)}
                className="input"
              />
            </div>
            <div>
              <Label htmlFor="website">Website/Social Media *</Label>
              <Input
                id="website"
                placeholder="https://your-ngo.org or social media links"
                value={formData.website}
                onChange={(e) => handleInputChange('website', e.target.value)}
                className="input"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="email">Official Email *</Label>
              <Input
                id="email"
                type="email"
                placeholder="contact@your-ngo.org"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="input"
              />
            </div>
            <div>
              <Label htmlFor="phone">Contact Number *</Label>
              <Input
                id="phone"
                placeholder="+91 98765 43210"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                className="input"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="contactPerson">Contact Person *</Label>
              <Input
                id="contactPerson"
                placeholder="Primary contact person name"
                value={formData.contactPerson}
                onChange={(e) => handleInputChange('contactPerson', e.target.value)}
                className="input"
              />
            </div>
            <div>
              <Label htmlFor="yearEstablished">Year Established</Label>
              <Input
                id="yearEstablished"
                placeholder="e.g., 2015"
                value={formData.yearEstablished}
                onChange={(e) => handleInputChange('yearEstablished', e.target.value)}
                className="input"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="orgType">Organization Type *</Label>
            <select 
              className="input"
              value={formData.orgType}
              onChange={(e) => handleInputChange('orgType', e.target.value)}
            >
              <option value="">Select organization type</option>
              {orgTypes.map(type => (
                <option key={type.value} value={type.value}>{type.label}</option>
              ))}
            </select>
          </div>

          <div>
            <Label htmlFor="address">Address & Operating Location *</Label>
            <Textarea
              id="address"
              placeholder="Complete address and areas where you operate"
              value={formData.address}
              onChange={(e) => handleInputChange('address', e.target.value)}
              className="input"
              rows={3}
            />
          </div>

          <div>
            <Label htmlFor="mission">Mission & Vision *</Label>
            <Textarea
              id="mission"
              placeholder="Brief description of your NGO's mission and vision"
              value={formData.mission}
              onChange={(e) => handleInputChange('mission', e.target.value)}
              className="input"
              rows={3}
            />
          </div>

          <div>
            <Label htmlFor="description">About Your Work *</Label>
            <Textarea
              id="description"
              placeholder="Describe your current programs, beneficiaries, and how clothing donations would help your cause"
              value={formData.description}
              onChange={(e) => handleInputChange('description', e.target.value)}
              className="input"
              rows={4}
            />
          </div>

          <div>
            <Label htmlFor="documents">Required Documents</Label>
            <Input type="file" multiple accept=".pdf,.jpg,.png" className="input" />
            <p className="text-sm text-rv-text-secondary mt-1">
              Upload registration certificate, 80G certificate (if applicable), and recent impact reports
            </p>
          </div>

          <div className="bg-rv-secondary/10 p-4 rounded-xl">
            <h4 className="font-heading font-bold text-rv-text-primary mb-2">Partnership Benefits</h4>
            <ul className="space-y-2 text-sm text-rv-text-secondary">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                Regular clothing donations based on your needs
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                Impact tracking and reporting tools
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                Co-branding opportunities for campaigns
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                Access to our network of donors and volunteers
              </li>
            </ul>
          </div>

          <Button className="btn-primary w-full">
            <HandHeart className="w-5 h-5 mr-2" />
            Submit Partnership Application
          </Button>
        </CardContent>
      </Card>
    </div>
  );

  const renderImpactReports = () => (
    <div className="space-y-6">
      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="text-2xl text-rv-text-primary">Monthly Impact Reports</CardTitle>
          <CardDescription>Download detailed reports of our collective impact</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { month: "November 2024", clothes: 1250, families: 340, ngos: 5 },
              { month: "October 2024", clothes: 1180, families: 315, ngos: 4 },
              { month: "September 2024", clothes: 1320, families: 380, ngos: 6 }
            ].map((report, index) => (
              <Card key={index} className="border hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <h3 className="font-bold text-rv-text-primary mb-4">{report.month}</h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between">
                      <span className="text-rv-text-secondary">Clothes Distributed:</span>
                      <span className="font-bold">{report.clothes}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-rv-text-secondary">Families Helped:</span>
                      <span className="font-bold">{report.families}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-rv-text-secondary">Partner NGOs:</span>
                      <span className="font-bold">{report.ngos}</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full">
                    <Download className="w-4 h-4 mr-2" />
                    Download Report
                  </Button>
                </CardContent>
              </Card>
            ))}
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
              NGO <span className="gradient-text">Partners</span>
            </h1>
            <p className="text-lg text-rv-text-secondary max-w-2xl mx-auto">
              Collaborating with verified NGOs to maximize social impact and reach those who need it most
            </p>
          </div>

          {/* Tabs */}
          <div className="flex justify-center mb-8">
            <div className="glass-card p-2 inline-flex rounded-2xl">
              {[
                { id: 'partners', label: 'Our Partners', icon: Heart },
                { id: 'apply', label: 'Apply to Partner', icon: Building },
                { id: 'reports', label: 'Impact Reports', icon: Globe }
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
          {activeTab === 'partners' && renderPartners()}
          {activeTab === 'apply' && renderApplicationForm()}
          {activeTab === 'reports' && renderImpactReports()}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NGOPartners;
