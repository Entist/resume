'use client';

import React from 'react';
import { HiHeart } from 'react-icons/hi';
import { SiNextdotjs, SiTailwindcss } from 'react-icons/si';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-copyright">
            <p className="footer-year">© 2025 AidenJLee</p>
            <p className="footer-rights">All rights reserved.</p>
          </div>
          
          <div className="footer-passion">
            <p className="footer-made">
              Made with <HiHeart className="footer-heart" /> & 커피
            </p>
            <p className="footer-years"> I create together with AI </p>
          </div>
          
          <div className="footer-powered">
            <p className="footer-tech">
              Powered by
              <span className="footer-tech-icons">
                <SiNextdotjs className="footer-tech-icon" title="Next.js" />
                <span className="footer-tech-separator">&</span>
                <SiTailwindcss className="footer-tech-icon" title="Tailwind CSS" />
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 