import { ExternalLink } from 'lucide-react';

export const AdminPageHeader = ({ title, siteUrl = '/' }) => (
  <div className="flex items-center justify-between px-6 py-4 border-b border-black">
    <span className="text-base font-medium">{title}</span>
    <a href={siteUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs border border-black rounded-md px-3 py-1.5 hover:bg-black hover:text-white transition-colors">
      Ver site
      <ExternalLink size={13} />
    </a>
  </div>
);