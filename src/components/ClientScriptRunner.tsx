'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ClientScriptRunner() {
  const pathname = usePathname();

  useEffect(() => {
    // Dynamic background image setting
    const bgElements = document.querySelectorAll('[data-background]');
    bgElements.forEach((el) => {
      const bg = el.getAttribute('data-background');
      if (bg) {
        (el as HTMLElement).style.backgroundImage = `url(${bg})`;
      }
    });

    // Close mobile navbar on route change
    const navbarCollapse = document.getElementById('navbar');
    if (navbarCollapse && navbarCollapse.classList.contains('show')) {
      navbarCollapse.classList.remove('show');
    }

    // Initialize/refresh WOW if available
    if (typeof window !== 'undefined' && (window as any).WOW) {
      new (window as any).WOW().init();
    }

    // Ensure header container and text elements are visible after route transition
    const headerContainer = document.querySelectorAll('header, header .container, header .cont, .full-height .cont');
    headerContainer.forEach((el) => {
      (el as HTMLElement).style.opacity = '1';
      (el as HTMLElement).style.transform = 'none';
      (el as HTMLElement).style.visibility = 'visible';
    });

    // Refresh ScrollSmoother and ScrollTrigger if available
    if (typeof window !== 'undefined') {
      const gsap = (window as any).gsap;
      const ScrollTrigger = (window as any).ScrollTrigger;
      const ScrollSmoother = (window as any).ScrollSmoother;

      if (gsap) {
        gsap.set('header .container, header .cont, .full-height .cont', {
          opacity: 1,
          y: 0,
          clearProps: 'opacity,transform'
        });
      }

      if (gsap && ScrollTrigger) {
        ScrollTrigger.refresh();
      }

      if (gsap && ScrollSmoother && ScrollTrigger) {
        if (!ScrollSmoother.get()) {
          ScrollSmoother.create({
            smooth: 2,
            effects: true,
            normalizeScroll: false,
          });
        } else {
          ScrollSmoother.get().effects('[data-speed], [data-lag]', {});
        }
      }
    }

    // Run Tourvex global initializer (WOW, Swiper, Testimonials accordion)
    if (typeof window !== 'undefined' && (window as any).initTourvex) {
      setTimeout(() => {
        (window as any).initTourvex();
      }, 50);
    }
  }, [pathname]);

  return null;
}
