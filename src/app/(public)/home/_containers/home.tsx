'use client';
import dynamic from 'next/dynamic';
import { themeConfig } from '@/configs/theme.config';
import NavLayout from '@/core/layouts/nav.layout';
import { useTheme } from '@/core/providers/theme.provider';
import Marquee from 'react-fast-marquee';
import Achievements from '@/components/sections/Home/achievements/Achievement';
import Events from '@/components/sections/Home/event/Event';
import HeroSection from '@/core/section/hero';
import Department from '@/core/section/department/Department';
import Merch from '@/core/section/merch/Merch';
import InformaticsClub from '@/core/section/informatics-club/InformaticsClub';
import Contact from '@/core/section/contact/Contact';

const Teserract = dynamic(() => import('@/components/svg/hero/teserract'), { ssr: false });

export default function ContainerHome() {
  const { theme } = useTheme();

  return (
    <NavLayout>
      <main className={`w-full bg-[#0E0A17] overflow-hidden text-white`}>
        <div className="flex flex-col items-center justify-center h-full w-full">
          <HeroSection />
          <div className="w-full py-6 bg-gradient-to-r from-[#D3AEE9] via-[#5A189A] to-[#5A189A] overflow-hidden">
            <Marquee direction="right">
              {[1, 1, 1, 1, 1, 1].map((data: number, i: number) => {
                return (
                  <div key={i} className=" flex items-center gap-5 w-full overflow-hidden">
                    <svg
                      width="49"
                      height="49"
                      viewBox="0 0 49 49"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M25.6605 0.5H23.3394V48.5H25.6605V0.5Z" fill="white" />
                      <path d="M48.5 23.3395H0.5V25.6606H48.5V23.3395Z" fill="white" />
                      <path
                        d="M8.34583 6.70715L6.70459 8.34839L40.6454 42.2892L42.2866 40.6479L8.34583 6.70715Z"
                        fill="white"
                      />
                      <path
                        d="M40.6454 6.70689L6.70459 40.6477L8.34583 42.2889L42.2866 8.34813L40.6454 6.70689Z"
                        fill="white"
                      />
                      <path
                        d="M2.71846 14.3778L1.84271 16.5273L46.2955 34.6377L47.1712 32.4882L2.71846 14.3778Z"
                        fill="white"
                      />
                      <path
                        d="M32.4879 1.84577L14.3775 46.2986L16.5271 47.1743L34.6375 2.72151L32.4879 1.84577Z"
                        fill="white"
                      />
                      <path
                        d="M46.3481 14.4585L1.81848 32.3817L2.68517 34.535L47.2148 16.6118L46.3481 14.4585Z"
                        fill="white"
                      />
                      <path
                        d="M16.602 1.81933L14.4487 2.68579L32.3671 47.2154L34.5204 46.3489L16.602 1.81933Z"
                        fill="white"
                      />
                    </svg>
                    <h1 className="text-white text-2xl md:text-[48px] font-bold">WELCOME</h1>

                    <svg
                      width="49"
                      height="49"
                      viewBox="0 0 49 49"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M25.6605 0.5H23.3394V48.5H25.6605V0.5Z" fill="white" />
                      <path d="M48.5 23.3395H0.5V25.6606H48.5V23.3395Z" fill="white" />
                      <path
                        d="M8.34583 6.70715L6.70459 8.34839L40.6454 42.2892L42.2866 40.6479L8.34583 6.70715Z"
                        fill="white"
                      />
                      <path
                        d="M40.6454 6.70689L6.70459 40.6477L8.34583 42.2889L42.2866 8.34813L40.6454 6.70689Z"
                        fill="white"
                      />
                      <path
                        d="M2.71846 14.3778L1.84271 16.5273L46.2955 34.6377L47.1712 32.4882L2.71846 14.3778Z"
                        fill="white"
                      />
                      <path
                        d="M32.4879 1.84577L14.3775 46.2986L16.5271 47.1743L34.6375 2.72151L32.4879 1.84577Z"
                        fill="white"
                      />
                      <path
                        d="M46.3481 14.4585L1.81848 32.3817L2.68517 34.535L47.2148 16.6118L46.3481 14.4585Z"
                        fill="white"
                      />
                      <path
                        d="M16.602 1.81933L14.4487 2.68579L32.3671 47.2154L34.5204 46.3489L16.602 1.81933Z"
                        fill="white"
                      />
                    </svg>

                    <h1 className="text-white text-2xl md:text-[48px] font-bold">HMIF</h1>
                    <svg
                      width="49"
                      height="49"
                      viewBox="0 0 49 49"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M25.6605 0.5H23.3394V48.5H25.6605V0.5Z" fill="white" />
                      <path d="M48.5 23.3395H0.5V25.6606H48.5V23.3395Z" fill="white" />
                      <path
                        d="M8.34583 6.70715L6.70459 8.34839L40.6454 42.2892L42.2866 40.6479L8.34583 6.70715Z"
                        fill="white"
                      />
                      <path
                        d="M40.6454 6.70689L6.70459 40.6477L8.34583 42.2889L42.2866 8.34813L40.6454 6.70689Z"
                        fill="white"
                      />
                      <path
                        d="M2.71846 14.3778L1.84271 16.5273L46.2955 34.6377L47.1712 32.4882L2.71846 14.3778Z"
                        fill="white"
                      />
                      <path
                        d="M32.4879 1.84577L14.3775 46.2986L16.5271 47.1743L34.6375 2.72151L32.4879 1.84577Z"
                        fill="white"
                      />
                      <path
                        d="M46.3481 14.4585L1.81848 32.3817L2.68517 34.535L47.2148 16.6118L46.3481 14.4585Z"
                        fill="white"
                      />
                      <path
                        d="M16.602 1.81933L14.4487 2.68579L32.3671 47.2154L34.5204 46.3489L16.602 1.81933Z"
                        fill="white"
                      />
                    </svg>

                    <h1 className="text-white text-2xl md:text-[48px] font-bold">2025</h1>
                    <svg
                      width="49"
                      height="49"
                      viewBox="0 0 49 49"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M25.6605 0.5H23.3394V48.5H25.6605V0.5Z" fill="white" />
                      <path d="M48.5 23.3395H0.5V25.6606H48.5V23.3395Z" fill="white" />
                      <path
                        d="M8.34583 6.70715L6.70459 8.34839L40.6454 42.2892L42.2866 40.6479L8.34583 6.70715Z"
                        fill="white"
                      />
                      <path
                        d="M40.6454 6.70689L6.70459 40.6477L8.34583 42.2889L42.2866 8.34813L40.6454 6.70689Z"
                        fill="white"
                      />
                      <path
                        d="M2.71846 14.3778L1.84271 16.5273L46.2955 34.6377L47.1712 32.4882L2.71846 14.3778Z"
                        fill="white"
                      />
                      <path
                        d="M32.4879 1.84577L14.3775 46.2986L16.5271 47.1743L34.6375 2.72151L32.4879 1.84577Z"
                        fill="white"
                      />
                      <path
                        d="M46.3481 14.4585L1.81848 32.3817L2.68517 34.535L47.2148 16.6118L46.3481 14.4585Z"
                        fill="white"
                      />
                      <path
                        d="M16.602 1.81933L14.4487 2.68579L32.3671 47.2154L34.5204 46.3489L16.602 1.81933Z"
                        fill="white"
                      />
                    </svg>

                    <h1 className="text-white text-2xl md:text-[48px] font-bold pr-6">
                      INFORMATICS
                    </h1>
                  </div>
                );
              })}
            </Marquee>
          </div>
          <Department />
          {/* <Events /> */}
          <Events />
          <Achievements />
          <div className="w-full py-6 bg-[#140E24] overflow-hidden">
            <Marquee direction="left">
              {Array.from({ length: 15 }).map((data: any, i: number) => {
                return (
                  <div key={i} className=" flex items-center gap-5 w-full overflow-hidden">
                    <div className=" w-[150px] px-10 border-l-[1px] border-white/25">
                      <Teserract />
                    </div>
                  </div>
                );
              })}
            </Marquee>
          </div>
          <Merch />
          <InformaticsClub />
          <Contact />
        </div>
      </main>
    </NavLayout>
  );
}
