'use client';
import { themeConfig } from '@/configs/theme.config';
import NavLayout from '@/core/layouts/nav.layout';
import { useTheme } from '@/core/providers/theme.provider';
import Achievements from '@/components/sections/achievements/Achievement';
import HeroSection from '@/core/section/hero';

export default function ContainerHome() {
  const { theme } = useTheme();

  return (
    <NavLayout>
      <main className={`w-full bg-[${themeConfig[theme].primary.background}]`}>
        <div className="flex flex-col items-center justify-center h-screen">
          <HeroSection />
          {/* <Achievements /> */}
        </div>
      </main>
    </NavLayout>
  );
}
