
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { X, Wallet, TrendingUp, Shield, Calculator, CreditCard, Award, Zap } from 'lucide-react';
import PaymentGateway from './PaymentGateway';
import NFTCertificate from './NFTCertificate';

interface InvestmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  property: {
    id: number;
    title: string;
    tokenPrice: string;
    availableTokens: string;
    expectedReturn: string;
    price: string;
  };
}

const InvestmentModal: React.FC<InvestmentModalProps> = ({ isOpen, onClose, property }) => {
  const [investmentAmount, setInvestmentAmount] = useState('');
  const [selectedTokens, setSelectedTokens] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);
  const [showPaymentGateway, setShowPaymentGateway] = useState(false);
  const [showNFTCertificate, setShowNFTCertificate] = useState(false);
  const [activeTab, setActiveTab] = useState('invest');

  const tokenPrice = parseInt(property.tokenPrice.replace('₹', ''));
  const maxTokens = parseInt(property.availableTokens.replace(',', ''));

  const handleAmountChange = (amount: string) => {
    setInvestmentAmount(amount);
    const tokens = Math.floor(parseInt(amount) / tokenPrice);
    setSelectedTokens(Math.min(tokens, maxTokens));
  };

  const handleTokenChange = (tokens: number) => {
    setSelectedTokens(Math.min(tokens, maxTokens));
    setInvestmentAmount((tokens * tokenPrice).toString());
  };

  const handleProceedToPayment = () => {
    setShowPaymentGateway(true);
  };

  const handleViewCertificate = () => {
    setShowNFTCertificate(true);
  };

  // Mock NFT certificate data
  const certificateData = {
    propertyName: property.title,
    tokens: selectedTokens,
    purchaseDate: new Date().toLocaleDateString(),
    purchasePrice: `₹${investmentAmount}`,
    currentValue: `₹${Math.floor(parseInt(investmentAmount) * 1.15)}`,
    sharePercentage: `${((selectedTokens / maxTokens) * 100).toFixed(3)}%`,
    certificateId: `AMR-${property.id}-${Date.now()}`,
    location: "Amaravati Capital Region",
    roi: "+15.2%"
  };

  return (
    <>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-center text-xl font-bold">
              Invest in {property.title}
            </DialogTitle>
            <button
              onClick={onClose}
              className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100"
            >
              <X className="h-4 w-4" />
            </button>
          </DialogHeader>

          <div className="p-6 space-y-6">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="invest">Invest</TabsTrigger>
                <TabsTrigger value="staking">Staking</TabsTrigger>
                <TabsTrigger value="income">Rental Income</TabsTrigger>
                <TabsTrigger value="nft">NFT Certificate</TabsTrigger>
              </TabsList>

              <TabsContent value="invest" className="space-y-4">
                {/* Property Summary */}
                <div className="bg-blue-50 rounded-lg p-4">
                  <h3 className="font-semibold text-blue-900 mb-2">{property.title}</h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-blue-700">Token Price:</span>
                      <span className="font-semibold ml-2">{property.tokenPrice}</span>
                    </div>
                    <div>
                      <span className="text-blue-700">Expected Return:</span>
                      <span className="font-semibold ml-2">{property.expectedReturn}</span>
                    </div>
                    <div>
                      <span className="text-blue-700">Available Tokens:</span>
                      <span className="font-semibold ml-2">{property.availableTokens}</span>
                    </div>
                    <div>
                      <span className="text-blue-700">Property Value:</span>
                      <span className="font-semibold ml-2">{property.price}</span>
                    </div>
                  </div>
                </div>

                {/* Investment Calculator */}
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="amount" className="flex items-center gap-2">
                      <Calculator className="h-4 w-4" />
                      Investment Amount (₹)
                    </Label>
                    <Input
                      id="amount"
                      type="number"
                      placeholder="Enter amount to invest"
                      value={investmentAmount}
                      onChange={(e) => handleAmountChange(e.target.value)}
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="tokens" className="flex items-center gap-2">
                      <TrendingUp className="h-4 w-4" />
                      Number of Tokens
                    </Label>
                    <Input
                      id="tokens"
                      type="number"
                      placeholder="Number of tokens"
                      value={selectedTokens}
                      onChange={(e) => handleTokenChange(parseInt(e.target.value) || 0)}
                      max={maxTokens}
                      className="mt-1"
                    />
                  </div>
                </div>

                {/* Investment Summary */}
                {selectedTokens > 0 && (
                  <div className="bg-green-50 rounded-lg p-4">
                    <h4 className="font-semibold text-green-900 mb-3 flex items-center gap-2">
                      <Shield className="h-4 w-4" />
                      Investment Summary
                    </h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Tokens to purchase:</span>
                        <span className="font-semibold">{selectedTokens}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Total investment:</span>
                        <span className="font-semibold">₹{investmentAmount}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Ownership percentage:</span>
                        <span className="font-semibold">{((selectedTokens / maxTokens) * 100).toFixed(3)}%</span>
                      </div>
                      <div className="flex justify-between text-green-800">
                        <span>Expected annual return:</span>
                        <span className="font-semibold">{property.expectedReturn}</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Action Button */}
                <Button 
                  onClick={handleProceedToPayment}
                  disabled={selectedTokens === 0}
                  className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700"
                >
                  <CreditCard className="h-4 w-4 mr-2" />
                  Proceed to Payment
                </Button>
              </TabsContent>

              <TabsContent value="staking" className="space-y-4">
                <div className="text-center py-8">
                  <Zap className="h-16 w-16 mx-auto text-yellow-500 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Stake Your Tokens</h3>
                  <p className="text-gray-600 mb-4">Earn additional rewards by staking your property tokens</p>
                  <div className="bg-yellow-50 rounded-lg p-4 mb-4">
                    <p className="text-yellow-800 font-semibold">Up to 28% APY</p>
                    <p className="text-yellow-700 text-sm">Lock your tokens for higher yields</p>
                  </div>
                  <Button variant="outline">Learn More About Staking</Button>
                </div>
              </TabsContent>

              <TabsContent value="income" className="space-y-4">
                <div className="text-center py-8">
                  <TrendingUp className="h-16 w-16 mx-auto text-green-500 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Rental Income Distribution</h3>
                  <p className="text-gray-600 mb-4">Receive monthly rental income based on your token ownership</p>
                  <div className="bg-green-50 rounded-lg p-4 mb-4">
                    <p className="text-green-800 font-semibold">Auto-Distribution</p>
                    <p className="text-green-700 text-sm">Smart contract automatically distributes rental income</p>
                  </div>
                  <Button variant="outline">View Income History</Button>
                </div>
              </TabsContent>

              <TabsContent value="nft" className="space-y-4">
                <div className="text-center py-8">
                  <Award className="h-16 w-16 mx-auto text-purple-500 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">NFT Certificate</h3>
                  <p className="text-gray-600 mb-4">Get a unique NFT certificate as proof of your investment</p>
                  <div className="bg-purple-50 rounded-lg p-4 mb-4">
                    <p className="text-purple-800 font-semibold">Blockchain Verified</p>
                    <p className="text-purple-700 text-sm">Cryptographically secured ownership proof</p>
                  </div>
                  <Button onClick={handleViewCertificate} variant="outline">
                    Preview Certificate
                  </Button>
                </div>
              </TabsContent>
            </Tabs>

            {/* Security Notice */}
            <div className="text-center text-xs text-gray-500 pt-4 border-t">
              <p className="flex items-center justify-center gap-1">
                <Shield className="h-3 w-3" />
                Your investment is secured by blockchain technology & regulatory compliance
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Payment Gateway Modal */}
      <PaymentGateway
        isOpen={showPaymentGateway}
        onClose={() => setShowPaymentGateway(false)}
        amount={investmentAmount}
        propertyName={property.title}
        tokens={selectedTokens}
      />

      {/* NFT Certificate Modal */}
      <Dialog open={showNFTCertificate} onOpenChange={setShowNFTCertificate}>
        <DialogContent className="sm:max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Your Investment Certificate</DialogTitle>
          </DialogHeader>
          <NFTCertificate investmentData={certificateData} />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default InvestmentModal;
