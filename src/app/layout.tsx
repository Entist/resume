import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '이호준 - iOS 개발자 포트폴리오',
  description: '15년 차 iOS 개발자 이호준의 포트폴리오입니다.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
