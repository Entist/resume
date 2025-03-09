'use client';

import React from 'react';
import type { SkillSet } from '@/services/api';

// 실무에서 이런 데이터는 API로 받아와야 하는데...
// BE 개발자분이 "API 만들어드릴게요~" 하신지 3달째...
const SKILLS_DATA = {
  programming: {
    title: '프로그래밍 언어',
    skills: [
      { name: 'Swift', description: 'This is your last chance. After this, there is no turning back' },
      { name: 'Objective-C', description: '레거시의 추억! 대괄호 문법' },
      { name: 'JavaScript', description: '리액트 네이티브 할 줄 알면 이것도 해야죠' },
      { name: 'Node.JS', description: '서버도 가끔은 만져줘야죠' }
    ]
  },
  framework: {
    title: '프레임워크',
    skills: [
      { name: 'SwiftUI', description: '선언 하면 끝나는 시대. 심플한게 좋죠' },
      { name: 'Combine', description: '반응형의 꽃' },
      { name: 'RxSwift', description: '옵저버블의 세계로 초대' },
      { name: 'WebRTC', description: '실시간 통신 정도는 해야죠' }
    ]
  },
  architecture: {
    title: '아키텍처 & 패턴',
    skills: [
      { name: 'MV + X', description: '모든 패턴의 시작점 - MVVM만 있는게 아니죠~'  },
      { name: 'Reactive Programming', description: '비동기의 예술' },
      { name: 'Functional Programming', description: '순수함의 추구' },
    ]
  },
  devops: {
    title: '개발 도구 & 환경',
    skills: [
      { name: 'Git', description: 'rebase vs merge 영원한 논쟁' },
      { name: 'GitHub', description: 'PR에 LGTM만 남기지 말아주세요' },
      { name: 'CI/CD', description: '게으른 자의 선택' },
      { name: 'AWS', description: '서버도 가끔은 만져줘야죠.' },
      { name: 'Docker', description: '요즘.. 이 정도 컨테이너는 기본이죠?' }
    ]
  }
};

interface SkillsProps {
  data: SkillSet;
}

const Skills: React.FC<SkillsProps> = ({ }) => {
  // useState로 상태관리하고 싶었지만... 시니어의 여유가 필요한 시점
  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">보유 기술</h2>
        <div className="skills-grid">
          {Object.entries(SKILLS_DATA).map(([key, category]) => (
            <div key={key} className="skill-card">
              <h3 className="skill-card-title">{category.title}</h3>
              <ul className="skill-list">
                {category.skills.map((skill) => (
                  <li key={skill.name} className="skill-item group">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-tooltip">{skill.description}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 