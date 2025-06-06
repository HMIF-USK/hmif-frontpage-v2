import { MoveRight } from 'lucide-react';
import { CardEventTypeProps } from '@/components/props';

const CardEvent: React.FC<CardEventTypeProps> = ({ data }) => {
  return (
    <div
      className={`transition-all duration-500 ease-in-out border-1 h-[40vh] w-[20vw] rounded-xl   
      `}
    >
      <div
        className={`w-full h-full rounded-xl p-2 bg-[#393054] '
        `}
      >
        <div className="flex-col p-1">
          <h1 className="font-semibold text-[2rem] text-white">{data.title}</h1>
          <h1 className="font-semibold text-white">{data.desc}</h1>
        </div>
        <div className="h-[20vh] bg-[#EBE8F5] rounded-lg"></div>
        <div className="flex my-2 sm:my-4 justify-between items-center border-2 border-white px-2 sm:px-3 md:px-4 rounded-lg w-full sm:w-auto min-w-[120px] max-w-[200px] ">
          <h1 className="font-bold text-white text-sm sm:text-base md:text-lg">Selengkapnya</h1>
          <MoveRight className="text-white w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
        </div>
      </div>
    </div>
  );
};

export default CardEvent;
