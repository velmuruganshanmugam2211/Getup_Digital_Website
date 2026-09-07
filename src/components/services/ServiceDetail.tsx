import React from 'react';
import type { ServiceItem } from '../../types/service';
import { CheckCircle2 } from 'lucide-react';
import { Button } from '../common/Button';
import { cn } from '../../lib/utils';

interface ServiceDetailProps {
  service: ServiceItem;
  isReversed?: boolean;
}

export const ServiceDetail: React.FC<ServiceDetailProps> = ({ service, isReversed = false }) => {
  return (
    <div id={service.id} className="scroll-mt-32">
      <div className={cn(
        'grid grid-cols-1 lg:grid-cols-12 gap-12 items-center p-8 sm:p-12 rounded-3xl border border-[#E5E7E5] bg-[#F6F7F5]',
        isReversed && 'lg:flex-row-reverse'
      )}>
        {/* Left/Content Column */}
        <div className={cn('space-y-6', isReversed ? 'lg:col-span-6 lg:order-2' : 'lg:col-span-6 lg:order-1')}>
          <div className="flex items-center space-x-3">
            <span className="font-mono text-xl font-bold text-[#008000] bg-[#008000]/10 px-3 py-1 rounded-full">
              SERVICE {service.number}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111111] tracking-tight">
            {service.title}
          </h2>

          <p className="text-base text-[#6B7280] leading-relaxed">
            {service.fullDescription}
          </p>

          <div className="space-y-3 pt-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#111111]">Capabilities & Scope:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {service.capabilities.map((cap, i) => (
                <div key={i} className="flex items-center text-xs text-[#222222] font-medium bg-white p-2.5 rounded-lg border border-[#E5E7E5]">
                  <CheckCircle2 className="w-4 h-4 text-[#008000] mr-2 shrink-0" />
                  <span>{cap}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4">
            <Button href="/contact" variant="primary" size="md" showArrow>
              Get Started with {service.title}
            </Button>
          </div>
        </div>

        {/* Right/Visual Column */}
        <div className={cn('relative', isReversed ? 'lg:col-span-6 lg:order-1' : 'lg:col-span-6 lg:order-2')}>
          {service.image ? (
            <div className="rounded-2xl overflow-hidden border border-[#E5E7E5] shadow-xl bg-neutral-900 aspect-[4/3] group">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ) : (
            <div className="rounded-2xl bg-[#111111] p-8 text-white aspect-[4/3] flex flex-col justify-between border border-neutral-800">
              <div className="font-mono text-xs text-[#008000] uppercase">GETUP DIGITAL SERVICES</div>
              <div>
                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                <p className="text-xs text-neutral-400">{service.shortDescription}</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-[#008000] text-white flex items-center justify-center font-bold text-sm">
                {service.number}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
