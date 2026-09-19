import React from 'react';

export type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
export type AvatarStatus = 'online' | 'offline' | 'busy' | 'away';

export interface AvatarProps {
  src?: string;
  alt?: string;
  name?: string;
  size?: AvatarSize;
  status?: AvatarStatus;
  className?: string;
}

export const Avatar: React.FC<AvatarProps> = ({
  src,
  alt = 'Avatar',
  name,
  size = 'md',
  status,
  className = '',
}) => {
  const [imageError, setImageError] = React.useState(false);

  const getInitials = (text?: string) => {
    if (!text) return '?';
    const parts = text.trim().split(' ');
    if (parts.length >= 2) {
      return (parts[0][0] + parts[1][0]).toUpperCase();
    }
    return text.substring(0, 2).toUpperCase();
  };

  const sizeClasses = {
    xs: 'w-6 h-6 text-[10px]',
    sm: 'w-8 h-8 text-xs',
    md: 'w-10 h-10 text-sm',
    lg: 'w-12 h-12 text-base',
    xl: 'w-16 h-16 text-xl',
    '2xl': 'w-20 h-20 text-2xl',
  };

  const statusSizeClasses = {
    xs: 'w-1.5 h-1.5 bottom-0 right-0',
    sm: 'w-2 h-2 bottom-0 right-0',
    md: 'w-2.5 h-2.5 bottom-0.5 right-0.5',
    lg: 'w-3 h-3 bottom-0.5 right-0.5',
    xl: 'w-3.5 h-3.5 bottom-1 right-1',
    '2xl': 'w-4 h-4 bottom-1 right-1',
  };

  const statusColorClasses = {
    online: 'bg-[#008000] ring-white dark:ring-neutral-900',
    offline: 'bg-neutral-400 ring-white dark:ring-neutral-900',
    busy: 'bg-[#EF4444] ring-white dark:ring-neutral-900',
    away: 'bg-[#F59E0B] ring-white dark:ring-neutral-900',
  };

  // Generate deterministic pastel background for initials
  const getBackgroundColor = (str?: string) => {
    if (!str) return 'bg-[#008000] text-white';
    const charCode = str.charCodeAt(0) + (str.charCodeAt(1) || 0);
    const hues = [
      'bg-[#008000] text-white',
      'bg-[#111111] text-white',
      'bg-[#00A800] text-white',
      'bg-[#0284C7] text-white',
      'bg-[#8B5CF6] text-white',
    ];
    return hues[charCode % hues.length];
  };

  return (
    <div className={`relative inline-block font-gds select-none shrink-0 ${className}`}>
      <div
        className={`
          rounded-full overflow-hidden flex items-center justify-center font-bold tracking-wider
          border-2 border-white dark:border-neutral-900 shadow-xs
          ${sizeClasses[size]}
          ${!src || imageError ? getBackgroundColor(name) : 'bg-neutral-100'}
        `}
      >
        {src && !imageError ? (
          <img
            src={src}
            alt={alt}
            onError={() => setImageError(true)}
            className="w-full h-full object-cover"
          />
        ) : (
          <span>{getInitials(name || alt)}</span>
        )}
      </div>

      {status && (
        <span
          className={`
            absolute rounded-full ring-2
            ${statusSizeClasses[size]}
            ${statusColorClasses[status]}
          `}
        />
      )}
    </div>
  );
};

export interface AvatarGroupProps {
  children: React.ReactNode;
  max?: number;
  size?: AvatarSize;
  className?: string;
}

export const AvatarGroup: React.FC<AvatarGroupProps> = ({
  children,
  max = 4,
  size = 'md',
  className = '',
}) => {
  const childrenArray = React.Children.toArray(children);
  const visibleAvatars = childrenArray.slice(0, max);
  const excess = childrenArray.length - max;

  const sizeClasses = {
    xs: 'w-6 h-6 text-[10px]',
    sm: 'w-8 h-8 text-xs',
    md: 'w-10 h-10 text-sm',
    lg: 'w-12 h-12 text-base',
    xl: 'w-16 h-16 text-xl',
    '2xl': 'w-20 h-20 text-2xl',
  };

  return (
    <div className={`flex items-center -space-x-2 font-gds ${className}`}>
      {visibleAvatars}
      {excess > 0 && (
        <div
          className={`
            rounded-full flex items-center justify-center font-bold text-[var(--gds-color-text-primary)]
            bg-[var(--gds-color-background-secondary)] border-2 border-white dark:border-neutral-900 shadow-xs
            ${sizeClasses[size]}
          `}
        >
          +{excess}
        </div>
      )}
    </div>
  );
};
