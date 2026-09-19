import React from 'react';
import { Button } from '../../components/Button';
import { Badge } from '../../components/Badge';

export interface HeroCenteredProps {
  badgeText?: string;
  title: React.ReactNode;
  highlightText?: string;
  description: string;
  primaryCtaText?: string;
  onPrimaryCta?: () => void;
  primaryCtaHref?: string;
  secondaryCtaText?: string;
  onSecondaryCta?: () => void;
  secondaryCtaHref?: string;
  socialProof?: React.ReactNode;
  className?: string;
}

export const HeroCentered: React.FC<HeroCenteredProps> = ({
  badgeText,
  title,
  highlightText,
  description,
  primaryCtaText = 'Get Started',
  onPrimaryCta,
  primaryCtaHref,
  secondaryCtaText,
  onSecondaryCta,
  secondaryCtaHref,
  socialProof,
  className = '',
}) => {
  return (
    <section className={`relative pt-24 pb-16 sm:pt-32 sm:pb-24 overflow-hidden font-gds text-center ${className}`}>
      {/* Soft Ambient Glows */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#008000]/8 rounded-full blur-[140px] -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {badgeText && (
          <div className="inline-flex mb-6">
            <Badge variant="green" size="md" pulseDot dot>
              {badgeText}
            </Badge>
          </div>
        )}

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[var(--gds-color-text-primary)] leading-[1.12]">
          {title}{' '}
          {highlightText && (
            <span className="text-[#008000] relative inline-block">
              {highlightText}
            </span>
          )}
        </h1>

        <p className="mt-6 text-base sm:text-lg text-[var(--gds-color-text-secondary)] max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button
            variant="primary"
            size="lg"
            href={primaryCtaHref}
            onClick={onPrimaryCta}
            showArrow
            arrowType="up-right"
          >
            {primaryCtaText}
          </Button>

          {secondaryCtaText && (
            <Button
              variant="outline"
              size="lg"
              href={secondaryCtaHref}
              onClick={onSecondaryCta}
            >
              {secondaryCtaText}
            </Button>
          )}
        </div>

        {socialProof && <div className="mt-10">{socialProof}</div>}
      </div>
    </section>
  );
};

export interface HeroSplitProps {
  badgeText?: string;
  title: React.ReactNode;
  highlightText?: string;
  description: string;
  primaryCtaText?: string;
  onPrimaryCta?: () => void;
  primaryCtaHref?: string;
  secondaryCtaText?: string;
  onSecondaryCta?: () => void;
  secondaryCtaHref?: string;
  imageSrc?: string;
  imageAlt?: string;
  childrenRight?: React.ReactNode;
  className?: string;
}

export const HeroSplit: React.FC<HeroSplitProps> = ({
  badgeText,
  title,
  highlightText,
  description,
  primaryCtaText = 'Get Started',
  onPrimaryCta,
  primaryCtaHref,
  secondaryCtaText,
  onSecondaryCta,
  secondaryCtaHref,
  imageSrc,
  imageAlt = 'Hero visual',
  childrenRight,
  className = '',
}) => {
  return (
    <section className={`relative pt-24 pb-16 sm:pt-32 sm:pb-24 overflow-hidden font-gds ${className}`}>
      <div className="pointer-events-none absolute top-10 right-10 w-[450px] h-[450px] bg-[#008000]/6 rounded-full blur-[130px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {badgeText && (
              <Badge variant="green" size="md" pulseDot dot>
                {badgeText}
              </Badge>
            )}

            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-black tracking-tight text-[var(--gds-color-text-primary)] leading-[1.12]">
              {title}{' '}
              {highlightText && (
                <span className="text-[#008000] relative inline-block">
                  {highlightText}
                </span>
              )}
            </h1>

            <p className="text-base sm:text-lg text-[var(--gds-color-text-secondary)] max-w-xl leading-relaxed">
              {description}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button
                variant="primary"
                size="lg"
                href={primaryCtaHref}
                onClick={onPrimaryCta}
                showArrow
                arrowType="up-right"
              >
                {primaryCtaText}
              </Button>

              {secondaryCtaText && (
                <Button
                  variant="outline"
                  size="lg"
                  href={secondaryCtaHref}
                  onClick={onSecondaryCta}
                >
                  {secondaryCtaText}
                </Button>
              )}
            </div>
          </div>

          {/* Right Visual */}
          <div className="lg:col-span-5">
            {childrenRight ? (
              childrenRight
            ) : imageSrc ? (
              <div className="relative rounded-[var(--gds-radius-2xl)] overflow-hidden border border-[var(--gds-color-border)] shadow-xl group">
                <img
                  src={imageSrc}
                  alt={imageAlt}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
};
