
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Award, 
  Download, 
  Share2, 
  MapPin, 
  Calendar, 
  Hash,
  Shield,
  Coins,
  TrendingUp
} from 'lucide-react';

interface NFTCertificateProps {
  investmentData: {
    propertyName: string;
    tokens: number;
    purchaseDate: string;
    purchasePrice: string;
    currentValue: string;
    sharePercentage: string;
    certificateId: string;
    location: string;
    roi: string;
  };
}

const NFTCertificate: React.FC<NFTCertificateProps> = ({ investmentData }) => {
  const handleDownload = () => {
    console.log('Downloading NFT certificate...');
  };

  const handleShare = () => {
    console.log('Sharing NFT certificate...');
  };

  return (
    <Card className="max-w-2xl mx-auto bg-gradient-to-br from-blue-50 via-white to-purple-50 border-2 border-blue-200">
      <CardHeader className="text-center pb-4">
        <div className="flex justify-center mb-4">
          <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
            <Award className="h-10 w-10 text-white" />
          </div>
        </div>
        <CardTitle className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Amaravati Investment Certificate
        </CardTitle>
        <p className="text-gray-600">Digital NFT Proof of Ownership</p>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Property Details */}
        <div className="bg-white/80 rounded-lg p-4 border">
          <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
            <MapPin className="h-5 w-5 text-blue-600" />
            {investmentData.propertyName}
          </h3>
          <p className="text-gray-600 text-sm mb-3">{investmentData.location}</p>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-600">Tokens Owned</p>
              <p className="text-xl font-bold text-blue-600">{investmentData.tokens}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Ownership Share</p>
              <p className="text-xl font-bold text-purple-600">{investmentData.sharePercentage}</p>
            </div>
          </div>
        </div>

        {/* Investment Metrics */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-green-50 rounded-lg p-4 border border-green-200">
            <div className="flex items-center gap-2 mb-2">
              <Coins className="h-4 w-4 text-green-600" />
              <span className="font-medium text-green-800">Purchase Value</span>
            </div>
            <p className="text-lg font-bold text-green-700">{investmentData.purchasePrice}</p>
            <p className="text-xs text-green-600">{investmentData.purchaseDate}</p>
          </div>

          <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="h-4 w-4 text-blue-600" />
              <span className="font-medium text-blue-800">Current Value</span>
            </div>
            <p className="text-lg font-bold text-blue-700">{investmentData.currentValue}</p>
            <Badge className="bg-green-100 text-green-800 text-xs">
              {investmentData.roi} ROI
            </Badge>
          </div>
        </div>

        {/* Certificate Metadata */}
        <div className="bg-gray-50 rounded-lg p-4 border">
          <h4 className="font-medium mb-3 flex items-center gap-2">
            <Hash className="h-4 w-4" />
            Certificate Metadata
          </h4>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Certificate ID:</span>
              <span className="font-mono">{investmentData.certificateId}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Blockchain:</span>
              <span className="font-medium">Polygon Network</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Token Standard:</span>
              <span className="font-medium">ERC-721 (NFT)</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Issue Date:</span>
              <span className="font-medium">{investmentData.purchaseDate}</span>
            </div>
          </div>
        </div>

        {/* Verification Badge */}
        <div className="text-center py-4 border-t">
          <div className="flex items-center justify-center gap-2 text-green-600 mb-2">
            <Shield className="h-5 w-5" />
            <span className="font-medium">Verified & Authenticated</span>
          </div>
          <p className="text-xs text-gray-500">
            This certificate is cryptographically secured and verified on the blockchain
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 pt-4">
          <Button 
            onClick={handleDownload}
            className="flex-1"
            variant="outline"
          >
            <Download className="h-4 w-4 mr-2" />
            Download Certificate
          </Button>
          <Button 
            onClick={handleShare}
            className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
          >
            <Share2 className="h-4 w-4 mr-2" />
            Share Certificate
          </Button>
        </div>

        {/* Legal Footer */}
        <div className="text-center text-xs text-gray-500 pt-4 border-t">
          <p>This digital certificate represents fractional ownership in the specified real estate asset.</p>
          <p>Subject to applicable laws and regulations. SEBI & RERA compliant.</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default NFTCertificate;
