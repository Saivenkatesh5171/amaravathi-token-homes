
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { 
  CreditCard, 
  Smartphone, 
  Bitcoin, 
  Wallet, 
  Shield, 
  Check,
  ArrowRight,
  IndianRupee,
  DollarSign
} from 'lucide-react';

interface PaymentGatewayProps {
  isOpen: boolean;
  onClose: () => void;
  amount: string;
  propertyName: string;
  tokens: number;
}

const PaymentGateway: React.FC<PaymentGatewayProps> = ({ 
  isOpen, 
  onClose, 
  amount, 
  propertyName, 
  tokens 
}) => {
  const [selectedPayment, setSelectedPayment] = useState('upi');
  const [isProcessing, setIsProcessing] = useState(false);
  const [cryptoAmount, setCryptoAmount] = useState({
    btc: '0.00312',
    eth: '0.0245',
    usdt: '125.00'
  });

  const handlePayment = async (method: string) => {
    setIsProcessing(true);
    console.log(`Processing payment via ${method} for ₹${amount}`);
    
    try {
      // Simulate payment processing
      await new Promise(resolve => setTimeout(resolve, 3000));
      console.log('Payment successful!');
      onClose();
    } catch (error) {
      console.error('Payment failed:', error);
    } finally {
      setIsProcessing(false);
    }
  };

  const paymentMethods = {
    fiat: [
      { id: 'upi', name: 'UPI', icon: Smartphone, desc: 'PhonePe, GPay, Paytm' },
      { id: 'netbanking', name: 'Net Banking', icon: CreditCard, desc: 'All major banks' },
      { id: 'card', name: 'Credit/Debit Card', icon: CreditCard, desc: 'Visa, Mastercard, RuPay' },
      { id: 'neft', name: 'NEFT/RTGS', icon: IndianRupee, desc: 'Bank transfer' }
    ],
    crypto: [
      { id: 'btc', name: 'Bitcoin', symbol: 'BTC', amount: cryptoAmount.btc, icon: Bitcoin },
      { id: 'eth', name: 'Ethereum', symbol: 'ETH', amount: cryptoAmount.eth, icon: Wallet },
      { id: 'usdt', name: 'Tether USD', symbol: 'USDT', amount: cryptoAmount.usdt, icon: DollarSign }
    ]
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-center">
            Complete Your Investment
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6 p-6">
          {/* Investment Summary */}
          <div className="bg-blue-50 rounded-lg p-4">
            <h3 className="font-semibold text-blue-900 mb-2">{propertyName}</h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-blue-700">Tokens:</span>
                <span className="font-semibold ml-2">{tokens}</span>
              </div>
              <div>
                <span className="text-blue-700">Amount:</span>
                <span className="font-semibold ml-2">₹{amount}</span>
              </div>
            </div>
          </div>

          <Tabs defaultValue="fiat" className="space-y-4">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="fiat" className="flex items-center gap-2">
                <IndianRupee className="h-4 w-4" />
                INR Payment
              </TabsTrigger>
              <TabsTrigger value="crypto" className="flex items-center gap-2">
                <Bitcoin className="h-4 w-4" />
                Crypto Payment
              </TabsTrigger>
            </TabsList>

            <TabsContent value="fiat" className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                {paymentMethods.fiat.map((method) => {
                  const IconComponent = method.icon;
                  return (
                    <Button
                      key={method.id}
                      variant={selectedPayment === method.id ? "default" : "outline"}
                      className="h-20 flex flex-col gap-2"
                      onClick={() => setSelectedPayment(method.id)}
                    >
                      <IconComponent className="h-6 w-6" />
                      <div className="text-center">
                        <div className="font-medium text-sm">{method.name}</div>
                        <div className="text-xs text-gray-500">{method.desc}</div>
                      </div>
                    </Button>
                  );
                })}
              </div>

              {selectedPayment === 'upi' && (
                <div className="space-y-3">
                  <Label>UPI ID</Label>
                  <Input placeholder="your-upi-id@bank" />
                </div>
              )}

              {selectedPayment === 'card' && (
                <div className="space-y-3">
                  <div>
                    <Label>Card Number</Label>
                    <Input placeholder="1234 5678 9012 3456" />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <Label>Expiry Date</Label>
                      <Input placeholder="MM/YY" />
                    </div>
                    <div>
                      <Label>CVV</Label>
                      <Input placeholder="123" />
                    </div>
                  </div>
                </div>
              )}
            </TabsContent>

            <TabsContent value="crypto" className="space-y-4">
              <div className="space-y-3">
                {paymentMethods.crypto.map((crypto) => {
                  const IconComponent = crypto.icon;
                  return (
                    <div key={crypto.id} className="border rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <IconComponent className="h-8 w-8" />
                          <div>
                            <div className="font-medium">{crypto.name}</div>
                            <div className="text-sm text-gray-500">{crypto.symbol}</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-semibold">{crypto.amount} {crypto.symbol}</div>
                          <div className="text-sm text-gray-500">≈ ₹{amount}</div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                <div className="flex items-center gap-2 text-orange-800">
                  <Shield className="h-4 w-4" />
                  <span className="font-medium">Crypto Payment Process</span>
                </div>
                <p className="text-orange-700 text-sm mt-1">
                  Connect your MetaMask or WalletConnect to proceed with cryptocurrency payment.
                </p>
              </div>
            </TabsContent>
          </Tabs>

          {/* Security Features */}
          <div className="grid grid-cols-3 gap-4 text-center text-sm">
            <div className="flex flex-col items-center gap-1">
              <Shield className="h-5 w-5 text-green-600" />
              <span>256-bit SSL</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <Check className="h-5 w-5 text-green-600" />
              <span>PCI Compliant</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <Wallet className="h-5 w-5 text-green-600" />
              <span>Secure Wallet</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4">
            <Button 
              onClick={() => handlePayment(selectedPayment)}
              disabled={isProcessing}
              className="flex-1 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700"
            >
              {isProcessing ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Processing...
                </>
              ) : (
                <>
                  Pay ₹{amount}
                  <ArrowRight className="h-4 w-4 ml-2" />
                </>
              )}
            </Button>
            <Button variant="outline" onClick={onClose} disabled={isProcessing}>
              Cancel
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PaymentGateway;
