import React from 'react';
import Image from 'next/image';
import Arrow from '@/components/svg/departmentAsset/arrow.svg';

interface DepartmentCardProps {
  id: number;
  name: string;
  description: string;
}

const DepartmentCard: React.FC<DepartmentCardProps> = ({ id, name, description }) => {
  return (
    <div className="relative group flex items-center justify-between w-full h-40 px-6 py-4 border-b border-gray-700 hover:bg-[#7C3AED] transition-colors duration-300 cursor-pointer">
      <p className="absolute m-4 top-0 left-0 text-2xl">{id.toString().padStart(2, '0')}</p>

      <div className="relative flex items-center gap-4 p-2">
        <h2 className="relative  ml-10 text-8xl font-bold text-white group-hover:text-white">
          {name}
        </h2>
      </div>

      <div className="relative flex flex-1 ml-10 h-15 group">
        <div className="relative min-w-max h-full group">
       
          <div className="absolute left-0 top-0 flex items-center h-full w-full rounded-full bg-purple-800 transition-all duration-300 shadow-[0_0_0_0_rgba(91,33,182,0.5)] group-hover:shadow-[0_0_20px_10px_rgba(91,33,182,0.5)] z-0"></div>

          <div className="absolute left-0 top-0 flex items-center h-full w-full rounded-full bg-purple-600 transition-all duration-300 group-hover:translate-x-9 shadow-[0_0_0_0_rgba(124,58,237,0.5)] group-hover:shadow-[0_0_15px_5px_rgba(124,58,237,0.5)] z-10"></div>

          <div className="relative inline-flex items-center px-9 py-3 bg-purple-800 rounded-full text-3xl text-white group-hover:bg-purple-300 z-20 transition-all duration-300 group-hover:translate-x-18 h-full font-medium group-hover:text-purple-800 shadow-[0_0_0_0_rgba(139,92,246,0.5)] group-hover:shadow-[0_0_25px_8px_rgba(139,92,246,0.5)]">
            {description}
          </div>
        </div>
      </div>

      <div className="absolute right-0 mr-2 flex justify-center items-center text-white opacity-70 group-hover:opacity-100 transition ">
        <Image
          src={Arrow}
          alt="Logo Bawah"
          className="h-32 w-32 aspect-auto rounded-full border-4 border-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-purple-800 group-hover:border-white
"
        />
      </div>
    </div>
  );
};

export default DepartmentCard;
