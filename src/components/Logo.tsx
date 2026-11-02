import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'color';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showTagline?: boolean;
  layout?: 'horizontal' | 'vertical';
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  variant = 'color',
  size = 'md',
  showTagline = false,
  layout = 'horizontal',
}) => {
  const isLight = variant === 'light'; // Light text for dark backgrounds (footer, hero)

  const sizeConfigs = {
    sm: {
      icon: 'w-7 h-7',
      text: 'text-base',
      sub: 'text-[9px]',
      gap: 'gap-2',
    },
    md: {
      icon: 'w-10 h-10',
      text: 'text-xl',
      sub: 'text-[10px]',
      gap: 'gap-3',
    },
    lg: {
      icon: 'w-14 h-14',
      text: 'text-2xl',
      sub: 'text-xs',
      gap: 'gap-3.5',
    },
    xl: {
      icon: 'w-20 h-20',
      text: 'text-3xl',
      sub: 'text-sm',
      gap: 'gap-4',
    },
  }[size];

  // Exact Official Warehouse Building Emblem SVG
  const emblemSvg = (
    <div className={`relative ${sizeConfigs.icon} shrink-0 flex items-center justify-center`}>
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-sm select-none"
      >
        {/* Warehouse Building Body */}
        <path
          d="M50 14L84 40V92H16V40L50 14Z"
          fill={isLight ? '#0B2A49' : '#0B2A49'}
          stroke={isLight ? '#FFFFFF' : '#0B2A49'}
          strokeWidth={isLight ? '4' : '0'}
          strokeLinejoin="round"
        />

        {/* Orange Roof Chevron Arrow */}
        <path
          d="M32 38L50 22L68 38"
          stroke="#F08D25"
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* 3 Horizontal White Warehouse Shutter / Storage Slats */}
        <rect x="28" y="52" width="44" height="6.5" rx="3.25" fill="#FFFFFF" />
        <rect x="28" y="66" width="44" height="6.5" rx="3.25" fill="#FFFFFF" />
        <rect x="28" y="80" width="44" height="6.5" rx="3.25" fill="#FFFFFF" />
      </svg>
    </div>
  );

  if (layout === 'vertical') {
    return (
      <div className={`flex flex-col items-center text-center select-none ${sizeConfigs.gap} ${className}`}>
        {emblemSvg}
        <div className="flex flex-col items-center">
          <span
            className={`font-black tracking-tight ${sizeConfigs.text} ${
              isLight ? 'text-white' : 'text-[#0B2A49]'
            }`}
          >
            SHRESTH
          </span>
          <span
            className={`font-bold tracking-[0.2em] uppercase mt-0.5 ${sizeConfigs.sub} ${
              isLight ? 'text-blue-200' : 'text-[#0B2A49]/90'
            }`}
          >
            WAREHOUSE PVT. LTD.
          </span>

          {showTagline && (
            <>
              {/* Orange Divider Line */}
              <div className="w-10 h-1 bg-[#F08D25] rounded-full my-2" />
              <span
                className={`text-xs font-medium tracking-normal ${
                  isLight ? 'text-slate-300' : 'text-[#252B35]'
                }`}
              >
                Smart Warehousing. Seamless Logistics.
              </span>
            </>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className={`flex items-center select-none ${sizeConfigs.gap} ${className}`}>
      {emblemSvg}
      <div className="flex flex-col justify-center">
        <div className="flex items-baseline leading-none">
          <span
            className={`font-black tracking-tight ${sizeConfigs.text} ${
              isLight ? 'text-white' : 'text-[#0B2A49]'
            }`}
          >
            SHRESTH
          </span>
        </div>
        <span
          className={`font-bold tracking-[0.16em] uppercase mt-1 leading-none ${sizeConfigs.sub} ${
            isLight ? 'text-blue-200' : 'text-[#0B2A49]/80'
          }`}
        >
          WAREHOUSE PVT. LTD.
        </span>
        {showTagline && (
          <span
            className={`text-[10px] font-medium tracking-normal mt-1 ${
              isLight ? 'text-slate-300' : 'text-[#5A6578]'
            }`}
          >
            Smart Warehousing. Seamless Logistics.
          </span>
        )}
      </div>
    </div>
  );
};
