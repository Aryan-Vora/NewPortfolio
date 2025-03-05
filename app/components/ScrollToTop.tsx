'use client';

import { useEffect, useRef } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

interface ScrollToTopProps {
  children: React.ReactNode;
}

const ScrollToTop = ({ children }: ScrollToTopProps) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isFirstRender = useRef(true);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (history.scrollRestoration) {
        history.scrollRestoration = 'manual';
      } else {
        window.onbeforeunload = function () {
          window.scrollTo(0, 0);
        };
      }
    }
  }, []);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'auto',
      });
    }, 0);
  }, [pathname, searchParams]);

  return <>{children}</>;
};

export default ScrollToTop;
