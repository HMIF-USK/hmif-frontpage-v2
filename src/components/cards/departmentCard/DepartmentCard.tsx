import React from "react";
import Image from "next/image";
import Arrow from "@/components/svg/departmentAsset/arrow.svg";


interface DepartmentCardProps {
  id: number;
  name: string;
  description: string;
}

const DepartmentCard: React.FC<DepartmentCardProps> = ({ id, name, description }) => {
  return (
    <div className="group flex items-center justify-between w-full px-6 py-4 border-b border-gray-700 hover:bg-[#7C3AED] transition-colors duration-300">
      <div className="flex items-center gap-4">
      <p>{id.toString().padStart(2, '0')}</p>
        <h2 className="text-5xl font-bold text-white group-hover:text-white">{name}</h2>
        <div className="px-3 py-1 bg-purple-800 rounded-full text-sm text-white group-hover:bg-purple-600">
          {description}
        </div>
      </div>
      <div className="text-white opacity-70 group-hover:opacity-100 transition">
      <Image 
          src={Arrow} 
          alt="Logo Bawah" 
          className="w-[80%] rounded-full border-2 border-transparent group-hover:bg-purple-800 group-hover:border-white"  
        />
      </div>
    </div>
  );
};

export default DepartmentCard;
