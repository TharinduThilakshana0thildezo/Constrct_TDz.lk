import React from 'react';

const SkipLink = ({ targetId = 'app-content' }) => (
  <a
    href={`#${targetId}`}
    className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:top-4 focus:left-4 focus:rounded-full focus:bg-black focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-primary-gold"
  >
    Skip to main content
  </a>
);

export default SkipLink;
