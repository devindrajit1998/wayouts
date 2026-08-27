'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ClientScriptRunner() {
  const pathname = usePathname();

  useEffect(() => {
    // -------------------------------------------------------
    // 1. Close mobile navbar on route change
    // -------------------------------------------------------
    const navbarCollapse = document.getElementById('navbar');
    if (navbarCollapse && navbarCollapse.classList.contains('show')) {
      navbarCollapse.classList.remove('show');
    }

    // -------------------------------------------------------
    // 2. Dynamic background image setting
    // -------------------------------------------------------
    const bgElements = document.querySelectorAll('[data-background]');
    bgElements.forEach((el) => {
      const bg = el.getAttribute('data-background');
      if (bg) {
        (el as HTMLElement).style.backgroundImage = `url(${bg})`;
      }
    });

    // -------------------------------------------------------
    // 3. Ensure header container and text elements are visible
    //    after route transition (clear stale inline styles)
    // -------------------------------------------------------
    if (typeof window !== 'undefined') {
      const gsap = (window as any).gsap;

      if (gsap) {
        gsap.killTweensOf('header.full-height, header.full-height *');
        gsap.set(
          'header .container, header .cont, .full-height .cont, header h6, header h2, header p, header .butn-arrow2',
          { clearProps: 'opacity,visibility,transform,translate,scale,rotate' }
        );
      }

      // Ensure header elements are visible even if gsap hasn't loaded yet
      const headerContainer = document.querySelectorAll('header, header .container, header .cont, .full-height .cont');
      headerContainer.forEach((el) => {
        (el as HTMLElement).style.opacity = '1';
        (el as HTMLElement).style.transform = 'none';
        (el as HTMLElement).style.visibility = 'visible';
      });
    }

    // -------------------------------------------------------
    // 4. Run the Tourvex global initializer.
    //    This now handles ALL re-initialization:
    //    - Swiper destroy + recreate
    //    - ScrollTrigger cleanup + refresh
    //    - ScrollSmoother refresh
    //    - WOW, counters, marquee, popups, isotope
    //
    //    We NO LONGER do separate ScrollTrigger.refresh() or
    //    ScrollSmoother.get().effects() here — that was causing
    //    double-refresh and ordering bugs. initTourvex handles
    //    everything with the correct sequence + RAF timing.
    // -------------------------------------------------------
    if (typeof window !== 'undefined' && (window as any).initTourvex) {
      // Defer to next macrotask so React has fully committed the
      // new route's DOM to the document before we scan for elements.
      const timer = setTimeout(() => {
        (window as any).initTourvex();

        // Secondary refresh after ScrollSmoother has fully settled.
        // initTourvex uses double-RAF (~32ms) but ScrollSmoother's
        // internal height recalculation can take longer on complex pages.
        // This catches any triggers that were created with stale positions.
        const secondaryRefresh = setTimeout(() => {
          if (typeof window !== 'undefined') {
            const ScrollTrigger = (window as any).ScrollTrigger;
            if (ScrollTrigger) {
              ScrollTrigger.refresh();
            }
          }
        }, 300);

        return () => clearTimeout(secondaryRefresh);
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [pathname]);

  return null;
}
