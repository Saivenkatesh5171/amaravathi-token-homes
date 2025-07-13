
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Menu, X, Home, TrendingUp, User, Wallet, Settings, LogOut, Shield } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import WalletConnectModal from './WalletConnectModal';
import ProfileModal from './ProfileModal';
import AuthModal from './AuthModal';
import LegalRightsModal from './LegalRightsModal';
import KYCModal from './KYCModal';
import KYCStatus from './KYCStatus';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [showWalletModal, setShowWalletModal] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [showLegalModal, setShowLegalModal] = useState(false);
  const [showKYCModal, setShowKYCModal] = useState(false);
  const [userProfile, setUserProfile] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+91 98765 43210',
    avatar: '',
    kycStatus: 'not_started' as 'not_started' | 'pending' | 'approved' | 'rejected'
  });

  useEffect(() => {
    // Check for existing authentication and KYC status
    const authToken = localStorage.getItem('authToken');
    const userData = localStorage.getItem('userData');
    const kycData = localStorage.getItem('kycData');
    
    if (authToken && userData) {
      const user = JSON.parse(userData);
      let kycStatus = 'not_started';
      
      if (kycData) {
        const kyc = JSON.parse(kycData);
        kycStatus = kyc.kycStatus || 'not_started';
      }
      
      setUserProfile(prev => ({ ...prev, ...user, kycStatus }));
      setIsSignedIn(true);
    }
  }, []);

  const handleSignIn = () => {
    setShowAuthModal(true);
  };

  const handleSignOut = () => {
    setIsSignedIn(false);
    localStorage.removeItem('authToken');
    localStorage.removeItem('userData');
    setUserProfile({
      name: 'John Doe',
      email: 'john.doe@example.com',
      phone: '+91 98765 43210',
      avatar: '',
      kycStatus: 'not_started'
    });
  };

  const handleConnectWallet = () => {
    setShowWalletModal(true);
  };

  const handleWalletConnected = () => {
    setIsSignedIn(true);
    setShowWalletModal(false);
  };

  const handleProfileUpdate = (updatedProfile: any) => {
    setUserProfile(updatedProfile);
    localStorage.setItem('userData', JSON.stringify(updatedProfile));
  };

  const handleProfileClick = () => {
    setShowProfileModal(true);
  };

  const handleKYCClick = () => {
    setShowKYCModal(true);
  };

  const handleKYCCompleted = (kycData: any) => {
    setUserProfile(prev => ({ ...prev, kycStatus: kycData.kycStatus }));
    const userData = { ...userProfile, kycStatus: kycData.kycStatus };
    localStorage.setItem('userData', JSON.stringify(userData));
  };

  const handleAuthenticated = (userData: any) => {
    setUserProfile(userData);
    setIsSignedIn(true);
    
    // Show KYC modal for new users or if KYC is not completed
    if (userData.kycStatus === 'not_started') {
      setTimeout(() => {
        setShowKYCModal(true);
      }, 1000);
    }
  };

  return (
    <>
      <nav className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Home className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Amaravati Tokens
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/properties" className="text-gray-700 hover:text-blue-600 transition-colors">
                Properties
              </Link>
              <Link to="/dashboard" className="text-gray-700 hover:text-blue-600 transition-colors">
                Dashboard
              </Link>
              <Link to="/marketplace" className="text-gray-700 hover:text-blue-600 transition-colors">
                Marketplace
              </Link>
              <Link to="/about" className="text-gray-700 hover:text-blue-600 transition-colors">
                About
              </Link>
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center space-x-4">
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => setShowLegalModal(true)}
                className="border-purple-600 text-purple-600 hover:bg-purple-50"
              >
                Legal Rights
              </Button>
              
              {!isSignedIn && (
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="border-blue-600 text-blue-600 hover:bg-blue-50"
                  onClick={handleConnectWallet}
                >
                  <Wallet className="h-4 w-4 mr-2" />
                  Connect Wallet
                </Button>
              )}
              
              {!isSignedIn ? (
                <Button 
                  size="sm" 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  onClick={handleSignIn}
                >
                  <User className="h-4 w-4 mr-2" />
                  Sign In
                </Button>
              ) : (
                <div className="flex items-center space-x-3">
                  <KYCStatus status={userProfile.kycStatus} />
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button 
                        variant="ghost"
                        className="flex items-center space-x-2 hover:bg-gray-100"
                      >
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={userProfile.avatar} alt="Profile" />
                          <AvatarFallback>
                            {userProfile.name.charAt(0).toUpperCase()}
                          </AvatarFallback>
                        </Avatar>
                        <span className="hidden lg:block">{userProfile.name}</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-48">
                      <DropdownMenuItem onClick={handleProfileClick}>
                        <User className="h-4 w-4 mr-2" />
                        My Profile
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={handleKYCClick}>
                        <Shield className="h-4 w-4 mr-2" />
                        KYC Verification
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <TrendingUp className="h-4 w-4 mr-2" />
                        My Investments
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Wallet className="h-4 w-4 mr-2" />
                        Wallet
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Settings className="h-4 w-4 mr-2" />
                        Settings
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem onClick={handleSignOut}>
                        <LogOut className="h-4 w-4 mr-2" />
                        Sign Out
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              )}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden border-t border-gray-200 py-4">
              <div className="flex flex-col space-y-3">
                <Link 
                  to="/properties" 
                  className="text-gray-700 hover:text-blue-600 transition-colors px-4 py-2"
                  onClick={() => setIsOpen(false)}
                >
                  Properties
                </Link>
                <Link 
                  to="/dashboard" 
                  className="text-gray-700 hover:text-blue-600 transition-colors px-4 py-2"
                  onClick={() => setIsOpen(false)}
                >
                  Dashboard
                </Link>
                <Link 
                  to="/marketplace" 
                  className="text-gray-700 hover:text-blue-600 transition-colors px-4 py-2"
                  onClick={() => setIsOpen(false)}
                >
                  Marketplace
                </Link>
                <Link 
                  to="/about" 
                  className="text-gray-700 hover:text-blue-600 transition-colors px-4 py-2"
                  onClick={() => setIsOpen(false)}
                >
                  About
                </Link>
                <div className="flex flex-col space-y-2 px-4 pt-4 border-t border-gray-200">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => setShowLegalModal(true)}
                    className="justify-start"
                  >
                    Legal Rights
                  </Button>
                  
                  {!isSignedIn ? (
                    <>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="border-blue-600 text-blue-600 hover:bg-blue-50"
                        onClick={handleConnectWallet}
                      >
                        <Wallet className="h-4 w-4 mr-2" />
                        Connect Wallet
                      </Button>
                      <Button 
                        size="sm" 
                        className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                        onClick={handleSignIn}
                      >
                        <User className="h-4 w-4 mr-2" />
                        Sign In
                      </Button>
                    </>
                  ) : (
                    <div className="flex flex-col space-y-2">
                      <div className="flex items-center space-x-2 px-2 py-2">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={userProfile.avatar} alt="Profile" />
                          <AvatarFallback>
                            {userProfile.name.charAt(0).toUpperCase()}
                          </AvatarFallback>
                        </Avatar>
                        <span className="font-medium">{userProfile.name}</span>
                      </div>
                      <Button variant="ghost" size="sm" className="justify-start" onClick={handleProfileClick}>
                        <User className="h-4 w-4 mr-2" />
                        My Profile
                      </Button>
                      <Button variant="ghost" size="sm" className="justify-start">
                        <TrendingUp className="h-4 w-4 mr-2" />
                        My Investments
                      </Button>
                      <Button variant="ghost" size="sm" className="justify-start">
                        <Wallet className="h-4 w-4 mr-2" />
                        Wallet
                      </Button>
                      <Button variant="ghost" size="sm" className="justify-start">
                        <Settings className="h-4 w-4 mr-2" />
                        Settings
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="justify-start text-red-600 hover:text-red-700"
                        onClick={handleSignOut}
                      >
                        <LogOut className="h-4 w-4 mr-2" />
                        Sign Out
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Modals */}
      <WalletConnectModal 
        isOpen={showWalletModal} 
        onClose={() => setShowWalletModal(false)}
        onConnected={handleWalletConnected}
      />

      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        onAuthenticated={handleAuthenticated}
      />

      <ProfileModal
        isOpen={showProfileModal}
        onClose={() => setShowProfileModal(false)}
        userProfile={userProfile}
        onUpdateProfile={handleProfileUpdate}
      />

      <LegalRightsModal
        isOpen={showLegalModal}
        onClose={() => setShowLegalModal(false)}
      />

      <KYCModal
        isOpen={showKYCModal}
        onClose={() => setShowKYCModal(false)}
        onKYCCompleted={handleKYCCompleted}
      />
    </>
  );
};

export default Navigation;
