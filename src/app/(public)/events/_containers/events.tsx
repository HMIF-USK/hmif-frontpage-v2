'use client';
import { themeConfig } from '@/configs/theme.config';
import NavLayout from '@/core/layouts/nav.layout';
import { useTheme } from '@/core/providers/theme.provider';
import EventsComponents from '@/core/section/Events/Events';

export default function ContainerEvent() {
  const { theme } = useTheme();

  return (
    <NavLayout>
      <main className={`w-full bg-[${themeConfig[theme].primary.background}]`}>
        <div className="flex flex-col items-center justify-center w-full">
          <EventsComponents />
        </div>
      </main>
    </NavLayout>
  );
}
