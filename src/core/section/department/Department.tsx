'use client';

import DepartmentBackground from './background/DepartmentBackground';
import { departmentList } from '@/data/department-list';
import { DepartmentList } from '@/types/department.type';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const Department: React.FC = () => {
  return (
    <div className=" w-full min-h-screen relative z-0 bg-transparent flex items-center justify-center ">
      <div className="w-[80%] lg:w-[75%] flex flex-col ">
        {departmentList.map((item: DepartmentList, i: number) => {
          return (
            <Link
              href={`/department/${item.slug}`}
              key={i}
              className=" w-full flex justify-between items-center py-7 border-white border-b-[1px] group hover:bg-[#7300FF] px-3  md:px-10 duration-300"
            >
              <div className=" flex items-center gap-4 md:gap-10">
                <h1 className=" text-white font-bold uppercase text-2xl md:text-4xl lg:text-5xl ">
                  {item.departmentName}
                </h1>

                <div className=" relative z-0 h-12 hidden lg:block">
                  <div
                    className={`bg-[#5A189A] w-auto px-3 h-full font-semibold rounded-full flex items-center absolute z-[2] group-hover:shadow-[-4px_0px_5px_rgba(0,0,0,0.5)] group-hover:translate-x-[40px] duration-300`}
                  >
                    <p className=" text-nowrap text-sm md:text-base">{item.shortDesc}</p>
                  </div>
                  <div className="bg-[#D9BEF3] text-[#D9BEF3] px-3 h-full font-semibold rounded-full flex items-center absolute z-[-5]">
                    <p className=" text-nowrap text-sm md:text-base">{item.shortDesc}</p>
                  </div>
                  <div
                    className={`bg-[#9559CF] text-[#9559CF] px-3 h-full font-semibold rounded-full flex items-center absolute z-[-4] group-hover:shadow-[-4px_0px_5px_rgba(0,0,0,0.5)] group-hover:translate-x-[18px] duration-300`}
                  >
                    <p className=" text-nowrap text-sm md:text-base">{item.shortDesc}</p>
                  </div>
                </div>
              </div>
              <div className="flex w-[30px] h-[30px] md:w-[60px] md:h-[60px]  items-center justify-center rounded-full bg-transparent group-hover:bg-gradient-to-r from-[#D3AEE9] via-[#5A189A] to-[#5A189A] group-hover:border-[1px] group-hover:border-white duration-300">
                <div className="group-hover:rotate-[45deg] duration-300">
                  <ArrowUpRight size={30} />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
      <DepartmentBackground />
    </div>
  );
};

export default Department;
