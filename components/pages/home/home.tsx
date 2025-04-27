{
  /* Import gambar */
}
import Image from "next/image";
import logoAtas from "@/components/asset/logoAtas.svg";
import logoBawah from "@/components/asset/logoBawah.svg";
import logoKanan from "@/components/asset/logoKananBawah.svg";

import border from "@/public/svg/achievements/1.svg";
import Particel from "@/public/svg/achievements/Particel.svg";
import { boardSlots, LampuSlots } from "@/components/helper/Slot";
import { BoardData, LampuData, LogoData } from "@/data";
import Board from "@/components/cards/achievement/Board";
import Lampu from "@/components/cards/achievement/Lampu";
import Marquee from "react-fast-marquee";
import Logo from "@/components/cards/achievement/Logo";


import DepartmentList from "@/components/cards/departmentCard/DepartmentList";

const Home = () => {
  return (
    <main className="w-screen h-screen relative bg-[#0D0C1D] flex justify-center items-center  ">
      
      <div className="gambar">
        <Image src={logoAtas} alt="Logo Atas" className="absolute w-50 top-0 left-0 " />
        <Image src={logoBawah} alt="Logo Bawah" className="absolute w-70 bottom-0 left-0 " />
        <Image src={logoKanan} alt="Logo Kanan" className="absolute w-70 bottom-0 right-0 " />
      </div>

      <div className="w-[80%] h-[60%] z-1">
        <DepartmentList />
      </div>
    </main>
  );
};

export default Home;



// const Home = () => {
//   return (
//     <>
//       {/* Container */}
//       <div className="md:relative w-screen h-screen bg-[#0D0C1D] overflow-hidden">
//         {/* Particle */}
//         <Image src={logoAtas} alt="Logo Atas" className="md:absolute w-32 h-32 top-0" />
//         <Image src={logoBawah} alt="Logo Bawah" className="md:absolute w-50 h-50 bottom-0" />
//         <Image src={logoKanan} alt="Logo Kanan" className="md:absolute w-50 h-50 right-0 bottom-0" />

//         {/* List Departement */}
//         <div className="flex flex-col justify-center absolute inset-x-0  min-h-full"></div>
//       </div>
//     </>
//   );
// };
// export default Home;

// const Home = () => {
//   return (
//     <>
//       <div className="md:relative w-screen h-screen">
//         <div className="flex flex-col justify-center absolute inset-x-0  min-h-full">
//           <div className=" min-w-full h-[115vh] scale-x-[110%] flex justify-center items-center bg-[#0E0A17] rounded-b-full rounded-t-full translate-y-[5%]">
//             <div className="absolute inset-0 scale-70 translate-y-[-25%] z-1 scale-x-[100%] ">
//               <Light />
//             </div>

//             <div className="absolute z-9 translate-y-[10%]">
//               <Image src={border} alt="border" width={1150} height={5000} />
//             </div>

//             <div className="absolute z-8 ">
//               <Image
//                 src={Particel}
//                 alt="Particel"
//                 width={1150}
//                 height={5000}
//                 layout="responsice"
//                 className="scale-[150%]"
//               />
//             </div>
//             <div className="absolute inset-0 z-11 top-[53%] ">
//               <div className="flex-col flex justify-center items-center">
//                 <h1 className="font-bold text-center text-white md:text-[3rem] md:w-[19vw] mb-2">
//                   Achievements Board
//                 </h1>
//                 <div className="border-1 bg-gradient-to-b from-[#140F2A] to-[#332A55] rounded-3xl font-light text-white p-2">
//                   <button className=" ">Selengkapnya</button>
//                 </div>
//               </div>
//             </div>

//             <div className="absolute md:h-full md:w-full z-14">
//               {LampuData.map((item, index) => {
//                 const slot = LampuSlots[index];
//                 return (
//                   <div
//                     key={index}
//                     className="absolute"
//                     style={{
//                       top: slot.top,
//                       left: slot.left,
//                       transform: "translate(-50%, -50%)",
//                     }}
//                   >
//                     <Lampu key={index} image={item.image} />
//                   </div>
//                 );
//               })}
//             </div>

//             {/* ini komponent */}
//             <div className="absolute h-full w-full z-11">
//               {BoardData.map((item, index) => {
//                 const slot = boardSlots[index];

//                 return (
//                   <div
//                     key={index}
//                     className="absolute"
//                     style={{
//                       top: slot.top,
//                       left: slot.left,
//                       transform: "translate(-50%, -50%)",
//                     }}
//                   >
//                     <Board data={item} />
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//           <div className="relative flex justify-center top-[45vh] w-full border-1 z-10 h-[10vh] items-center overflow-hidden">
//             <Marquee direction="left">
//               <div className="flex gap-20 ">
//                 {LogoData.map((item, index) => (
//                   <Logo key={index} icon={item.icon} />
//                 ))}
//               </div>
//             </Marquee>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };
// export default Home;
