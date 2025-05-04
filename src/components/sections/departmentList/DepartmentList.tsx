import Image from "next/image";
import logoAtas from "@/components/svg/departmentAsset/logoAtas.svg";
import logoBawah from "@/components/svg/departmentAsset/logoBawah.svg";
import logoKananBawah from "@/components/svg/departmentAsset/logoKananBawah.svg";

import DepartmentList from "@/components/cards/departmentCard/DepartmentList";

const Department_List = () => {
  return (
    <main className="w-screen h-screen relative bg-[#0D0C1D] flex justify-center items-center">

      {/* Flayer */}
      

      {/* Background Decorations */}
      <div className="gambar">
        <Image 
          src={logoAtas} 
          alt="Logo Atas" 
          className="absolute w-60 top-0 left-0" 
        />
        <Image 
          src={logoBawah} 
          alt="Logo Bawah" 
          className="absolute w-80 bottom-0 left-0" 
        />
        <Image 
          src={logoKananBawah} 
          alt="Logo Kanan Bawah" 
          className="absolute w-80 bottom-0 right-0" 
        />
      </div>

      {/* Main Content */}
      <div className="w-[80%] z-1">
        <DepartmentList />
      </div>
    </main>
  );
};

export default Department_List;