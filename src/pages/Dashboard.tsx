
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Award, Heart, Recycle, TrendingUp, Package, Users } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Dashboard = () => {
  const stats = [
    { icon: Heart, label: 'Items Donated', value: '23', color: 'text-brand-pink' },
    { icon: Package, label: 'Orders Placed', value: '7', color: 'text-brand-purple' },
    { icon: Recycle, label: 'Impact Points', value: '1,250', color: 'text-brand-mint' },
    { icon: Award, label: 'Badges Earned', value: '5', color: 'text-brand-yellow' }
  ];

  const recentOrders = [
    { id: 'UC001', item: 'Boho Chic Tote', status: 'In Progress', date: '2 days ago' },
    { id: 'CU002', item: 'Custom Denim Jacket', status: 'Delivered', date: '1 week ago' },
    { id: 'UC003', item: 'Ethnic Patch Top', status: 'Quality Check', date: '3 days ago' }
  ];

  const badges = [
    { name: 'Closet Hero', icon: '🦸', description: 'Donated 20+ items' },
    { name: 'DIY Queen', icon: '👑', description: 'Completed 5 custom designs' },
    { name: 'Eco Warrior', icon: '🌱', description: 'Saved 500L water' },
    { name: 'Style Maven', icon: '✨', description: 'Highly rated designs' },
    { name: 'Community Champion', icon: '🤝', description: 'Helped 10+ families' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-black mb-2">My Closet Dashboard</h1>
            <p className="text-gray-600">Welcome back, Style Hero! Here's your sustainable fashion journey.</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <Card key={stat.label} className="shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6 text-center">
                    <Icon className={`h-8 w-8 ${stat.color} mx-auto mb-3`} />
                    <div className="text-3xl font-bold text-gray-800 mb-1">{stat.value}</div>
                    <div className="text-gray-600 text-sm">{stat.label}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Recent Orders */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Package className="h-5 w-5 text-brand-purple" />
                  Recent Orders
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentOrders.map((order) => (
                    <div key={order.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <h4 className="font-semibold">{order.item}</h4>
                        <p className="text-sm text-gray-600">Order #{order.id} • {order.date}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        order.status === 'Delivered' 
                          ? 'bg-green-100 text-green-700'
                          : order.status === 'In Progress'
                          ? 'bg-blue-100 text-blue-700'
                          : 'bg-yellow-100 text-yellow-700'
                      }`}>
                        {order.status}
                      </span>
                    </div>
                  ))}
                </div>
                <Button className="w-full mt-4" variant="outline">
                  View All Orders
                </Button>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-brand-mint" />
                  Quick Actions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full bg-brand-pink hover:bg-brand-coral text-white">
                  Donate More Clothes 💝
                </Button>
                <Button className="w-full bg-brand-purple hover:bg-brand-purple/90 text-white">
                  Start Custom Design 🎨
                </Button>
                <Button className="w-full bg-brand-mint hover:bg-brand-mint/90 text-white">
                  Browse Shop 🛍️
                </Button>
                <Button className="w-full" variant="outline">
                  Track Current Orders 📦
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Badges Section */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5 text-brand-yellow" />
                Your Badges & Achievements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {badges.map((badge) => (
                  <div key={badge.name} className="text-center p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl">
                    <div className="text-3xl mb-2">{badge.icon}</div>
                    <h4 className="font-bold text-sm mb-1">{badge.name}</h4>
                    <p className="text-xs text-gray-600">{badge.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Impact Summary */}
          <div className="mt-8 text-center bg-brand-gradient rounded-2xl p-8 text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Your Impact This Month</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <div className="text-3xl font-bold">450L</div>
                <div className="opacity-90">Water Saved</div>
              </div>
              <div>
                <div className="text-3xl font-bold">12</div>
                <div className="opacity-90">Families Helped</div>
              </div>
              <div>
                <div className="text-3xl font-bold">8.5kg</div>
                <div className="opacity-90">Waste Prevented</div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;
