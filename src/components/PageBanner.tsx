'use client';

import React from 'react';

interface PageBannerProps {
  subtitle: string;
  title: string;
  italicTitle?: string;
  afterTitle?: string;
  image: string;
  children?: React.ReactNode;
}

export default function PageBanner({
  subtitle,
  title,
  italicTitle,
  afterTitle,
  image,
  children,
}: PageBannerProps) {
  return (
    <header className="pg-hero section-padding">
      <div className="container">
        <div className="row mb-60 justify-content-center">
          <div className="col-md-6 text-center">
            <div className="section-subtitle">{subtitle}</div>
            <div className="section-title">
              {title} {italicTitle && <i>{italicTitle}</i>} {afterTitle}
            </div>
            {children}
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="height1">
          <div className="radius-mask">
            <div
              className="bg-img height2"
              data-background={image}
              data-speed="0.5"
              data-lag="0"
            ></div>
          </div>
        </div>
      </div>
    </header>
  );
}
