
export const validateUpiId = (upiId: string): boolean => {
  const upiRegex = /^[a-zA-Z0-9.\-_]+@[a-zA-Z0-9.-]+$/;
  return upiRegex.test(upiId);
};

export const generateMerchantTransactionId = (): string => {
  return `TXN_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
};

export const initiatePhonePePayment = async (upiId: string, amount: string) => {
  const merchantTransactionId = generateMerchantTransactionId();
  const amountInPaise = parseInt(amount.replace(/,/g, '')) * 100; // Convert to paise
  
  const phonepePayload = {
    merchantId: "YOUR_MERCHANT_ID", // Replace with actual merchant ID
    merchantTransactionId: merchantTransactionId,
    amount: amountInPaise,
    merchantUserId: `user_${Date.now()}`,
    redirectUrl: `${window.location.origin}/payment-success`,
    callbackUrl: `${window.location.origin}/phonepe-payment-status`,
    paymentInstrument: {
      type: "UPI_INTENT",
      target: upiId
    }
  };

  console.log('PhonePe Payment Payload:', phonepePayload);
  console.log('API Endpoint: POST https://api.phonepe.com/apis/pg/v1/pay');
  console.log('Headers Required: X-VERIFY (SHA256 payload with salt + salt index)');
  
  // Note: Actual API call would require proper backend implementation
  // This is a demonstration of the payload structure
  
  return phonepePayload;
};

export const processPayment = async (method: string, upiId: string, amount: string) => {
  console.log(`Processing payment via ${method} for ₹${amount}`);
  
  if (method === 'upi' && upiId) {
    if (!validateUpiId(upiId)) {
      console.error('Invalid UPI ID format');
      throw new Error('Invalid UPI ID format');
    }

    const paymentData = await initiatePhonePePayment(upiId, amount);
    console.log('Payment initiated with PhonePe:', paymentData);
    
    // In a real implementation, this would make an API call to your backend
    // which would then call the PhonePe API with proper authentication
  }
  
  // Simulate payment processing
  await new Promise(resolve => setTimeout(resolve, 3000));
  console.log('Payment successful!');
};
