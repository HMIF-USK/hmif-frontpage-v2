'use client';

import { LampuData, BoardData, LogoData } from '@/configs/app.config';
import { LampuSlots, boardSlots } from '@/components/helper/slot';
import Logo from '@/components/cards/achievements/Logo';
import Board from '@/components/cards/achievements/Board';
import Marquee from 'react-fast-marquee';
import Light from '@/components/svg/achievements/light';
import { useIsMobile } from '@/hooks/use-mobile';
import ParticelSvg from '@/components/svg/achievements/Particel';
import Lampu from '@/components/cards/achievements/Lampu';

const Achievements: React.FC = () => {
  return (
    <div className="relative w-screen h-full">
      <div className="min-w-full h-[115vh] scale-x-[110%] flex justify-center items-center bg-[#0E0A17] rounded-b-full rounded-t-full translate-y-[5%] mt-[8vh] relative">
        <div className="absolute inset-0 scale-70 translate-y-[-25%] scale-x-[100%] z-0">
          <Light />
        </div>

        <div className="absolute z-10">
          <div className="w-[80vw] h-[80vw] min-w-[300px] min-h-[300px] max-w-[600px] max-h-[600px] rounded-full border border-[#8A4EF680] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[40%]" />
          <div className="w-[95vw] h-[95vw] min-w-[400px] min-h-[400px] max-w-[750px] max-h-[750px] rounded-full border border-[#8A4EF680] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[40%]" />
          <div className="w-[110vw] h-[110vw] min-w-[500px] min-h-[500px] max-w-[900px] max-h-[900px] rounded-full border border-[#8A4EF680] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[40%]" />
        </div>

        <div className="absolute z-20 translate-y-[10%] scale-x-[110%]">
          <ParticelSvg />
        </div>

        <div className="absolute inset-0 top-[200px] z-30 flex flex-col justify-center items-center">
          <h1 className="font-bold text-center text-white md:text-[3rem] md:w-[19vw] mb-2">
            Achievements Board
          </h1>
          <div className="border-1 bg-gradient-to-b from-[#140F2A] to-[#332A55] rounded-3xl font-light text-white p-3">
            <button className="font-bold">Selengkapnya</button>
          </div>
        </div>

        <div className="absolute h-full w-full z-40">
          {BoardData.map((item, index) => {
            const slot = boardSlots[index];
            return (
              <div
                key={index}
                className="absolute scale-[85%]"
                style={{
                  top: slot.top,
                  left: slot.left,
                  transform: 'translate(-50%, -50%)',
                }}
              >
                <Board data={item} />
              </div>
            );
          })}
        </div>

        <div className="absolute h-full w-full z-50">
          {LampuData.map((item, index) => {
            const slot = LampuSlots[index];
            return (
              <div
                key={index}
                className="absolute"
                style={{
                  top: slot.top,
                  left: slot.left,
                  transform: 'translate(-50%, -50%)',
                }}
              >
                <Lampu />
              </div>
            );
          })}
        </div>

        <div className="relative top-[100vh] w-full h-[10vh] z-60 flex items-center overflow-hidden">
          <Marquee direction="left">
            <div className="shadow-md flex">
              {LogoData.map((item, index) => (
                <Logo key={index} />
              ))}
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
