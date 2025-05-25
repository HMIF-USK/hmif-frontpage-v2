import { MoveRight } from 'lucide-react';
import { CardEventTypeProps } from '@/components/props';
import { CardEventSlots } from '@/components/helper/slot';

const CardEvent: React.FC<CardEventTypeProps> = ({ activeIndex, index, data }) => {
  const isActive = index === 1;

  return (
    <div
      className={`transition-all duration-500 ease-in-out border-1 h-[40vh] w-[20vw] rounded-xl   ${
        isActive ? 'scale-100 ' : 'scale-100'
      }`}
    >
      <div
        className={`w-full h-full rounded-xl p-2 bg-[#393054] ${
          isActive ? 'bg-opacity-100' : 'bg-opacity-90'
        }`}
      >
        <div className="flex-col p-2">
          <h1 className="font-semibold text-[2rem] text-white">{data.title}</h1>
          <h1 className="font-semibold text-white">{data.desc}</h1>
        </div>
        <div className="h-[20vh] bg-[#EBE8F5] rounded-lg"></div>
        <div className="flex my-4 justify-between items-center border-2 w-50 border-white px-2 rounded-lg  ">
          <h1 className="font-bold text-white">Selengkapnya</h1>
          <MoveRight className="text-white" />
        </div>
      </div>
    </div>
  );
};

export default CardEvent;
