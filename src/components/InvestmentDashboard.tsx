
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  TrendingUp, 
  TrendingDown, 
  Coins, 
  Wallet, 
  Users, 
  Building, 
  MapPin,
  Calendar,
  DollarSign,
  PieChart,
  BarChart3,
  Leaf,
  Shield,
  Zap
} from 'lucide-react';

const InvestmentDashboard = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState('7d');

  // Mock real-time data
  const portfolioData = {
    totalValue: '₹12,45,000',
    totalTokens: '4,980',
    monthlyIncome: '₹8,250',
    totalROI: '+18.5%',
    properties: 12,
    stakingRewards: '₹1,200'
  };

  const holdings = [
    {
      id: 1,
      name: "Amaravati Commercial Complex",
      tokens: 1500,
      currentValue: '₹3,75,000',
      purchaseValue: '₹3,20,000',
      roi: '+17.2%',
      monthlyRental: '₹2,850',
      esgScore: 92,
      status: 'Generating Income'
    },
    {
      id: 2,
      name: "Capital City Residential Phase 1",
      tokens: 2200,
      currentValue: '₹5,50,000',
      purchaseValue: '₹4,80,000',
      roi: '+14.6%',
      monthlyRental: '₹3,200',
      esgScore: 88,
      status: 'Under Construction'
    },
    {
      id: 3,
      name: "IT Hub Mixed Development",
      tokens: 1280,
      currentValue: '₹3,20,000',
      purchaseValue: '₹2,90,000',
      roi: '+10.3%',
      monthlyRental: '₹2,200',
      esgScore: 95,
      status: 'Completed'
    }
  ];

  const stakingPools = [
    {
      name: "Amaravati Infrastructure Pool",
      apy: "22.5%",
      staked: "2,500 AMR",
      rewards: "₹1,200",
      lockPeriod: "90 days"
    },
    {
      name: "Green Development Pool",
      apy: "28.0%",
      staked: "1,800 AMR",
      rewards: "₹980",
      lockPeriod: "180 days"
    }
  ];

  return (
    <div className="space-y-6 p-6">
      {/* Portfolio Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Portfolio Value</p>
                <p className="text-2xl font-bold">{portfolioData.totalValue}</p>
                <p className="text-sm text-green-600 flex items-center">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  {portfolioData.totalROI}
                </p>
              </div>
              <Wallet className="h-8 w-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Tokens</p>
                <p className="text-2xl font-bold">{portfolioData.totalTokens}</p>
                <p className="text-sm text-gray-500">{portfolioData.properties} Properties</p>
              </div>
              <Coins className="h-8 w-8 text-purple-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Monthly Income</p>
                <p className="text-2xl font-bold">{portfolioData.monthlyIncome}</p>
                <p className="text-sm text-green-600">From Rentals</p>
              </div>
              <Building className="h-8 w-8 text-green-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Staking Rewards</p>
                <p className="text-2xl font-bold">{portfolioData.stakingRewards}</p>
                <p className="text-sm text-purple-600">This Month</p>
              </div>
              <Zap className="h-8 w-8 text-yellow-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="holdings" className="space-y-4">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="holdings">My Holdings</TabsTrigger>
          <TabsTrigger value="staking">Staking Pools</TabsTrigger>
          <TabsTrigger value="marketplace">Marketplace</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="holdings" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Property Holdings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {holdings.map((holding) => (
                  <div key={holding.id} className="border rounded-lg p-4">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h4 className="font-semibold">{holding.name}</h4>
                        <p className="text-sm text-gray-600">{holding.tokens} tokens owned</p>
                      </div>
                      <div className="flex gap-2">
                        <Badge className={`${holding.esgScore >= 90 ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                          <Leaf className="h-3 w-3 mr-1" />
                          ESG: {holding.esgScore}
                        </Badge>
                        <Badge variant="outline">{holding.status}</Badge>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div>
                        <p className="text-gray-600">Current Value</p>
                        <p className="font-semibold">{holding.currentValue}</p>
                      </div>
                      <div>
                        <p className="text-gray-600">ROI</p>
                        <p className="font-semibold text-green-600">{holding.roi}</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Monthly Rental</p>
                        <p className="font-semibold">{holding.monthlyRental}</p>
                      </div>
                      <div>
                        <Button size="sm" variant="outline">View Details</Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="staking" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Staking & Yield Farming</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {stakingPools.map((pool, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h4 className="font-semibold">{pool.name}</h4>
                        <p className="text-2xl font-bold text-green-600">{pool.apy} APY</p>
                      </div>
                      <Button className="bg-gradient-to-r from-purple-600 to-blue-600">
                        Stake More
                      </Button>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div>
                        <p className="text-gray-600">Staked Amount</p>
                        <p className="font-semibold">{pool.staked}</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Rewards Earned</p>
                        <p className="font-semibold text-purple-600">{pool.rewards}</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Lock Period</p>
                        <p className="font-semibold">{pool.lockPeriod}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="marketplace" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Secondary Marketplace</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <PieChart className="h-16 w-16 mx-auto text-gray-400 mb-4" />
                <h3 className="text-lg font-semibold mb-2">P2P Token Trading</h3>
                <p className="text-gray-600 mb-4">Buy and sell property tokens with other investors</p>
                <Button>Browse Marketplace</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Performance Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <BarChart3 className="h-16 w-16 mx-auto text-gray-400 mb-4" />
                  <p className="text-gray-600">Detailed charts and analytics coming soon</p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Risk Assessment</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Portfolio Risk Score</span>
                      <span>Low Risk</span>
                    </div>
                    <Progress value={25} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Diversification</span>
                      <span>Good</span>
                    </div>
                    <Progress value={75} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default InvestmentDashboard;
