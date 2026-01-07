import React from 'react';
import Image from 'next/image';

export default function Header(): JSX.Element {
  const logo = 'https://garberbrosinc.com/websites/garberbrosinc/templates/GarberBrosInc/images/logo.png';
  const safeSrc = encodeURI(logo);
  return (
    <header className="bg-white border-b">
      <div className="container flex items-center justify-between py-4">
        <a href="/" aria-label="Home">
          <div style={{ width: 160, height: 48, position: 'relative' }}>
            <Image src={safeSrc} alt="Garber Bros logo" unoptimized fill sizes="160px" style={{ objectFit: 'contain' }} />
          </div>
        </a>
        <nav className="nav-grid">
          <ul className="flex gap-6 header-nav">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/lock-status">Lock Status</a></li>
            <li><a href="/vessels">Vessels</a></li>
            <li><a href="/barges">Barges</a></li>
            <li><a href="/websites/garberbrosinc/images/application.pdf" target="_blank">Employment</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
