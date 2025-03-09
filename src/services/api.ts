/**
 * 데이터 인터페이스 정의
 */
export interface Project {
  id: string;
  title: string;
  description: string;
  period: string;
  techStack: string[];
  achievements: string[];
  image: string;
  appStoreLink: string;
}

export interface Skill {
  name: string;
  level: string;
}

export interface SkillSet {
  languages: Skill[];
  frameworks: Skill[];
  tools: Skill[];
}

export interface Experience {
  period: string;
  company: string;
  position: string;
  description: string;
  achievements: string[];
}

export interface ContactInfo {
  email: string;
  kakaoOpenChat: string;
  github: string;
  linkedin: string;
}

class ApiService {
  private static instance: ApiService;
  private readonly BASE_URL = process.env.NEXT_PUBLIC_API_URL || '';

  private constructor() {}

  public static getInstance(): ApiService {
    if (!ApiService.instance) {
      ApiService.instance = new ApiService();
    }
    return ApiService.instance;
  }

  private async fetchData<T>(endpoint: string): Promise<T> {
    try {
      const response = await fetch(`${this.BASE_URL}${endpoint}`);
      if (!response.ok) throw new Error('API 호출 실패');
      return response.json();
    } catch (error) {
      console.error('API 에러:', error);
      throw error;
    }
  }

  /**
   * API 메서드
   * 참고: 현재는 목업 데이터를 반환하지만, 
   * 실제 API 구현 시 this.fetchData<T>(endpoint)를 사용해야 함
   */
  async getProjects(): Promise<Project[]> {
    return [
      {
        id: '1',
        title: 'TwayAir iOS',
        description: '## 쉽고 편리한 항공권 예매',
        period: '2024.03 - 2024.12',
        techStack: ['Swift/', 'SwiftUI/', 'MVI/', 'Combine'],
        achievements: [
          '프로젝트 현대화와 리뉴얼 동시진행',
          'Objective-C 코드를 Swift로 변환',
          '여러사람의 작업에 의해 파편화 된 UI를 SwiftUI로 통일',
          '기존 코드는 현대화 하면서 새로운 앱으로 리뉴얼 작업을 동시 진행',
        ],
        image: '/images/project1.jpg',
        appStoreLink: 'https://apps.apple.com/app/id564901451',
      },
      {
        id: '2',
        title: '민병철 유폰',
        description: '## 영어회화 결국은 민병철유폰',
        period: '2022.08 - 2023.03',
        techStack: ['Swift/', 'SwiftUI/', 'Combine/', 'AWS/', 'WebRTC'],
        achievements: [
          '전화 영어를 인터넷 통신으로 전환',
          '사용자 인증 시스템 개선',
          '리펙토링 및 현대화 작업',
        ],
        image: '/images/project2.jpg',
        appStoreLink: 'https://apps.apple.com/app/id1507100534',
      },
    ];
  }

  async getSkills(): Promise<SkillSet> {
    return {
      languages: [
        { name: 'Swift', level: '마스터' },
        { name: 'Objective-C', level: '레거시의 추억' },
        { name: 'JavaScript', level: '중급' },
      ],
      frameworks: [
        { name: 'UIKit', level: '전문가' },
        { name: 'SwiftUI', level: '중급' },
        { name: 'Core Data', level: '전문가' },
      ],
      tools: [
        { name: 'Xcode', level: '전문가' },
        { name: 'Git', level: '전문가' },
        { name: 'Figma', level: '중급' },
      ],
    };
  }

  async getExperiences(): Promise<Experience[]> {
    return [
      {
        period: '2020 - 현재',
        company: '실리콘밸리 가고 싶은 스타트업',
        position: '시니어 iOS 개발자',
        description: '주니어들 멘토링하면서 은근히 내가 더 배우는 중',
        achievements: [
          '레거시 코드 리팩토링',
          'MVVM 아키텍처 도입',
          '코드 리뷰 문화 정착',
        ],
      },
    ];
  }

  async getContactInfo(): Promise<ContactInfo> {
    return {
      email: 'aiden.entist@gmail.com',
      kakaoOpenChat: 'https://open.kakao.com/o/your-chat-url',
      github: 'https://github.com/AidenJLee',
      linkedin: 'https://linkedin.com/in/aiden-j-lee',
    };
  }
}

export const apiService = ApiService.getInstance(); 