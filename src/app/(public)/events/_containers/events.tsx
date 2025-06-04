'use client';
import { themeConfig } from '@/configs/theme.config';
import NavLayout from '@/core/layouts/nav.layout';
import { useTheme } from '@/core/providers/theme.provider';

export default function ContainerEvent() {
  const { theme } = useTheme();

  return (
    <NavLayout>
      <main className={`container mx-auto bg-[${themeConfig[theme].primary.background}]`}>
        <div className="flex flex-col items-center justify-center h-full">
          {/* <EventsComponents /> */}
        </div>
      </main>
    </NavLayout>
  );
}
