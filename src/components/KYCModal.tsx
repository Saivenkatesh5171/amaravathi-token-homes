
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Progress } from '@/components/ui/progress';
import { X, Upload, CheckCircle, AlertCircle, User, FileText, MapPin, CreditCard } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface KYCModalProps {
  isOpen: boolean;
  onClose: () => void;
  onKYCCompleted: (kycData: any) => void;
}

const KYCModal: React.FC<KYCModalProps> = ({ isOpen, onClose, onKYCCompleted }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [kycData, setKycData] = useState({
    // Personal Information
    fullName: '',
    dateOfBirth: '',
    gender: '',
    nationality: 'Indian',
    maritalStatus: '',
    occupation: '',
    
    // Identity Documents
    idType: '',
    idNumber: '',
    idDocument: null as File | null,
    
    // Address Information
    address: '',
    city: '',
    state: '',
    pincode: '',
    addressProof: null as File | null,
    
    // Financial Information
    annualIncome: '',
    sourceOfIncome: '',
    investmentExperience: '',
    
    // Bank Details
    bankName: '',
    accountNumber: '',
    ifscCode: '',
    bankStatement: null as File | null,
    
    // Additional
    panNumber: '',
    aadharNumber: ''
  });

  const totalSteps = 4;
  const progress = (currentStep / totalSteps) * 100;

  const handleInputChange = (field: string, value: string) => {
    setKycData(prev => ({ ...prev, [field]: value }));
  };

  const handleFileChange = (field: string, file: File | null) => {
    setKycData(prev => ({ ...prev, [field]: file }));
  };

  const handleNextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleSubmitKYC = async () => {
    setIsLoading(true);
    
    try {
      // Simulate KYC submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const kycResult = {
        ...kycData,
        kycStatus: 'pending',
        submittedAt: new Date().toISOString(),
        kycId: 'KYC_' + Date.now()
      };
      
      localStorage.setItem('kycData', JSON.stringify(kycResult));
      console.log('KYC submitted:', kycResult);
      
      onKYCCompleted(kycResult);
      onClose();
    } catch (error) {
      console.error('KYC submission failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <User className="h-5 w-5 text-blue-600" />
              <h3 className="text-lg font-semibold">Personal Information</h3>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="fullName">Full Name (as per ID)</Label>
                <Input
                  id="fullName"
                  value={kycData.fullName}
                  onChange={(e) => handleInputChange('fullName', e.target.value)}
                  placeholder="Enter full name"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="dateOfBirth">Date of Birth</Label>
                <Input
                  id="dateOfBirth"
                  type="date"
                  value={kycData.dateOfBirth}
                  onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="gender">Gender</Label>
                <Select value={kycData.gender} onValueChange={(value) => handleInputChange('gender', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="maritalStatus">Marital Status</Label>
                <Select value={kycData.maritalStatus} onValueChange={(value) => handleInputChange('maritalStatus', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="single">Single</SelectItem>
                    <SelectItem value="married">Married</SelectItem>
                    <SelectItem value="divorced">Divorced</SelectItem>
                    <SelectItem value="widowed">Widowed</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="col-span-2">
                <Label htmlFor="occupation">Occupation</Label>
                <Input
                  id="occupation"
                  value={kycData.occupation}
                  onChange={(e) => handleInputChange('occupation', e.target.value)}
                  placeholder="Enter occupation"
                />
              </div>
            </div>
          </div>
        );
        
      case 2:
        return (
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <FileText className="h-5 w-5 text-blue-600" />
              <h3 className="text-lg font-semibold">Identity Verification</h3>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="idType">ID Document Type</Label>
                <Select value={kycData.idType} onValueChange={(value) => handleInputChange('idType', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select ID type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="aadhar">Aadhar Card</SelectItem>
                    <SelectItem value="passport">Passport</SelectItem>
                    <SelectItem value="driving_license">Driving License</SelectItem>
                    <SelectItem value="voter_id">Voter ID</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="idNumber">ID Number</Label>
                <Input
                  id="idNumber"
                  value={kycData.idNumber}
                  onChange={(e) => handleInputChange('idNumber', e.target.value)}
                  placeholder="Enter ID number"
                />
              </div>
              
              <div>
                <Label htmlFor="panNumber">PAN Number</Label>
                <Input
                  id="panNumber"
                  value={kycData.panNumber}
                  onChange={(e) => handleInputChange('panNumber', e.target.value.toUpperCase())}
                  placeholder="ABCDE1234F"
                  maxLength={10}
                />
              </div>
              
              <div>
                <Label htmlFor="aadharNumber">Aadhar Number</Label>
                <Input
                  id="aadharNumber"
                  value={kycData.aadharNumber}
                  onChange={(e) => handleInputChange('aadharNumber', e.target.value)}
                  placeholder="XXXX XXXX XXXX"
                  maxLength={12}
                />
              </div>
            </div>
            
            <div>
              <Label>Upload ID Document</Label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                <p className="text-sm text-gray-600 mb-2">Click to upload or drag and drop</p>
                <p className="text-xs text-gray-500">PNG, JPG or PDF (max. 5MB)</p>
                <input
                  type="file"
                  accept="image/*,.pdf"
                  onChange={(e) => handleFileChange('idDocument', e.target.files?.[0] || null)}
                  className="hidden"
                  id="idDocumentUpload"
                />
                <label htmlFor="idDocumentUpload">
                  <Button variant="outline" className="mt-2" type="button">
                    Choose File
                  </Button>
                </label>
                {kycData.idDocument && (
                  <p className="text-sm text-green-600 mt-2">
                    ✓ {kycData.idDocument.name}
                  </p>
                )}
              </div>
            </div>
          </div>
        );
        
      case 3:
        return (
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="h-5 w-5 text-blue-600" />
              <h3 className="text-lg font-semibold">Address Information</h3>
            </div>
            
            <div>
              <Label htmlFor="address">Complete Address</Label>
              <Textarea
                id="address"
                value={kycData.address}
                onChange={(e) => handleInputChange('address', e.target.value)}
                placeholder="Enter complete residential address"
                rows={3}
              />
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              <div>
                <Label htmlFor="city">City</Label>
                <Input
                  id="city"
                  value={kycData.city}
                  onChange={(e) => handleInputChange('city', e.target.value)}
                  placeholder="Enter city"
                />
              </div>
              
              <div>
                <Label htmlFor="state">State</Label>
                <Input
                  id="state"
                  value={kycData.state}
                  onChange={(e) => handleInputChange('state', e.target.value)}
                  placeholder="Enter state"
                />
              </div>
              
              <div>
                <Label htmlFor="pincode">PIN Code</Label>
                <Input
                  id="pincode"
                  value={kycData.pincode}
                  onChange={(e) => handleInputChange('pincode', e.target.value)}
                  placeholder="123456"
                  maxLength={6}
                />
              </div>
            </div>
            
            <div>
              <Label>Upload Address Proof</Label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                <p className="text-sm text-gray-600 mb-2">Utility bill, bank statement, or rental agreement</p>
                <input
                  type="file"
                  accept="image/*,.pdf"
                  onChange={(e) => handleFileChange('addressProof', e.target.files?.[0] || null)}
                  className="hidden"
                  id="addressProofUpload"
                />
                <label htmlFor="addressProofUpload">
                  <Button variant="outline" type="button">
                    Choose File
                  </Button>
                </label>
                {kycData.addressProof && (
                  <p className="text-sm text-green-600 mt-2">
                    ✓ {kycData.addressProof.name}
                  </p>
                )}
              </div>
            </div>
          </div>
        );
        
      case 4:
        return (
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <CreditCard className="h-5 w-5 text-blue-600" />
              <h3 className="text-lg font-semibold">Financial Information</h3>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="annualIncome">Annual Income (₹)</Label>
                <Select value={kycData.annualIncome} onValueChange={(value) => handleInputChange('annualIncome', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select income range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0-3">Below ₹3 Lakhs</SelectItem>
                    <SelectItem value="3-5">₹3-5 Lakhs</SelectItem>
                    <SelectItem value="5-10">₹5-10 Lakhs</SelectItem>
                    <SelectItem value="10-25">₹10-25 Lakhs</SelectItem>
                    <SelectItem value="25+">Above ₹25 Lakhs</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="sourceOfIncome">Source of Income</Label>
                <Select value={kycData.sourceOfIncome} onValueChange={(value) => handleInputChange('sourceOfIncome', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select source" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="salary">Salary</SelectItem>
                    <SelectItem value="business">Business</SelectItem>
                    <SelectItem value="investments">Investments</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="col-span-2">
                <Label htmlFor="investmentExperience">Investment Experience</Label>
                <Select value={kycData.investmentExperience} onValueChange={(value) => handleInputChange('investmentExperience', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select experience level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="beginner">Beginner (0-1 years)</SelectItem>
                    <SelectItem value="intermediate">Intermediate (1-5 years)</SelectItem>
                    <SelectItem value="experienced">Experienced (5+ years)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="bankName">Bank Name</Label>
                <Input
                  id="bankName"
                  value={kycData.bankName}
                  onChange={(e) => handleInputChange('bankName', e.target.value)}
                  placeholder="Enter bank name"
                />
              </div>
              
              <div>
                <Label htmlFor="ifscCode">IFSC Code</Label>
                <Input
                  id="ifscCode"
                  value={kycData.ifscCode}
                  onChange={(e) => handleInputChange('ifscCode', e.target.value.toUpperCase())}
                  placeholder="SBIN0001234"
                />
              </div>
              
              <div className="col-span-2">
                <Label htmlFor="accountNumber">Account Number</Label>
                <Input
                  id="accountNumber"
                  value={kycData.accountNumber}
                  onChange={(e) => handleInputChange('accountNumber', e.target.value)}
                  placeholder="Enter account number"
                />
              </div>
            </div>
          </div>
        );
        
      default:
        return null;
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-center text-xl font-bold">
            Complete KYC Verification
          </DialogTitle>
          <button
            onClick={onClose}
            className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100"
          >
            <X className="h-4 w-4" />
          </button>
        </DialogHeader>

        <div className="p-6 space-y-6">
          {/* Progress Bar */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-600">
              <span>Step {currentStep} of {totalSteps}</span>
              <span>{Math.round(progress)}% Complete</span>
            </div>
            <Progress value={progress} className="w-full" />
          </div>

          {/* Step Indicators */}
          <div className="flex justify-between mb-8">
            {[1, 2, 3, 4].map((step) => (
              <div key={step} className="flex flex-col items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  step <= currentStep 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-200 text-gray-500'
                }`}>
                  {step < currentStep ? (
                    <CheckCircle className="h-4 w-4" />
                  ) : (
                    <span>{step}</span>
                  )}
                </div>
                <span className="text-xs mt-1 text-gray-600">
                  {step === 1 && 'Personal'}
                  {step === 2 && 'Identity'}
                  {step === 3 && 'Address'}
                  {step === 4 && 'Financial'}
                </span>
              </div>
            ))}
          </div>

          {/* Step Content */}
          <div className="min-h-[400px]">
            {renderStepContent()}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between pt-6 border-t">
            <Button
              variant="outline"
              onClick={handlePrevStep}
              disabled={currentStep === 1}
            >
              Previous
            </Button>
            
            {currentStep < totalSteps ? (
              <Button onClick={handleNextStep}>
                Next Step
              </Button>
            ) : (
              <Button 
                onClick={handleSubmitKYC}
                disabled={isLoading}
                className="bg-gradient-to-r from-blue-600 to-purple-600"
              >
                {isLoading ? 'Submitting...' : 'Submit KYC'}
              </Button>
            )}
          </div>

          {/* Important Notes */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-6">
            <div className="flex items-start gap-2">
              <AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5" />
              <div>
                <h4 className="font-medium text-yellow-800">Important Notes:</h4>
                <ul className="text-sm text-yellow-700 mt-1 space-y-1">
                  <li>• All documents must be clear and readable</li>
                  <li>• Information should match across all documents</li>
                  <li>• KYC verification may take 24-48 hours</li>
                  <li>• You'll receive an email confirmation once approved</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default KYCModal;
