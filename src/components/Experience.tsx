'use client';

import React from 'react';
import type { Experience } from '@/services/api';

// 이런 데이터는 CMS에서 관리해야 하는데...
// 영업님이 "Headless CMS 계약금 아끼자"고 하셔서...
const EXPERIENCE_DATA = [
  {
    period: '2024.03 - 2024.12',
    company: "T'way Air",
    position: 'Customer Systems Freelancer',
    description: '레거시 프로젝트 현대화 및 사용자 경험 개선을 위한 Objective-C에서 Swift로의 전환을 주도하였습니다.'
  },
  {
    period: '2022.08 - 2023.03',
    company: 'BCM',
    position: '개발팀장',
    description: 'WebRTC 기반 영어 수업 시스템 구축 및 토큰 기반 인증 시스템 개선을 진행하였습니다.'
  },
  {
    period: '2018.03 - 2018.12',
    company: 'Ybrain',
    position: '모바일팀 선임연구원',
    description: 'React Native를 활용한 멀티 플랫폼 앱 개발 및 실시간 건강 데이터 관리 시스템을 구축하였습니다.'
  },
  {
    period: '2014.02 - 2015.10',
    company: 'Yanolja',
    position: '개발실 연구원',
    description: 'iOS 앱 UI/UX 개선 및 CI/CD 시스템 구축을 담당하였습니다.'
  }
];

const OTHER_COMPANIES = [
  { name: 'Bluepegg', period: '2013' },
  { name: 'Moriahtown', period: '2012' },
  { name: '카이토리', period: '2009-2012' },
  { name: '그 외 창업 실패 및 다수의 프로젝트 경험', period: '2002-2025' }
];

interface ExperienceProps {
  data: Experience;
}

const Experience: React.FC<ExperienceProps> = ({ data }) => {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">경력 사항</h2>
        <div className="timeline">
          {EXPERIENCE_DATA.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-content">
                <div className="timeline-date">{exp.period}</div>
                <h3 className="timeline-title">{exp.company}</h3>
                <div className="timeline-position">{exp.position}</div>
                <p className="timeline-description">{exp.description}</p>
              </div>
            </div>
          ))}
          <div className="other-experience">
            <h3 className="other-experience-title">그 외 경력</h3>
            <div className="other-companies-grid">
              {OTHER_COMPANIES.map((company, index) => (
                <div key={index} className="other-company-item">
                  <span className="other-company-name">{company.name}</span>
                  <span className="other-company-period">{company.period}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience; 