import { CardEventTypeProps } from '@/components/props';
import { MoveRight } from 'lucide-react';
const CardEventMobile: React.FC<CardEventTypeProps> = ({ data }) => {
  return (
    <div className="duration-500 ease-in-out border-1 h-[32vh] w-full rounded-xl scale-100 mx-auto">
      <div className="w-full h-full rounded-xl p- bg-[#393054] bg-opacity-100 p-4 shadow shadow-lg/30">
        <div className="flex flex-col gap-2">
          <h1 className="font-semibold text-xl text-white">{data.title}</h1>
          <p className="text-sm text-white">{data.desc}</p>
        </div>
        <div className="h-[16vh] bg-[#EBE8F5] rounded-lg mt-3"></div>

        <div className="flex my-2 sm:my-4 justify-between items-center border-2 border-white px-2 sm:px-3 md:px-4 rounded-lg w-full sm:w-auto min-w-[120px] max-w-[200px]">
          <h1 className="font-bold text-white text-sm sm:text-base md:text-lg">Selengkapnya</h1>
          <MoveRight className="text-white w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />

          {data.image && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="text-white"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="M12 5l7 7-7 7" />
            </svg>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardEventMobile;
