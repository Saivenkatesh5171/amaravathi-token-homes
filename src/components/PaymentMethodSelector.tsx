
import React from 'react';
import { Button } from '@/components/ui/button';

interface PaymentMethod {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  desc: string;
}

interface PaymentMethodSelectorProps {
  methods: PaymentMethod[];
  selectedPayment: string;
  onSelectPayment: (paymentId: string) => void;
}

const PaymentMethodSelector: React.FC<PaymentMethodSelectorProps> = ({
  methods,
  selectedPayment,
  onSelectPayment
}) => {
  return (
    <div className="grid grid-cols-2 gap-3">
      {methods.map((method) => {
        const IconComponent = method.icon;
        return (
          <Button
            key={method.id}
            variant={selectedPayment === method.id ? "default" : "outline"}
            className="h-20 flex flex-col gap-2"
            onClick={() => onSelectPayment(method.id)}
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
  );
};

export default PaymentMethodSelector;
