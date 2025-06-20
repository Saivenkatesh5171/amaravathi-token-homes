
import React from 'react';

interface CryptoMethod {
  id: string;
  name: string;
  symbol: string;
  amount: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface CryptoPaymentListProps {
  cryptoMethods: CryptoMethod[];
  amount: string;
}

const CryptoPaymentList: React.FC<CryptoPaymentListProps> = ({ cryptoMethods, amount }) => {
  return (
    <div className="space-y-3">
      {cryptoMethods.map((crypto) => {
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
  );
};

export default CryptoPaymentList;
