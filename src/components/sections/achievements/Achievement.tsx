'use client';
import { LampuData, BoardData, LogoData } from '@/components/data';
import { LampuSlots, boardSlots } from '@/components/helper/slot';
import Logo from '@/components/cards/achievements/Logo';
import Board from '@/components/cards/achievements/Board';
import Marquee from 'react-fast-marquee';
import Light from '@/components/svg/achievements/light';
import OrbitSvg from '@/components/svg/achievements/orbit';
import ParticelSvg from '@/components/svg/achievements/Particel';
import Lampu from '@/components/cards/achievements/Lampu';
const Achievements: React.FC = () => {
  return (
    <div className="relative h-scren w-screen">
      <div className='className=" min-w-full h-[115vh] scale-x-[110%] flex justify-center items-center bg-[#0E0A17] rounded-b-full rounded-t-full translate-y-[5%] mt-[8vh]'>
        <div className="absolute inset-0 scale-70 translate-y-[-25%] z-1 scale-x-[100%] ">
          <Light />
        </div>

        <div className="absolute z-9 translate-y-[10%]">
          <OrbitSvg />
        </div>

        <div className="absolute z-8 ">
          <ParticelSvg />
        </div>

        <div className="absolute inset-0 z-11 top-[53%] ">
          <div className="flex-col flex justify-center items-center">
            <h1 className="font-bold text-center text-white md:text-[3rem] md:w-[19vw] mb-2">
              Achievements Board
            </h1>
            <div className="border-1 bg-gradient-to-b from-[#140F2A] to-[#332A55] rounded-3xl font-light text-white p-2">
              <button className=" ">Selengkapnya</button>
            </div>
          </div>
        </div>
        <div className="absolute h-full w-full z-11">
          {BoardData.map((item, index) => {
            const slot = boardSlots[index];

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
                <Board data={item} />
              </div>
            );
          })}
        </div>

        <div className="absolute md:h-full md:w-full z-14">
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
                <Lampu key={index} />
              </div>
            );
          })}
        </div>

        <div className=" relative flex justify-center top-[100vh] w-full border-1 z-10 h-[10vh] items-center overflow-hidden">
          <Marquee direction="left">
            <div className="shadow-md">
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
