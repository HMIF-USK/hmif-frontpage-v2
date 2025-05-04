import Image from "next/image";
import logoAtas from "@/components/svg/departmentAsset/logoAtas.svg";
import logoBawah from "@/components/svg/departmentAsset/logoBawah.svg";
import logoKananBawah from "@/components/svg/departmentAsset/logoKananBawah.svg";
import BlurBawah from "@/components/svg/departmentAsset/Blur.svg";
import BlurAtas from "@/components/svg/departmentAsset/Blur.svg";
import DepartmentList from "@/components/cards/departmentCard/DepartmentList";
import Background from "@/components/svg/departmentAsset/BackgroundGaris.svg";

const Department_List = () => {
  return (
    <main className="w-screen h-screen relative bg-[#0D0C1D] flex justify-center items-center overflow-hidden">

      {/* Flayer */}
      
      {/* Background Decorations */}
      <div className="gambar">

        <Image 
          src={Background} 
          alt="Background" 
          className="absolute w-screen top-0 left-0 opacity-70"
        />

        <Image 
          src={BlurAtas} 
          alt="Blur Atas" 
          className="absolute top-[-150px] left-0 w-full opacity-50"
        />

        <Image 
          src={logoAtas} 
          alt="Logo Atas" 
          className="absolute w-50 top-0 left-0" 
        />
        <Image 
          src={logoBawah} 
          alt="Logo Bawah" 
          className="absolute w-60 bottom-[-80px] left-0" 
        />
        <Image 
          src={logoKananBawah} 
          alt="Logo Kanan Bawah" 
          className="absolute w-60 bottom-0 right-0" 
        />

        <Image 
          src={BlurBawah} 
          alt="Blur Bawah" 
          className="absolute bottom-[-150px] left-0 w-full " 
        />

      </div>

      {/* Main Content */}
      <div className="w-[80%] h-[70%] z-1">
        <DepartmentList />
      </div>  
    </main> 
  );
};

export default Department_List;