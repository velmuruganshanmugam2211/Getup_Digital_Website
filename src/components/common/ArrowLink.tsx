import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '../../lib/utils';

interface ArrowLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
}

export const ArrowLink: React.FC<ArrowLinkProps> = ({ to, children, className }) => {
  return (
    <Link
      to={to}
      className={cn(
        'inline-flex items-center space-x-2 text-sm font-semibold text-[#111111] hover:text-[#008000] transition-colors duration-300 group cursor-pointer',
        className
      )}
    >
      <span className="link-underline">{children}</span>
      <ArrowUpRight className="w-4 h-4 text-[#008000] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </Link>
  );
};
