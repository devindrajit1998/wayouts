import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ClientScriptRunner from '@/components/ClientScriptRunner';

export const metadata: Metadata = {
  title: 'WAYOUTS — Travel Agency Template',
  description: 'Turn your dream destinations into reality with our expert guidance.',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.png', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon.png' },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@300;400;500;600;700&family=Barlow+Semi+Condensed:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/assets/css/plugins.css" />
        <link rel="stylesheet" href="/assets/css/style.css" />
        <link rel="stylesheet" href="/assets/css/auth.css" />
      </head>
      <body>
        {/* Preloader */}
        <div className="loader-wrap">
          <svg viewBox="0 0 1000 1000" preserveAspectRatio="none">
            <path id="svg" d="M0,1005S175,995,500,995s500,5,500,5V0H0Z"></path>
          </svg>
          <div className="loader-wrap-heading">
            <div className="load-text">
              <span>L</span> <span>o</span> <span>a</span> <span>d</span> <span>i</span> <span>n</span> <span>g</span>
            </div>
          </div>
        </div>

        {/* Cursor */}
        <div className="cursor"></div>

        {/* Progress scroll totop */}
        <div className="progress-wrap cursor-pointer">
          <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
            <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
          </svg>
        </div>

        {/* Smooth-wrapper */}
        <div id="smooth-wrapper">
          <Navbar />
          <div id="smooth-content">
            <ClientScriptRunner />
            {children}
            <Footer />
          </div>
        </div>

        {/* Scripts */}
        <Script src="/assets/js/jquery-3.6.0.min.js" strategy="beforeInteractive" />
        <Script src="/assets/js/jquery-migrate-3.4.0.min.js" strategy="beforeInteractive" />
        <Script src="/assets/js/plugins.js" strategy="afterInteractive" />
        <Script src="/assets/js/imagesloaded.pkgd.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/gsap.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/ScrollSmoother.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/ScrollTrigger.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/smoother-script.js" strategy="afterInteractive" />
        <Script src="/assets/js/springer.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/lenis.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/three.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/hover-effect.umd.js" strategy="afterInteractive" />
        <Script src="/assets/js/custom.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
