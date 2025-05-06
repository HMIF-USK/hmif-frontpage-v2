import Pattern from '@/components/svg/contact/pattern';
import { ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <main className="w-full h-[58.2vh] bg-[#421F69] my-[10vh] rounded-t-[2vw] relative flex ">
      <div className="flex justify-center items-center w-full h-full flex-col">
        <h1 className="font-normal text-5xl">Lorem Ipsum</h1>
        <p className="font-light my-4">lorem ipsum</p>

        <div className="gap-10 flex items-center justify-center my-10">
          <div className="flex justify-center items-center">
            <button className=" w-[10vw] p-4 bg-[#7300FF] rounded-lg font-semibold">CONTACT</button>
            <div className="bg-[#7300FF] h-[7vh] w-[3vw] flex justify-center items-center rounded-lg">
              <ArrowRight />
            </div>
          </div>
          <div className="flex justify-center items-center">
            <button className=" w-[12vw] p-4 bg-white text-[#7300FF] rounded-lg font-semibold">
              SEND MESSAGE
            </button>
            <div className="bg-white h-[7vh] w-[3vw] flex justify-center items-center rounded-lg text-[#7300FF]">
              <ArrowRight />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute translate-x-[1%]">
        <Pattern />
      </div>
    </main>
  );
};
export default Contact;
