
import { 
  CreditCard, 
  Smartphone, 
  Bitcoin, 
  Wallet, 
  IndianRupee,
  DollarSign
} from 'lucide-react';

export const paymentMethods = {
  fiat: [
    { id: 'upi', name: 'UPI', icon: Smartphone, desc: 'PhonePe, GPay, Paytm' },
    { id: 'netbanking', name: 'Net Banking', icon: CreditCard, desc: 'All major banks' },
    { id: 'card', name: 'Credit/Debit Card', icon: CreditCard, desc: 'Visa, Mastercard, RuPay' },
    { id: 'neft', name: 'NEFT/RTGS', icon: IndianRupee, desc: 'Bank transfer' }
  ],
  crypto: [
    { id: 'btc', name: 'Bitcoin', symbol: 'BTC', amount: '0.00312', icon: Bitcoin },
    { id: 'eth', name: 'Ethereum', symbol: 'ETH', amount: '0.0245', icon: Wallet },
    { id: 'usdt', name: 'Tether USD', symbol: 'USDT', amount: '125.00', icon: DollarSign }
  ]
};
