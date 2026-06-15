import React from 'react';

const Logo = ({ size = 40 }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="48" fill="white" stroke="#1B6B3A" strokeWidth="4"/>
    <g fill="#1B6B3A">
      {/* megaphone body */}
      <path d="M20 42 L38 38 L38 58 L20 54 Z"/>
      <rect x="32" y="42" width="6" height="12" rx="1"/>
      {/* bell */}
      <path d="M38 36 L62 24 L62 72 L38 60 Z"/>
      {/* handle */}
      <rect x="22" y="54" width="6" height="12" rx="3" fill="#1B6B3A"/>
      {/* sound waves */}
      <path d="M65 34 Q72 44 65 56" stroke="#1B6B3A" strokeWidth="3" strokeLinecap="round" fill="none"/>
      <path d="M69 30 Q79 44 69 60" stroke="#1B6B3A" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.6"/>
    </g>
  </svg>
);

export default Logo;
