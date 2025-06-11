
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { X, Wallet, TrendingUp, Shield, Calculator, CreditCard } from 'lucide-react';

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

  const handleInvest = async () => {
    setIsProcessing(true);
    try {
      // Simulate investment processing
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log(`Investment successful: ${selectedTokens} tokens for ₹${investmentAmount}`);
      onClose();
    } catch (error) {
      console.error('Investment failed:', error);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg">
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
                  <span className="font-semibold">{((selectedTokens / parseInt(property.availableTokens.replace(',', ''))) * 100).toFixed(2)}%</span>
                </div>
                <div className="flex justify-between text-green-800">
                  <span>Expected annual return:</span>
                  <span className="font-semibold">{property.expectedReturn}</span>
                </div>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4">
            <Button 
              onClick={handleInvest}
              disabled={selectedTokens === 0 || isProcessing}
              className="flex-1 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700"
            >
              {isProcessing ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Processing...
                </>
              ) : (
                <>
                  <CreditCard className="h-4 w-4 mr-2" />
                  Invest Now
                </>
              )}
            </Button>
            <Button variant="outline" onClick={onClose} disabled={isProcessing}>
              Cancel
            </Button>
          </div>

          {/* Security Notice */}
          <div className="text-center text-xs text-gray-500 pt-4 border-t">
            <p className="flex items-center justify-center gap-1">
              <Shield className="h-3 w-3" />
              Your investment is secured by blockchain technology
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default InvestmentModal;
