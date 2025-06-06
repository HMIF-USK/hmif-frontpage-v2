import { BoardTypesProps } from '@/components/props/index';
import { CircleArrowOutUpRight } from 'lucide-react';
import Link from 'next/link';

const Board: React.FC<BoardTypesProps> = ({ data }) => {
  return (
    <div
      className={
        'bg-gradient-to-r from-white/30 to-[#332A55]/80 flex justify-center p-2 sm:p-3 md:p-4 rounded-md flex-col w-[80vw] sm:w-[50vw] md:w-[35vw] lg:w-[25vw] xl:w-[17vw] max-w-[400px]'
      }
    >
      <h1 className="font-semibold text-sm sm:text-base md:text-lg">{data.title}</h1>
      <p className="font-light text-xs sm:text-sm md:text-base">{data.date}</p>
      <div className="flex justify-center items-center m-1 sm:m-2">
        {data?.image && (
          <div className="w-full max-w-[90%] aspect-[282/178]">
            <svg
              viewBox="0 0 282 178"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              <path
                d="M276.386 0H5.61429C2.5136 0 0 2.51361 0 5.61429V116.147C0 117.625 0.582431 119.043 1.62099 120.094L57.1988 176.332C58.2535 177.399 59.6916 178 61.1921 178H276.386C279.486 178 282 175.486 282 172.386V5.61429C282 2.5136 279.486 0 276.386 0Z"
                fill="#D0C5F2"
              />
            </svg>
          </div>
        )}
      </div>
      <div className="flex justify-end">
        <CircleArrowOutUpRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
      </div>
    </div>
  );
};

export default Board;
