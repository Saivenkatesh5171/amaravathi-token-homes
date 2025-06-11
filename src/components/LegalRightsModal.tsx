
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { X, Shield, FileText, Scale, AlertTriangle } from 'lucide-react';

interface LegalRightsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LegalRightsModal: React.FC<LegalRightsModalProps> = ({ isOpen, onClose }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-center text-xl font-bold flex items-center justify-center gap-2">
            <Scale className="h-5 w-5" />
            Legal Rights & Information
          </DialogTitle>
          <button
            onClick={onClose}
            className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100"
          >
            <X className="h-4 w-4" />
          </button>
        </DialogHeader>

        <div className="p-6 space-y-6">
          {/* Important Notice */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <div className="flex items-center gap-2 text-yellow-800 mb-2">
              <AlertTriangle className="h-5 w-5" />
              <span className="font-semibold">Important Legal Notice</span>
            </div>
            <p className="text-yellow-700 text-sm">
              Please read these legal rights and terms carefully before investing in tokenized real estate properties.
            </p>
          </div>

          {/* Investor Rights */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <Shield className="h-5 w-5" />
              Your Rights as an Investor
            </h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Right to receive proportional rental income based on token ownership</li>
              <li>• Right to vote on major property decisions (if holding minimum threshold)</li>
              <li>• Right to sell tokens on the secondary marketplace</li>
              <li>• Right to access property performance reports and financial statements</li>
              <li>• Right to receive proceeds from property sale (proportional to ownership)</li>
              <li>• Right to inspect property documentation and legal compliance</li>
            </ul>
          </div>

          {/* Legal Framework */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Legal Framework
            </h3>
            <div className="space-y-3 text-sm text-gray-700">
              <div>
                <strong>Regulatory Compliance:</strong> All properties are compliant with Indian real estate regulations (RERA) and blockchain token guidelines.
              </div>
              <div>
                <strong>Token Structure:</strong> Each token represents a fractional ownership interest in the underlying real estate asset.
              </div>
              <div>
                <strong>Legal Entity:</strong> Properties are held in Special Purpose Vehicles (SPVs) to ensure legal clarity and investor protection.
              </div>
            </div>
          </div>

          {/* Risk Disclosures */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Risk Disclosures</h3>
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <ul className="space-y-2 text-sm text-red-700">
                <li>• Real estate investments carry market risk and values may fluctuate</li>
                <li>• Rental income is not guaranteed and may vary based on market conditions</li>
                <li>• Liquidity may be limited in the secondary token marketplace</li>
                <li>• Regulatory changes may affect token value and transferability</li>
                <li>• Property maintenance and management costs may impact returns</li>
              </ul>
            </div>
          </div>

          {/* Terms & Conditions */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Key Terms & Conditions</h3>
            <div className="space-y-2 text-sm text-gray-700">
              <div><strong>Minimum Investment:</strong> ₹10,000</div>
              <div><strong>Lock-in Period:</strong> 12 months from purchase date</div>
              <div><strong>Management Fee:</strong> 2% annually on property value</div>
              <div><strong>Exit Fee:</strong> 1% on token sale value (after lock-in period)</div>
              <div><strong>Distribution Frequency:</strong> Quarterly rental income distribution</div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-blue-50 rounded-lg p-4">
            <h4 className="font-semibold text-blue-900 mb-2">Legal Support</h4>
            <div className="text-sm text-blue-800">
              <p>For legal queries: legal@amaravati-tokens.com</p>
              <p>Compliance Officer: +91 40 2345 6789</p>
              <p>Grievance Redressal: grievance@amaravati-tokens.com</p>
            </div>
          </div>

          {/* Action Button */}
          <div className="text-center pt-4">
            <Button onClick={onClose} className="px-8">
              I Understand
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LegalRightsModal;
