'use client';
import { themeConfig } from '@/configs/theme.config';
import NavLayout from '@/core/layouts/nav.layout';
import { useTheme } from '@/core/providers/theme.provider';
import Inforclub from '@/components/ui/sections/informatics-club/inforclub';
import Contact from '@/components/ui/sections/contact/contact';

export default function ContainerHome() {
  const { theme } = useTheme();

  return (
    <NavLayout>
      <main className={`container mx-auto bg-[${themeConfig[theme].primary.background}]`}>
        <div className="flex flex-col items-center justify-center py-8">
          <Inforclub />
        </div>
        <div className="flex flex-col items-center justify-center py-360">
          <Contact />
        </div>
      </main>
    </NavLayout>
  );
}
