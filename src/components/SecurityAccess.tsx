
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Shield, Eye, EyeOff } from 'lucide-react';

interface SecurityAccessProps {
  onAccessGranted: () => void;
}

const SecurityAccess: React.FC<SecurityAccessProps> = ({ onAccessGranted }) => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  // Set a default password - in production, this should be configurable
  const SITE_PASSWORD = 'amaravati2024';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Simulate authentication check
    await new Promise(resolve => setTimeout(resolve, 1000));

    if (password === SITE_PASSWORD) {
      localStorage.setItem('siteAccess', 'granted');
      onAccessGranted();
    } else {
      setError('Incorrect password. Please try again.');
    }
    
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center p-4">
      {/* Background Image */}
      <div 
        className="absolute inset-0 opacity-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/lovable-uploads/a1f1537d-1f96-4f39-bc37-29f7b6687cc5.png')`
        }}
      />
      
      <Card className="w-full max-w-md relative z-10 shadow-2xl">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
              <Shield className="h-8 w-8 text-white" />
            </div>
          </div>
          <CardTitle className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Secure Access Required
          </CardTitle>
          <p className="text-gray-600 mt-2">
            Please enter the password to access Amaravati Tokens
          </p>
        </CardHeader>
        
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="password" className="flex items-center gap-2">
                <Shield className="h-4 w-4" />
                Access Password
              </Label>
              <div className="relative mt-1">
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter site password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
              disabled={isLoading || !password}
            >
              {isLoading ? 'Verifying...' : 'Access Site'}
            </Button>
          </form>

          <div className="mt-6 text-center text-xs text-gray-500">
            <p>For demo purposes, password is: <span className="font-mono bg-gray-100 px-1 rounded">amaravati2024</span></p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SecurityAccess;
