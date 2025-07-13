
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Clock, AlertTriangle, XCircle } from 'lucide-react';

interface KYCStatusProps {
  status: 'pending' | 'approved' | 'rejected' | 'not_started';
  className?: string;
}

const KYCStatus: React.FC<KYCStatusProps> = ({ status, className = '' }) => {
  const getStatusConfig = () => {
    switch (status) {
      case 'approved':
        return {
          icon: <CheckCircle className="h-3 w-3" />,
          label: 'KYC Verified',
          variant: 'default' as const,
          className: 'bg-green-100 text-green-800 border-green-200'
        };
      case 'pending':
        return {
          icon: <Clock className="h-3 w-3" />,
          label: 'KYC Pending',
          variant: 'secondary' as const,
          className: 'bg-yellow-100 text-yellow-800 border-yellow-200'
        };
      case 'rejected':
        return {
          icon: <XCircle className="h-3 w-3" />,
          label: 'KYC Rejected',
          variant: 'destructive' as const,
          className: 'bg-red-100 text-red-800 border-red-200'
        };
      case 'not_started':
        return {
          icon: <AlertTriangle className="h-3 w-3" />,
          label: 'KYC Required',
          variant: 'outline' as const,
          className: 'bg-gray-100 text-gray-800 border-gray-200'
        };
      default:
        return {
          icon: <AlertTriangle className="h-3 w-3" />,
          label: 'KYC Required',
          variant: 'outline' as const,
          className: 'bg-gray-100 text-gray-800 border-gray-200'
        };
    }
  };

  const config = getStatusConfig();

  return (
    <Badge 
      variant={config.variant}
      className={`${config.className} ${className} flex items-center gap-1`}
    >
      {config.icon}
      {config.label}
    </Badge>
  );
};

export default KYCStatus;
