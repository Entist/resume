'use client';

import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ErrorBoundary from '@/components/ErrorBoundary';
import { apiService } from '@/services/api';
import type { Project, SkillSet, Experience as ExperienceType, ContactInfo } from '@/services/api';

export default function Home() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [skills, setSkills] = useState<SkillSet | null>(null);
  const [experiences, setExperiences] = useState<ExperienceType[]>([]);
  const [contactInfo, setContactInfo] = useState<ContactInfo | null>(null);
  const [loading, setLoading] = useState(true);

  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const [projectsData, skillsData, experiencesData, contactData] = await Promise.all([
          apiService.getProjects(),
          apiService.getSkills(),
          apiService.getExperiences(),
          apiService.getContactInfo(),
        ]);

        setProjects(projectsData);
        setSkills(skillsData);
        setExperiences(experiencesData);
        setContactInfo(contactData);
      } catch (error) {
        console.error('데이터 로딩 실패:', error);
        setError('데이터를 불러오는 중 오류가 발생했습니다. 새로고침 해주세요.');
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-600">잠시만 기다려주세요...</p>
      </div>
    );
  }
  
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center p-8 bg-red-50 rounded-lg border border-red-200">
          <p className="text-xl text-red-600 mb-4">{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
          >
            새로고침
          </button>
        </div>
      </div>
    );
  }

  return (
    <ErrorBoundary type="general" fallbackText="앱에서 오류가 발생했습니다. 페이지를 새로고침해 주세요.">
      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          {skills && <Skills data={skills} />}
          {experiences.length > 0 && <Experience data={experiences} />}
          {projects.length > 0 && <Projects data={projects} />}
          {contactInfo && <Contact data={contactInfo} />}
        </main>
        <Footer />
      </div>
    </ErrorBoundary>
  );
} 