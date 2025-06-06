
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, TrendingDown, Wallet, Home, DollarSign, BarChart3, Eye, Plus } from 'lucide-react';
import Navigation from '@/components/Navigation';

const Dashboard = () => {
  const portfolioData = {
    totalInvestment: 750000,
    currentValue: 892500,
    totalReturn: 142500,
    returnPercentage: 19.0,
    totalProperties: 5,
    monthlyIncome: 12500
  };

  const investments = [
    {
      id: 1,
      property: "Amaravathi Commercial Complex",
      tokens: 300,
      invested: 75000,
      currentValue: 89250,
      return: 19.0,
      monthlyIncome: 3200,
      status: "Active"
    },
    {
      id: 2,
      property: "Luxury Residential Towers",
      tokens: 500,
      invested: 210000,
      currentValue: 241500,
      return: 15.0,
      monthlyIncome: 4800,
      status: "Active"
    },
    {
      id: 3,
      property: "IT Park Development",
      tokens: 200,
      invested: 135000,
      currentValue: 162000,
      return: 20.0,
      monthlyIncome: 2700,
      status: "Pre-Launch"
    }
  ];

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-white">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Investment Dashboard</h1>
            <p className="text-blue-100">Track your tokenized real estate portfolio performance</p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Portfolio Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-600 text-sm font-medium">Total Investment</p>
                  <p className="text-2xl font-bold text-green-900">
                    {formatCurrency(portfolioData.totalInvestment)}
                  </p>
                </div>
                <Wallet className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-600 text-sm font-medium">Current Value</p>
                  <p className="text-2xl font-bold text-blue-900">
                    {formatCurrency(portfolioData.currentValue)}
                  </p>
                </div>
                <BarChart3 className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-600 text-sm font-medium">Total Return</p>
                  <p className="text-2xl font-bold text-purple-900">
                    {formatCurrency(portfolioData.totalReturn)}
                  </p>
                  <div className="flex items-center mt-1">
                    <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                    <span className="text-green-600 text-sm font-medium">
                      +{portfolioData.returnPercentage}%
                    </span>
                  </div>
                </div>
                <TrendingUp className="h-8 w-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-orange-600 text-sm font-medium">Monthly Income</p>
                  <p className="text-2xl font-bold text-orange-900">
                    {formatCurrency(portfolioData.monthlyIncome)}
                  </p>
                </div>
                <DollarSign className="h-8 w-8 text-orange-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Portfolio Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* My Investments */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl font-bold">My Investments</CardTitle>
                  <Button size="sm" className="bg-gradient-to-r from-blue-600 to-purple-600">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Investment
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {investments.map((investment) => (
                    <div key={investment.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-semibold text-gray-900">{investment.property}</h3>
                        <Badge 
                          variant={investment.status === 'Active' ? 'default' : 'secondary'}
                          className={investment.status === 'Active' ? 'bg-green-500' : ''}
                        >
                          {investment.status}
                        </Badge>
                      </div>
                      
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                        <div>
                          <p className="text-gray-500">Tokens Owned</p>
                          <p className="font-semibold">{investment.tokens.toLocaleString()}</p>
                        </div>
                        <div>
                          <p className="text-gray-500">Invested</p>
                          <p className="font-semibold">{formatCurrency(investment.invested)}</p>
                        </div>
                        <div>
                          <p className="text-gray-500">Current Value</p>
                          <p className="font-semibold">{formatCurrency(investment.currentValue)}</p>
                        </div>
                        <div>
                          <p className="text-gray-500">Return</p>
                          <div className="flex items-center">
                            <TrendingUp className="h-3 w-3 text-green-500 mr-1" />
                            <span className="font-semibold text-green-600">+{investment.return}%</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between mt-3 pt-3 border-t">
                        <div className="text-sm">
                          <span className="text-gray-500">Monthly Income: </span>
                          <span className="font-semibold text-green-600">
                            {formatCurrency(investment.monthlyIncome)}
                          </span>
                        </div>
                        <Button variant="outline" size="sm">
                          <Eye className="h-4 w-4 mr-2" />
                          View Details
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions & Stats */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full bg-gradient-to-r from-green-500 to-blue-600">
                  Browse Properties
                </Button>
                <Button variant="outline" className="w-full">
                  Sell Tokens
                </Button>
                <Button variant="outline" className="w-full">
                  Withdraw Earnings
                </Button>
                <Button variant="outline" className="w-full">
                  View Marketplace
                </Button>
              </CardContent>
            </Card>

            {/* Performance Stats */}
            <Card>
              <CardHeader>
                <CardTitle>Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Best Performer</span>
                    <span className="font-semibold text-green-600">+20%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Total Properties</span>
                    <span className="font-semibold">{portfolioData.totalProperties}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Avg. Return</span>
                    <span className="font-semibold text-blue-600">18.0%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Portfolio Diversity</span>
                    <span className="font-semibold">High</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
