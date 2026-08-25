import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '동네 배달 일지',
  description: '집을 선택해 배달 경로를 만들고 하루 순수익 10만 원에 도전하는 모바일 배달 게임',
  openGraph: {
    title: '동네 배달 일지',
    description: '집을 고르고, 경로를 만들고, 10만 원에 도전하세요',
    images: [{ url: '/og.png', width: 1680, height: 945, alt: '동네 배달 일지 게임' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '동네 배달 일지',
    description: '집을 고르고, 경로를 만들고, 10만 원에 도전하세요',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
