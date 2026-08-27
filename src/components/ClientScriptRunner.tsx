'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * Re-runs the legacy theme initializer after Next replaces route content.
 * The theme scripts are loaded with afterInteractive, so the first effect can
 * otherwise run before custom.js has registered initTourvex.
 */
export default function ClientScriptRunner() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname.startsWith('/admin') || typeof window === 'undefined') return;

    let cancelled = false;
    let attempts = 0;
    let timer: ReturnType<typeof setTimeout> | undefined;

    const initialize = () => {
      if (cancelled) return;

      const win = window as any;
      if (typeof win.initTourvex !== 'function') {
        // Wait for the afterInteractive scripts instead of silently missing
        // initialization on a fast client-side navigation.
        if (attempts++ < 40) {
          timer = setTimeout(initialize, 50);
        }
        return;
      }

      // Let React finish committing the route before querying its elements.
      requestAnimationFrame(() => {
        if (cancelled) return;

        const navbarCollapse = document.getElementById('navbar');
        navbarCollapse?.classList.remove('show');

        win.initTourvex();

        const ScrollTrigger = win.ScrollTrigger;
        const ScrollSmoother = win.ScrollSmoother;

        if (ScrollSmoother?.get()) {
          ScrollSmoother.get().effects('[data-speed], [data-lag]', {});
        }

        // Images and fonts can change layout after the route is committed.
        // Refresh once now and once after those dimensions settle.
        ScrollTrigger?.refresh(true);
        ScrollTrigger?.update();
        timer = setTimeout(() => {
          ScrollTrigger?.refresh(true);
          ScrollTrigger?.update();
        }, 100);
      });
    };

    initialize();

    return () => {
      cancelled = true;
      if (timer) clearTimeout(timer);
    };
  }, [pathname]);

  return null;
}
