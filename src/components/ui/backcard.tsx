import { MoveRight } from 'lucide-react';

import { CardEventTypeProps } from '../props';

const BackCard: React.FC<CardEventTypeProps> = ({ data }) => {
  return (
    <div className={` w-full h-full rounded-xl p-2 bg-[#393054] `}>
      <div className="flex-col p-2">
        <h1 className="font-semibold text-[2rem]">{}</h1>
        <h1 className="font-semibold">{}</h1>
      </div>
      <div className="border-2 h-[20vh] bg-[#EBE8F5] rounded-lg"></div>
      <div className="border-2 border-white rounded-lg flex justify-center bg-gradient-to-r from-[#493582] to-[#493582] my-6 mx-4 gap-4 w-[10vw]">
        <h1 className="font-bold">Selengkapnya</h1>
        <MoveRight />
      </div>
    </div>
  );
};

export default BackCard;
