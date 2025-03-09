'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <nav className="navbar">
          <Link href="/" className="navbar-brand">
            이호준
          </Link>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link href="#about" className="nav-link">
                소개
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#skills" className="nav-link">
                기술
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#experience" className="nav-link">
                경력
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#projects" className="nav-link">
                프로젝트
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#contact" className="nav-link">
                연락처
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header; 