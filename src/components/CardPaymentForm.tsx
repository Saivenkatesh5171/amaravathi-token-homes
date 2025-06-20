
import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const CardPaymentForm: React.FC = () => {
  return (
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
  );
};

export default CardPaymentForm;
