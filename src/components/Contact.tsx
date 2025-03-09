'use client';

import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin, FaPhone } from 'react-icons/fa';

const CONTACT_DATA = [
  {
    icon: FaEnvelope,
    title: '이메일',
    text: '업무 관련 문의',
    link: 'mailto:aiden.entist@gmail.com',
    linkText: 'aiden.entist@gmail.com'
  },
  {
    icon: FaGithub,
    title: 'GitHub',
    text: '프로젝트 및 코드 확인',
    link: 'https://github.com/AidenJLee',
    linkText: '@AidenJLee'
  },
  {
    icon: FaLinkedin,
    title: 'LinkedIn',
    text: '경력 및 이력 확인',
    link: 'https://www.linkedin.com/in/aiden-j-lee/',
    linkText: 'LinkedIn Profile'
  },
  {
    icon: FaPhone,
    title: '전화',
    text: '긴급 문의',
    link: 'tel:+82-10-6516-0120',
    linkText: '010-6516-0120'
  }
];

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">연락하기</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          프로젝트 협업이나 개발 관련 문의는 언제든 환영합니다.
          이메일이나 LinkedIn을 통해 연락해 주시면 빠른 시일 내에 답변 드리겠습니다.
        </p>
        <div className="contact-grid">
          {CONTACT_DATA.map((item, index) => (
            <div key={index} className="contact-card">
              <div className="contact-icon-wrapper">
                <item.icon size={28} />
              </div>
              <h3 className="contact-title">{item.title}</h3>
              <p className="contact-text">{item.text}</p>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                {item.linkText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact; 