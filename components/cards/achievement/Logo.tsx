import { LogoType } from "@/types";
import Image from "next/image";
const Logo: React.FC<LogoType> = ({ icon }) => {
  return (
    <div className="ml-6 flex items-center  border-x-2 w-[] w-[15vw] justify-center ">
      <Image
        src={icon}
        alt=""
        width={100}
        height={100}
        className=" border-white px-3 "
      />
    </div>
  );
};
export default Logo;
