
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { X, Shield, FileText, Download, Scale, Gavel } from 'lucide-react';

interface LegalRightsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LegalRightsModal: React.FC<LegalRightsModalProps> = ({ isOpen, onClose }) => {
  const legalDocuments = [
    {
      title: "Investor Rights Agreement",
      description: "Comprehensive document outlining your rights as a token holder",
      type: "PDF",
      size: "2.5 MB",
      status: "Active"
    },
    {
      title: "Token Purchase Agreement",
      description: "Legal contract for token acquisition and ownership terms",
      type: "PDF", 
      size: "1.8 MB",
      status: "Required"
    },
    {
      title: "Property Ownership Certificate",
      description: "Official documentation of fractional property ownership",
      type: "PDF",
      size: "3.2 MB",
      status: "Available"
    },
    {
      title: "RERA Compliance Certificate",
      description: "Real Estate Regulatory Authority compliance documentation",
      type: "PDF",
      size: "1.5 MB",
      status: "Verified"
    },
    {
      title: "Smart Contract Audit Report",
      description: "Third-party security audit of the tokenization smart contract",
      type: "PDF",
      size: "950 KB",
      status: "Certified"
    }
  ];

  const investorRights = [
    {
      title: "Ownership Rights",
      description: "Fractional ownership of the underlying real estate asset proportional to token holdings."
    },
    {
      title: "Rental Income Distribution",
      description: "Right to receive monthly rental income distributions based on token ownership percentage."
    },
    {
      title: "Voting Rights",
      description: "Participate in major property decisions including renovations, management changes, and sale decisions."
    },
    {
      title: "Transfer Rights",
      description: "Right to freely transfer, sell, or trade tokens on approved secondary markets."
    },
    {
      title: "Information Rights",
      description: "Access to regular property performance reports, financial statements, and occupancy data."
    },
    {
      title: "Exit Rights",
      description: "Right to participate in property sale proceeds or participate in buyback programs."
    }
  ];

  const handleDownload = (docTitle: string) => {
    console.log(`Downloading: ${docTitle}`);
    // Simulate download
    alert(`Downloading ${docTitle}...`);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-center text-xl font-bold flex items-center justify-center gap-2">
            <Scale className="h-5 w-5 text-blue-600" />
            Legal Rights & Documentation
          </DialogTitle>
          <button
            onClick={onClose}
            className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100"
          >
            <X className="h-4 w-4" />
          </button>
        </DialogHeader>

        <div className="p-6 space-y-8">
          {/* Investor Rights Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Shield className="h-5 w-5 text-green-600" />
              Your Investor Rights
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {investorRights.map((right, index) => (
                <div key={index} className="border rounded-lg p-4 hover:bg-gray-50">
                  <h4 className="font-medium text-gray-900 mb-2">{right.title}</h4>
                  <p className="text-sm text-gray-600">{right.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Legal Documents Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <FileText className="h-5 w-5 text-blue-600" />
              Legal Documents
            </h3>
            <div className="space-y-3">
              {legalDocuments.map((doc, index) => (
                <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <h4 className="font-medium text-gray-900">{doc.title}</h4>
                      <Badge 
                        variant={doc.status === 'Required' ? 'destructive' : 
                               doc.status === 'Verified' || doc.status === 'Certified' ? 'default' : 'secondary'}
                      >
                        {doc.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600 mb-1">{doc.description}</p>
                    <p className="text-xs text-gray-500">{doc.type} • {doc.size}</p>
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => handleDownload(doc.title)}
                    className="ml-4"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                </div>
              ))}
            </div>
          </div>

          {/* Legal Compliance Section */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <Gavel className="h-5 w-5 text-green-600 mt-0.5" />
              <div>
                <h3 className="font-semibold text-green-900 mb-2">Regulatory Compliance</h3>
                <p className="text-sm text-green-800 mb-3">
                  All investments are fully compliant with Indian securities laws and RERA regulations. 
                  Our platform operates under proper legal framework to ensure investor protection.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="font-medium">RERA Approved:</span>
                    <p>Registration No: TN/04/Building/0294/2024</p>
                  </div>
                  <div>
                    <span className="font-medium">Securities Compliance:</span>
                    <p>Compliant with Indian Securities Laws</p>
                  </div>
                  <div>
                    <span className="font-medium">Legal Structure:</span>
                    <p>SPV-based Token Framework</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <h4 className="font-medium text-yellow-900 mb-2">Important Disclaimer</h4>
            <p className="text-sm text-yellow-800">
              Real estate investments involve market risks. Past performance does not guarantee future returns. 
              Please consult with financial and legal advisors before making investment decisions. 
              All token holders are subject to the terms and conditions outlined in the legal documents.
            </p>
          </div>

          {/* Action Button */}
          <div className="text-center pt-4">
            <Button onClick={onClose} className="bg-gradient-to-r from-blue-600 to-purple-600">
              I Acknowledge and Accept
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LegalRightsModal;
