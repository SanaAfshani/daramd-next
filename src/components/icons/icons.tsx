import React from 'react';

type Props = React.SVGProps<SVGSVGElement> & { size?: number };

const defaultColor = '#fb923c';

export const IconMenu = ({ size = 22, ...props }: Props) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    stroke={'currentColor'}
    strokeWidth="2"
    {...props}
  >
    <path d="M3 6h18M3 12h14M3 18h10" strokeLinecap="round" />
  </svg>
);

export const IconBell = ({ size = 22, ...props }: Props) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    stroke={'currentColor'}
    strokeWidth="2"
    {...props}
  >
    <path
      d="M15 17H9l-1 1H5l1.2-2.4A7 7 0 0 1 6 12V9a6 6 0 1 1 12 0v3a7 7 0 0 1-.2 1.6L19 18h-3l-1-1z"
      strokeLinejoin="round"
    />
    <path d="M9 21a3 3 0 0 0 6 0" />
  </svg>
);

export const IconSwap = ({ size = 24, ...props }: Props) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    stroke={defaultColor}
    strokeWidth="2"
    {...props}
  >
    <path d="M7 10h10M7 10l2-2m-2 2l2 2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M17 14H7m10 0l-2-2m2 2l-2 2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const IconBag = ({ size = 24, ...props }: Props) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    stroke={defaultColor}
    strokeWidth="2"
    {...props}
  >
    <path d="M6 8h12l-1 12H7L6 8z" />
    <path d="M9 8a3 3 0 0 1 6 0" />
  </svg>
);

export const IconCart = ({ size = 24, ...props }: Props) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    stroke={defaultColor}
    strokeWidth="2"
    {...props}
  >
    <path d="M3 5h3l2 12h10l2-8H7" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="9" cy="20" r="1.5" />
    <circle cx="17" cy="20" r="1.5" />
  </svg>
);

export const IconDoc = ({ size = 24, ...props }: Props) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    stroke={defaultColor}
    strokeWidth="2"
    {...props}
  >
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12V8z" />
    <path d="M14 2v6h6" />
    <path d="M8 13h8M8 17h8M8 9h4" />
  </svg>
);

export const IconHome = ({ size = 24, ...props }: Props) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    stroke={'currentColor'}
    strokeWidth="2"
    {...props}
  >
    <path d="M3 10l9-7 9 7v9a2 2 0 0 1-2 2h-4v-7H9v7H5a2 2 0 0 1-2-2z" strokeLinejoin="round" />
  </svg>
);

export const IconFunds = ({ size = 24, ...props }: Props) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    stroke={'currentColor'}
    strokeWidth="2"
    {...props}
  >
    <rect x="3" y="10" width="4" height="10" rx="1" />
    <rect x="10" y="6" width="4" height="14" rx="1" />
    <rect x="17" y="3" width="4" height="17" rx="1" />
  </svg>
);

export const IconUser = ({ size = 24, ...props }: Props) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    stroke={'currentColor'}
    strokeWidth="2"
    {...props}
  >
    <circle cx="12" cy="8" r="4" />
    <path d="M4 21a8 8 0 0 1 16 0" />
  </svg>
);

export const IconPlay = ({ size = 32, ...props }: Props) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill={'currentColor'} {...props}>
    <path d="M8 5v14l11-7z" />
  </svg>
);

export const RefreshIcon = () => {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M21 12a9 9 0 1 1-3-6.7" />
      <path d="M21 3v6h-6" />
    </svg>
  );
};

export const EyeOffIcon = () => {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M3 3l18 18" strokeLinecap="round" />
      <path d="M10.6 10.6A3 3 0 0 0 12 15a3 3 0 0 0 3-3c0-.4-.1-.9-.2-1.2" />
      <path d="M9.9 5.1A10.6 10.6 0 0 1 12 5c5.5 0 9.5 4.8 10 6 -.3.6-1.2 2-2.8 3.3M6 6a12.2 12.2 0 0 0-4 5c.2.4 1.6 3 4.8 4.8 3.2 1.8 6.2 1.7 8.6 1" />
    </svg>
  );
};
export const EyeIcon = () => {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
};
