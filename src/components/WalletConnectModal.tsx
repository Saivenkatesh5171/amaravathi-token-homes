
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { X, Wallet, Mail, Chrome, Facebook, Twitter, MessageCircle, Apple, Instagram } from 'lucide-react';

interface WalletConnectModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConnected?: () => void;
}

const WalletConnectModal: React.FC<WalletConnectModalProps> = ({ isOpen, onClose, onConnected }) => {
  const [isConnecting, setIsConnecting] = useState<string | null>(null);

  const handleWalletConnect = async (walletType: string) => {
    setIsConnecting(walletType);
    console.log(`Connecting to ${walletType}...`);
    
    try {
      if (walletType === 'MetaMask') {
        // Check if MetaMask is installed
        if (typeof window.ethereum !== 'undefined') {
          await window.ethereum.request({ method: 'eth_requestAccounts' });
          console.log('MetaMask connected successfully');
        } else {
          window.open('https://metamask.io/download/', '_blank');
          throw new Error('MetaMask not installed');
        }
      } else {
        // Simulate connection for other wallets
        await new Promise(resolve => setTimeout(resolve, 2000));
        console.log(`Connected to ${walletType} successfully`);
      }
      
      onConnected?.();
      onClose();
    } catch (error) {
      console.error(`Failed to connect to ${walletType}:`, error);
    } finally {
      setIsConnecting(null);
    }
  };

  const handleSocialLogin = async (provider: string) => {
    setIsConnecting(provider);
    console.log(`Logging in with ${provider}...`);
    
    try {
      // Real social media authentication URLs
      const authUrls = {
        'Gmail': 'https://accounts.google.com/oauth/authorize?client_id=YOUR_GOOGLE_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URI&scope=email%20profile&response_type=code',
        'Facebook': 'https://www.facebook.com/v18.0/dialog/oauth?client_id=YOUR_FACEBOOK_APP_ID&redirect_uri=YOUR_REDIRECT_URI&scope=email',
        'Twitter': 'https://twitter.com/i/oauth2/authorize?response_type=code&client_id=YOUR_TWITTER_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URI&scope=tweet.read%20users.read',
        'Discord': 'https://discord.com/api/oauth2/authorize?client_id=YOUR_DISCORD_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URI&response_type=code&scope=identify%20email',
        'Apple ID': 'https://appleid.apple.com/auth/authorize?client_id=YOUR_APPLE_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URI&response_type=code',
        'Instagram': 'https://api.instagram.com/oauth/authorize?client_id=YOUR_INSTAGRAM_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URI&scope=user_profile&response_type=code'
      };

      // For demo purposes, simulate the authentication
      // In a real app, you would redirect to the actual OAuth URL
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Simulate successful authentication
      const userData = {
        provider,
        name: `User from ${provider}`,
        email: `user@${provider.toLowerCase()}.com`,
        avatar: ''
      };
      
      console.log(`Logged in with ${provider} successfully`, userData);
      onConnected?.();
      onClose();
    } catch (error) {
      console.error(`Failed to login with ${provider}:`, error);
    } finally {
      setIsConnecting(null);
    }
  };

  const walletOptions = [
    {
      name: 'MetaMask',
      icon: Wallet,
      description: 'Connect using MetaMask wallet',
      color: 'bg-orange-500 hover:bg-orange-600'
    },
    {
      name: 'WalletConnect',
      icon: Wallet,
      description: 'Scan with WalletConnect',
      color: 'bg-blue-500 hover:bg-blue-600'
    },
    {
      name: 'Coinbase Wallet',
      icon: Wallet,
      description: 'Connect using Coinbase Wallet',
      color: 'bg-blue-600 hover:bg-blue-700'
    }
  ];

  const socialOptions = [
    {
      name: 'Gmail',
      icon: Mail,
      description: 'Continue with Google',
      color: 'bg-red-500 hover:bg-red-600'
    },
    {
      name: 'Facebook',
      icon: Facebook,
      description: 'Continue with Facebook',
      color: 'bg-blue-600 hover:bg-blue-700'
    },
    {
      name: 'Twitter',
      icon: Twitter,
      description: 'Continue with X (Twitter)',
      color: 'bg-black hover:bg-gray-800'
    },
    {
      name: 'Discord',
      icon: MessageCircle,
      description: 'Continue with Discord',
      color: 'bg-indigo-500 hover:bg-indigo-600'
    },
    {
      name: 'Apple ID',
      icon: Apple,
      description: 'Continue with Apple',
      color: 'bg-gray-900 hover:bg-black'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      description: 'Continue with Instagram',
      color: 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600'
    }
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-xl font-bold">
            Connect Your Wallet
          </DialogTitle>
          <button
            onClick={onClose}
            className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100"
          >
            <X className="h-4 w-4" />
          </button>
        </DialogHeader>

        <div className="space-y-6 p-6">
          {/* Web3 Wallets Section */}
          <div>
            <h3 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">
              Web3 Wallets
            </h3>
            <div className="space-y-2">
              {walletOptions.map((wallet) => {
                const IconComponent = wallet.icon;
                const isLoading = isConnecting === wallet.name;
                
                return (
                  <Button
                    key={wallet.name}
                    variant="outline"
                    className={`w-full justify-start h-12 transition-all duration-200 hover:scale-[1.02] ${
                      isLoading ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                    onClick={() => !isLoading && handleWalletConnect(wallet.name)}
                    disabled={isLoading}
                  >
                    <div className={`w-8 h-8 rounded-lg ${wallet.color} flex items-center justify-center mr-3`}>
                      <IconComponent className="h-4 w-4 text-white" />
                    </div>
                    <div className="text-left">
                      <div className="font-medium">{wallet.name}</div>
                      <div className="text-xs text-gray-500">{wallet.description}</div>
                    </div>
                    {isLoading && (
                      <div className="ml-auto">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-gray-900"></div>
                      </div>
                    )}
                  </Button>
                );
              })}
            </div>
          </div>

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-2 text-gray-500">Or continue with</span>
            </div>
          </div>

          {/* Social Login Section */}
          <div>
            <h3 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">
              Social Accounts
            </h3>
            <div className="space-y-2">
              {socialOptions.map((social) => {
                const IconComponent = social.icon;
                const isLoading = isConnecting === social.name;
                
                return (
                  <Button
                    key={social.name}
                    variant="outline"
                    className={`w-full justify-start h-12 transition-all duration-200 hover:scale-[1.02] ${
                      isLoading ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                    onClick={() => !isLoading && handleSocialLogin(social.name)}
                    disabled={isLoading}
                  >
                    <div className={`w-8 h-8 rounded-lg ${social.color} flex items-center justify-center mr-3`}>
                      <IconComponent className="h-4 w-4 text-white" />
                    </div>
                    <div className="text-left">
                      <div className="font-medium">{social.name}</div>
                      <div className="text-xs text-gray-500">{social.description}</div>
                    </div>
                    {isLoading && (
                      <div className="ml-auto">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-gray-900"></div>
                      </div>
                    )}
                  </Button>
                );
              })}
            </div>
          </div>

          {/* Footer */}
          <div className="text-center text-xs text-gray-500 pt-4 border-t">
            <p>By connecting, you agree to our Terms of Service and Privacy Policy</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WalletConnectModal;
