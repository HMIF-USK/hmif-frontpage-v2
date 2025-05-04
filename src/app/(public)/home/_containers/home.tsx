 'use client';
 import { themeConfig } from '@/configs/theme.config';
 import NavLayout from '@/core/layouts/nav.layout';
 import { useTheme } from '@/core/providers/theme.provider';
 import Department_list from '@/components/sections/departmentList/DepartmentList';

 export default function ContainerHome() {   const { theme } = useTheme();
   return (
    
       <main className={`container mx-auto bg-[${themeConfig[theme].primary.background}]`}>
         <div className="flex flex-col items-center justify-center h-full ">
           <Department_list />
         </div>
       </main>
    
   );
 }


