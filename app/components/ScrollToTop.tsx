'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

interface ScrollToTopProps {
  children: React.ReactNode;
}

const ScrollToTop = ({ children }: ScrollToTopProps) => {
  const pathname = usePathname();

  useEffect(() => {
    if (!pathname.includes('#')) {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return <>{children}</>;
};

export default ScrollToTop;
