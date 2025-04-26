import Image from "next/image";
import { LampuType } from "@/types";
const Lampu: React.FC<LampuType> = ({ image }) => {
  return (
    <div>
      <Image src={image} alt="" width={46} height={26}></Image>
    </div>
  );
};

export default Lampu;
