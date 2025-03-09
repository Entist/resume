'use client';

import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        {/* 기존 Hero 이미지, 타이틀, 소개 부분 */}
        <div className="hero-img-container">
          <img src="/images/profile.jpg" alt="이호준" className="hero-img" />
        </div>
        <h1 className="hero-title">이호준</h1>
        <p className="hero-subtitle">iOS 개발자 | 모바일 아키텍처 전문가</p>
        <p className="hero-description">
        15년간의 스타트업 부터 유니콘 규모의 회사에서 iOS 개발 경험을 바탕으로 레거시 코드 현대화와 아키텍처 설계를 전문으로 하고 있습니다. 최근에는 AI 에이전트를 활용한 개발 자동화 솔루션에 몰두하고 있습니다.
        </p>

        <div className="hero-contact">
          <div className="hero-social-links">
            <a href="mailto:aiden.entist@gmail.com" className="hero-social-link">
              <FaEnvelope className="hero-social-icon" />
              <span className="hero-social-text">이메일</span>
            </a>
            <a
              href="https://github.com/AidenJLee"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-link"
            >
              <FaGithub className="hero-social-icon" />
              <span className="hero-social-text">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/aiden-j-lee/"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-link"
            >
              <FaLinkedin className="hero-social-icon" />
              <span className="hero-social-text">LinkedIn</span>
            </a>
          </div>
        </div>
        
        {/* 추가: 주요 업무 섹션 */}
        <div className="hero-services">
          <h2 className="hero-services-title">주요 업무</h2>
          <div className="hero-services-list">
            <div className="hero-service-item">
              <h3>AI 기반 솔루션 개발</h3>
              <p>
                기업에 맞는 AI 도입 컨설팅부터 개발, 구축까지 전략적 경험이 있으며,
                현재 AI Agent를 활용한 개발 솔루션을 진행 중입니다.
              </p>
            </div>
            <div className="hero-service-item">
              <h3>iOS 개발</h3>
              <p>
                다양한 프로젝트에서 iOS 개발 경험을 보유하고 있으며,
                아키텍처 설계 및 레거시 코드 개선에 강점이 있습니다.
              </p>
            </div>
            <div className="hero-service-item">
              <h3>프로세스 자동화</h3>
              <p>
                Python, N8N, Google Apps/Docs 등 다양한 기술을 활용하여 반복 업무를 효율화하고
                비효율적인 프로세스를 개선하는데 다년간의 경험이 있습니다.
              </p>
            </div>
          </div>
          
          <div className="hero-services-cta">
            <a href="#contact" className="hero-cta-primary">문의하기</a>
          </div>
          </div>
      </div>
    </section>
  );
};

export default Hero;
