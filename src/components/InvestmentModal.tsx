
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { X, TrendingUp, Calculator, CreditCard, Wallet, Shield } from 'lucide-react';

interface InvestmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  property: {
    title: string;
    tokenPrice: string;
    totalTokens: string;
    availableTokens: string;
    expectedReturn: string;
  };
}

const InvestmentModal: React.FC<InvestmentModalProps> = ({ isOpen, onClose, property }) => {
  const [tokenAmount, setTokenAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('wallet');
  const [isProcessing, setIsProcessing] = useState(false);

  const tokenPrice = 250;
  const investmentAmount = parseInt(tokenAmount) * tokenPrice || 0;
  const estimatedReturn = investmentAmount * 0.165;

  const handleInvest = async () => {
    setIsProcessing(true);
    
    try {
      // Simulate investment processing
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      alert(`Successfully invested ₹${investmentAmount.toLocaleString()} in ${tokenAmount} tokens!`);
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
          <DialogTitle className="text-center text-xl font-bold flex items-center justify-center gap-2">
            <TrendingUp className="h-5 w-5 text-green-500" />
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
                <span className="text-blue-600">Token Price:</span>
                <p className="font-semibold">{property.tokenPrice}</p>
              </div>
              <div>
                <span className="text-blue-600">Expected Return:</span>
                <p className="font-semibold text-green-600">{property.expectedReturn}</p>
              </div>
              <div>
                <span className="text-blue-600">Available Tokens:</span>
                <p className="font-semibold">{property.availableTokens}</p>
              </div>
              <div>
                <span className="text-blue-600">Total Tokens:</span>
                <p className="font-semibold">{property.totalTokens}</p>
              </div>
            </div>
          </div>

          {/* Investment Amount */}
          <div>
            <Label htmlFor="tokens" className="flex items-center gap-2">
              <Calculator className="h-4 w-4" />
              Number of Tokens
            </Label>
            <Input
              id="tokens"
              type="number"
              placeholder="Enter number of tokens"
              value={tokenAmount}
              onChange={(e) => setTokenAmount(e.target.value)}
              className="mt-1"
              min="1"
              max={parseInt(property.availableTokens.replace(',', ''))}
            />
            
            {tokenAmount && (
              <div className="mt-3 p-3 bg-gray-50 rounded-lg">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-600">Investment Amount:</span>
                    <p className="font-semibold text-lg">₹{investmentAmount.toLocaleString()}</p>
                  </div>
                  <div>
                    <span className="text-gray-600">Est. Annual Return:</span>
                    <p className="font-semibold text-lg text-green-600">₹{estimatedReturn.toLocaleString()}</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Payment Method */}
          <div>
            <Label className="flex items-center gap-2 mb-3">
              <CreditCard className="h-4 w-4" />
              Payment Method
            </Label>
            <div className="grid grid-cols-2 gap-3">
              <Button
                variant={paymentMethod === 'wallet' ? 'default' : 'outline'}
                onClick={() => setPaymentMethod('wallet')}
                className="h-auto p-3 flex flex-col gap-2"
              >
                <Wallet className="h-5 w-5" />
                <span className="text-sm">Crypto Wallet</span>
              </Button>
              <Button
                variant={paymentMethod === 'card' ? 'default' : 'outline'}
                onClick={() => setPaymentMethod('card')}
                className="h-auto p-3 flex flex-col gap-2"
              >
                <CreditCard className="h-5 w-5" />
                <span className="text-sm">Credit/Debit Card</span>
              </Button>
            </div>
          </div>

          {/* Legal Notice */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
            <div className="flex items-start gap-2">
              <Shield className="h-4 w-4 text-yellow-600 mt-0.5" />
              <div className="text-sm text-yellow-800">
                <p className="font-medium mb-1">Important Legal Notice:</p>
                <p>This investment is subject to market risks. Please read all legal documents carefully before investing.</p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4">
            <Button
              onClick={handleInvest}
              disabled={!tokenAmount || isProcessing}
              className="flex-1 bg-gradient-to-r from-green-600 to-blue-600"
            >
              {isProcessing ? 'Processing...' : `Invest ₹${investmentAmount.toLocaleString()}`}
            </Button>
            <Button variant="outline" onClick={onClose} className="flex-1">
              Cancel
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default InvestmentModal;
