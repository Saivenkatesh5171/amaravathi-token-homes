
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { X, Mail, Lock, Eye, EyeOff, User, Phone } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAuthenticated: (userData: any) => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, onAuthenticated }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    fullName: '',
    phone: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setError(''); // Clear error when user types
  };

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePassword = (password: string) => {
    return password.length >= 6;
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    try {
      if (!validateEmail(formData.email)) {
        throw new Error('Please enter a valid email address');
      }
      
      if (!validatePassword(formData.password)) {
        throw new Error('Password must be at least 6 characters long');
      }

      // Simulate login API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Check existing KYC status
      const existingKYC = localStorage.getItem('kycData');
      const kycStatus = existingKYC ? JSON.parse(existingKYC).kycStatus : 'not_started';
      
      // Simulate successful login
      const userData = {
        name: formData.fullName || 'User',
        email: formData.email,
        phone: formData.phone || '+91 98765 43210',
        avatar: '',
        verified: true,
        authMethod: 'email',
        kycStatus: kycStatus
      };
      
      // Store authentication state
      localStorage.setItem('authToken', 'demo_token_' + Date.now());
      localStorage.setItem('userData', JSON.stringify(userData));
      
      console.log('Login successful:', userData);
      onAuthenticated(userData);
      onClose();
    } catch (error: any) {
      console.error('Login failed:', error);
      setError(error.message || 'Login failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    try {
      if (!formData.fullName.trim()) {
        throw new Error('Please enter your full name');
      }
      
      if (!validateEmail(formData.email)) {
        throw new Error('Please enter a valid email address');
      }
      
      if (!formData.phone.trim()) {
        throw new Error('Please enter your phone number');
      }
      
      if (!validatePassword(formData.password)) {
        throw new Error('Password must be at least 6 characters long');
      }
      
      if (formData.password !== formData.confirmPassword) {
        throw new Error('Passwords do not match');
      }
      
      // Simulate signup API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const userData = {
        name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        avatar: '',
        verified: false,
        authMethod: 'email',
        kycStatus: 'not_started'
      };
      
      // Store authentication state
      localStorage.setItem('authToken', 'demo_token_' + Date.now());
      localStorage.setItem('userData', JSON.stringify(userData));
      
      console.log('Signup successful:', userData);
      onAuthenticated(userData);
      onClose();
    } catch (error: any) {
      console.error('Signup failed:', error);
      setError(error.message || 'Signup failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleForgotPassword = () => {
    if (!formData.email) {
      setError('Please enter your email address first');
      return;
    }
    
    // Simulate forgot password
    alert(`Password reset link sent to ${formData.email}`);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-xl font-bold">
            Welcome to Amaravati Tokens
          </DialogTitle>
          <button
            onClick={onClose}
            className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100"
          >
            <X className="h-4 w-4" />
          </button>
        </DialogHeader>

        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="signup">Sign Up</TabsTrigger>
          </TabsList>

          <TabsContent value="login" className="space-y-4">
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <Label htmlFor="login-email" className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  Email Address
                </Label>
                <Input
                  id="login-email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  required
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="login-password" className="flex items-center gap-2">
                  <Lock className="h-4 w-4" />
                  Password
                </Label>
                <div className="relative mt-1">
                  <Input
                    id="login-password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={(e) => handleInputChange('password', e.target.value)}
                    required
                    className="pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              {error && (
                <div className="text-red-600 text-sm bg-red-50 p-2 rounded">
                  {error}
                </div>
              )}

              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600"
                disabled={isLoading}
              >
                {isLoading ? 'Logging in...' : 'Login'}
              </Button>
            </form>

            <div className="text-center">
              <Button 
                variant="link" 
                className="text-sm"
                onClick={handleForgotPassword}
                type="button"
              >
                Forgot your password?
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="signup" className="space-y-4">
            <form onSubmit={handleSignup} className="space-y-4">
              <div>
                <Label htmlFor="signup-name" className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  Full Name
                </Label>
                <Input
                  id="signup-name"
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={(e) => handleInputChange('fullName', e.target.value)}
                  required
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="signup-email" className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  Email Address
                </Label>
                <Input
                  id="signup-email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  required
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="signup-phone" className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  Phone Number
                </Label>
                <Input
                  id="signup-phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  required
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="signup-password" className="flex items-center gap-2">
                  <Lock className="h-4 w-4" />
                  Password
                </Label>
                <div className="relative mt-1">
                  <Input
                    id="signup-password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Create a password"
                    value={formData.password}
                    onChange={(e) => handleInputChange('password', e.target.value)}
                    required
                    className="pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              <div>
                <Label htmlFor="signup-confirm" className="flex items-center gap-2">
                  <Lock className="h-4 w-4" />
                  Confirm Password
                </Label>
                <Input
                  id="signup-confirm"
                  type="password"
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                  required
                  className="mt-1"
                />
              </div>

              {error && (
                <div className="text-red-600 text-sm bg-red-50 p-2 rounded">
                  {error}
                </div>
              )}

              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600"
                disabled={isLoading}
              >
                {isLoading ? 'Creating Account...' : 'Create Account'}
              </Button>
            </form>
          </TabsContent>
        </Tabs>

        <div className="text-center text-xs text-gray-500 pt-4 border-t">
          <p>By continuing, you agree to our Terms of Service and Privacy Policy</p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AuthModal;
