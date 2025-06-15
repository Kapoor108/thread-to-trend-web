
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Heart, MessageCircle, Share, Upload, Search, Filter } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const StyleFeed = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const posts = [
    {
      id: 1,
      name: "Anya Sharma",
      username: "@anya_styles",
      profilePic: "/placeholder.svg",
      beforeImage: "/placeholder.svg",
      afterImage: "/placeholder.svg",
      caption: "Turned Dad's kurta into a co-ord set 😎🔥 #UpcycleChallenge #SustainableFashion",
      likes: 231,
      comments: 12,
      shares: 8,
      timeAgo: "2h ago",
      category: "streetwear"
    },
    {
      id: 2,
      name: "Dev Tailor",
      username: "@dev_creates",
      profilePic: "/placeholder.svg",
      beforeImage: "/placeholder.svg",
      afterImage: "/placeholder.svg",
      caption: "Old saree ➤ trending boho skirt! 💃 Client was amazed! #BohoVibes #ReVastraCreation",
      likes: 310,
      comments: 40,
      shares: 15,
      timeAgo: "5h ago",
      category: "boho"
    },
    {
      id: 3,
      name: "Priya Designer",
      username: "@priya_designs",
      profilePic: "/placeholder.svg",
      beforeImage: "/placeholder.svg",
      afterImage: "/placeholder.svg",
      caption: "Vintage denim jacket transformation! Added patches and embroidery 🧵✨",
      likes: 189,
      comments: 23,
      shares: 6,
      timeAgo: "1d ago",
      category: "vintage"
    }
  ];

  const filters = [
    { id: 'all', label: 'All Posts' },
    { id: 'streetwear', label: 'Streetwear' },
    { id: 'boho', label: 'Boho' },
    { id: 'vintage', label: 'Vintage' },
    { id: 'formal', label: 'Formal' }
  ];

  const filteredPosts = selectedFilter === 'all' ? posts : posts.filter(post => post.category === selectedFilter);

  return (
    <div className="min-h-screen bg-rv-bg-light">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container-custom">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-heading font-black text-rv-text-primary mb-4">
              Style<span className="gradient-text">Feed</span>
            </h1>
            <p className="text-lg text-rv-text-secondary max-w-2xl mx-auto mb-8">
              Get inspired by amazing transformations from our community of creators and customers
            </p>
            
            <Button className="btn-primary mb-8">
              <Upload className="w-5 h-5 mr-2" />
              Share Your Creation
            </Button>
          </div>

          {/* Search and Filters */}
          <div className="glass-card p-6 mb-8 rounded-2xl">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-rv-text-secondary w-5 h-5" />
                <Input 
                  placeholder="Search transformations..." 
                  className="pl-10 input"
                />
              </div>
              
              <div className="flex items-center gap-2">
                <Filter className="w-5 h-5 text-rv-text-secondary" />
                <div className="flex flex-wrap gap-2">
                  {filters.map((filter) => (
                    <Button
                      key={filter.id}
                      variant={selectedFilter === filter.id ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedFilter(filter.id)}
                      className={selectedFilter === filter.id ? "bg-rv-secondary text-white" : ""}
                    >
                      {filter.label}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Feed Posts */}
          <div className="grid gap-8">
            {filteredPosts.map((post) => (
              <Card key={post.id} className="glass-card border-0 overflow-hidden">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img 
                        src={post.profilePic} 
                        alt={post.name}
                        className="w-12 h-12 rounded-full object-cover border-2 border-rv-secondary"
                      />
                      <div>
                        <h3 className="font-heading font-bold text-rv-text-primary">{post.name}</h3>
                        <p className="text-sm text-rv-text-secondary">{post.username} • {post.timeAgo}</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      Follow
                    </Button>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Before and After Images */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="relative">
                      <img 
                        src={post.beforeImage} 
                        alt="Before transformation"
                        className="w-full h-64 object-cover rounded-xl"
                      />
                      <div className="absolute top-3 left-3 bg-rv-text-primary text-white px-3 py-1 rounded-lg text-sm font-bold">
                        BEFORE
                      </div>
                    </div>
                    <div className="relative">
                      <img 
                        src={post.afterImage} 
                        alt="After transformation"
                        className="w-full h-64 object-cover rounded-xl"
                      />
                      <div className="absolute top-3 left-3 bg-rv-accent text-rv-text-primary px-3 py-1 rounded-lg text-sm font-bold">
                        AFTER
                      </div>
                    </div>
                  </div>

                  {/* Caption */}
                  <p className="text-rv-text-primary leading-relaxed">{post.caption}</p>

                  {/* Engagement Actions */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div className="flex items-center gap-6">
                      <Button variant="ghost" size="sm" className="text-rv-text-secondary hover:text-red-500">
                        <Heart className="w-5 h-5 mr-1" />
                        {post.likes}
                      </Button>
                      <Button variant="ghost" size="sm" className="text-rv-text-secondary hover:text-rv-secondary">
                        <MessageCircle className="w-5 h-5 mr-1" />
                        {post.comments}
                      </Button>
                      <Button variant="ghost" size="sm" className="text-rv-text-secondary hover:text-rv-primary">
                        <Share className="w-5 h-5 mr-1" />
                        {post.shares}
                      </Button>
                    </div>
                    
                    <Button size="sm" className="bg-rv-accent text-rv-text-primary hover:bg-rv-accent/80">
                      Get Similar Style
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Upload Modal Trigger */}
          <div className="text-center mt-12">
            <Card className="glass-card p-8 max-w-md mx-auto">
              <CardHeader>
                <CardTitle className="text-rv-text-primary">Share Your Transformation</CardTitle>
                <CardDescription>
                  Upload your before/after photos and inspire others!
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input type="file" accept="image/*" className="input" />
                <Textarea placeholder="Tell your transformation story..." className="input" />
                <Button className="w-full btn-primary">
                  <Upload className="w-5 h-5 mr-2" />
                  Share with Community
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default StyleFeed;
