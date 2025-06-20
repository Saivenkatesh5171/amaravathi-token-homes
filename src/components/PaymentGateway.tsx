
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Shield, 
  Check,
  ArrowRight,
  IndianRupee,
  Bitcoin,
  Wallet
} from 'lucide-react';
import { paymentMethods } from '@/utils/paymentMethods';
import { processPayment } from '@/utils/paymentUtils';
import PaymentMethodSelector from './PaymentMethodSelector';
import UpiPaymentForm from './UpiPaymentForm';
import CardPaymentForm from './CardPaymentForm';
import CryptoPaymentList from './CryptoPaymentList';

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
  const [upiId, setUpiId] = useState('');

  const handlePayment = async (method: string) => {
    setIsProcessing(true);
    
    try {
      await processPayment(method, upiId, amount);
      onClose();
    } catch (error) {
      console.error('Payment failed:', error);
    } finally {
      setIsProcessing(false);
    }
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
              <PaymentMethodSelector
                methods={paymentMethods.fiat}
                selectedPayment={selectedPayment}
                onSelectPayment={setSelectedPayment}
              />

              {selectedPayment === 'upi' && (
                <UpiPaymentForm
                  upiId={upiId}
                  setUpiId={setUpiId}
                  amount={amount}
                />
              )}

              {selectedPayment === 'card' && <CardPaymentForm />}
            </TabsContent>

            <TabsContent value="crypto" className="space-y-4">
              <CryptoPaymentList 
                cryptoMethods={paymentMethods.crypto}
                amount={amount}
              />

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
              disabled={isProcessing || (selectedPayment === 'upi' && !upiId)}
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
