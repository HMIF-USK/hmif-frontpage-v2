import React from 'react';
import Caps from '@/components/svg/inforclub/caps';
import CardInforClub from '@/components/components/inforclub/card/cardInforClub';
import { CardInforClubData } from '@/configs/app.config';
import { CardSlot } from '@/components/components/helper/inforclub';

const InforClub: React.FC = () => {
  return (
    <main className="h-full w-full relative ">
      <div className="flex justify-center items-center z-[-10] absolute left-[5vw]">
        <Caps />
      </div>

      <div className="z-1 relative">
        <div>
          {CardInforClubData.map((item, key) => {
            const slot = CardSlot[key];
            return (
              <div
                key={key}
                className="absolute transform transition-all duration-300 hover:scale-105"
                style={{
                  top: slot.top,
                  left: slot.left,
                  transform: 'translate(-50%, -50%)',
                }}
              >
                <CardInforClub data={item} index={key} />
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default InforClub;

//  <div className="">
//    {CardInforClubData.map((card, index) => (
//      <div
//        key={index}
//        className=""
//        style={{
//          top: `${index * 200}px`,
//          left: index % 2 === 0 ? '10%' : '40%',
//          zIndex: CardInforClubData.length - index,
//        }}
//      >
//        <CardInforClub data={card} index={index} />
//      </div>
//    ))}
//  </div>;
