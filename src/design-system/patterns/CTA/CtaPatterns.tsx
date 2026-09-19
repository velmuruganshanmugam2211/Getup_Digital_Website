import React from 'react';
import { Button } from '../../components/Button';
import { Card } from '../../components/Card';
import { Badge } from '../../components/Badge';

export interface CtaBannerProps {
  badgeText?: string;
  title: string;
  description: string;
  primaryButtonText?: string;
  onPrimaryClick?: () => void;
  primaryHref?: string;
  secondaryButtonText?: string;
  onSecondaryClick?: () => void;
  secondaryHref?: string;
  className?: string;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({
  badgeText = 'READY TO SCALE?',
  title,
  description,
  primaryButtonText = 'Book Strategy Call',
  onPrimaryClick,
  primaryHref,
  secondaryButtonText,
  onSecondaryClick,
  secondaryHref,
  className = '',
}) => {
  return (
    <div
      className={`
        font-gds relative overflow-hidden rounded-[var(--gds-radius-2xl)]
        bg-[#111111] text-white p-8 sm:p-12 lg:p-16 border border-neutral-800
        shadow-2xl ${className}
      `}
    >
      {/* Background Brand Glow */}
      <div className="pointer-events-none absolute -bottom-20 -right-20 w-[400px] h-[400px] bg-[#008000]/25 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-3xl">
        {badgeText && (
          <div className="mb-4">
            <Badge variant="green" size="sm" pulseDot dot>
              {badgeText}
            </Badge>
          </div>
        )}

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4">
          {title}
        </h2>

        <p className="text-base sm:text-lg text-neutral-300 max-w-2xl leading-relaxed mb-8">
          {description}
        </p>

        <div className="flex flex-wrap items-center gap-4">
          <Button
            variant="primary"
            size="lg"
            href={primaryHref}
            onClick={onPrimaryClick}
            showArrow
            arrowType="up-right"
          >
            {primaryButtonText}
          </Button>

          {secondaryButtonText && (
            <Button
              variant="outline"
              size="lg"
              href={secondaryHref}
              onClick={onSecondaryClick}
              className="!border-neutral-700 !text-white hover:!border-white hover:!bg-white/10"
            >
              {secondaryButtonText}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export interface CtaCardProps {
  title: string;
  description: string;
  buttonText: string;
  onButtonClick?: () => void;
  buttonHref?: string;
  className?: string;
}

export const CtaCard: React.FC<CtaCardProps> = ({
  title,
  description,
  buttonText,
  onButtonClick,
  buttonHref,
  className = '',
}) => {
  return (
    <Card
      padding="lg"
      radius="2xl"
      variant="default"
      className={`font-gds flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-[#008000]/30 bg-gradient-to-r from-white to-[#F0FDF4] dark:from-neutral-900 dark:to-neutral-950 ${className}`}
    >
      <div className="max-w-xl">
        <h3 className="text-xl font-bold text-[var(--gds-color-text-primary)] mb-1">
          {title}
        </h3>
        <p className="text-xs sm:text-sm text-[var(--gds-color-text-secondary)]">
          {description}
        </p>
      </div>

      <Button
        variant="primary"
        size="md"
        href={buttonHref}
        onClick={onButtonClick}
        showArrow
        arrowType="up-right"
        className="shrink-0"
      >
        {buttonText}
      </Button>
    </Card>
  );
};
