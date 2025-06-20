
import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Smartphone } from 'lucide-react';

interface UpiPaymentFormProps {
  upiId: string;
  setUpiId: (upiId: string) => void;
  amount: string;
}

const UpiPaymentForm: React.FC<UpiPaymentFormProps> = ({ upiId, setUpiId, amount }) => {
  return (
    <div className="space-y-3">
      <Label>UPI ID</Label>
      <Input 
        placeholder="your-upi-id@bank (e.g., raj@okaxis)" 
        value={upiId}
        onChange={(e) => setUpiId(e.target.value)}
      />
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
        <div className="flex items-center gap-2 text-blue-800 mb-1">
          <Smartphone className="h-4 w-4" />
          <span className="font-medium">PhonePe Integration</span>
        </div>
        <p className="text-blue-700 text-sm">
          You'll receive a payment request notification on your UPI app for ₹{amount}
        </p>
      </div>
    </div>
  );
};

export default UpiPaymentForm;
