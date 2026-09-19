import React from 'react';
import { Check } from 'lucide-react';
import { Card } from './Card';
import { Button } from '../Button';
import { Badge } from '../Badge';

export interface PricingCardProps {
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  ctaText?: string;
  onCtaClick?: () => void;
  className?: string;
}

export const PricingCard: React.FC<PricingCardProps> = ({
  name,
  price,
  period = '/month',
  description,
  features,
  isPopular = false,
  ctaText = 'Get Started',
  onCtaClick,
  className = '',
}) => {
  return (
    <Card
      padding="xl"
      radius="2xl"
      variant={isPopular ? 'elevated' : 'default'}
      className={`relative flex flex-col justify-between ${
        isPopular ? 'border-2 border-[#008000] shadow-xl' : ''
      } ${className}`}
    >
      {isPopular && (
        <div className="absolute top-0 right-8 -translate-y-1/2">
          <Badge variant="green" size="sm" pill={false} className="shadow-xs font-bold uppercase tracking-wider">
            Most Popular
          </Badge>
        </div>
      )}

      <div>
        <h3 className="text-xl font-bold text-[var(--gds-color-text-primary)] mb-2">{name}</h3>
        <p className="text-xs text-[var(--gds-color-text-muted)] min-h-[36px]">{description}</p>

        <div className="mt-6 mb-6 flex items-baseline">
          <span className="text-4xl font-extrabold text-[var(--gds-color-text-primary)]">{price}</span>
          <span className="text-xs text-[var(--gds-color-text-muted)] ml-1 font-medium">{period}</span>
        </div>

        <div className="space-y-3 pt-6 border-t border-[var(--gds-color-border-subtle)]">
          <div className="text-xs font-bold uppercase tracking-wider text-[var(--gds-color-text-primary)]">
            Included Capabilities:
          </div>
          {features.map((feature, i) => (
            <div key={i} className="flex items-center text-xs text-[var(--gds-color-text-secondary)]">
              <Check className="w-4 h-4 text-[#008000] mr-2 shrink-0" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 pt-4">
        <Button
          variant={isPopular ? 'primary' : 'outline'}
          fullWidth
          size="md"
          onClick={onCtaClick}
        >
          {ctaText}
        </Button>
      </div>
    </Card>
  );
};

export interface ProjectCardProps {
  title: string;
  category: string;
  image: string;
  results?: string;
  metrics?: { label: string; value: string }[];
  href?: string;
  className?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  category,
  image,
  results,
  metrics,
  href,
  className = '',
}) => {
  return (
    <Card isInteractive padding="none" radius="2xl" className={`group ${className}`}>
      <div className="relative aspect-video w-full overflow-hidden bg-neutral-100 dark:bg-neutral-800">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4">
          <Badge variant="dark" size="sm">{category}</Badge>
        </div>
      </div>

      <div className="p-6 sm:p-7">
        <h3 className="text-xl font-bold text-[var(--gds-color-text-primary)] group-hover:text-[#008000] transition-colors mb-2">
          {title}
        </h3>
        {results && (
          <p className="text-sm text-[var(--gds-color-text-secondary)] mb-4">{results}</p>
        )}

        {metrics && metrics.length > 0 && (
          <div className="grid grid-cols-2 gap-3 pt-4 border-t border-[var(--gds-color-border-subtle)]">
            {metrics.map((metric, i) => (
              <div key={i}>
                <div className="text-lg font-extrabold text-[#008000]">{metric.value}</div>
                <div className="text-[11px] text-[var(--gds-color-text-muted)] uppercase tracking-wider">{metric.label}</div>
              </div>
            ))}
          </div>
        )}

        {href && (
          <div className="mt-5 flex items-center text-xs font-semibold text-[#008000] group-hover:translate-x-1 transition-transform">
            <span>View Case Study</span>
            <span className="ml-1">→</span>
          </div>
        )}
      </div>
    </Card>
  );
};
