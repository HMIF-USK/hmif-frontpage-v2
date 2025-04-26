// import Logo from "@/components/cards/achievement/Logo";
import Star from '@/components/svg/events/start';
import BackgroundEvent from '@/components/svg/events/background';
import Eki from '@/components/svg//events/eki';
import N from '@/components/svg/events/n';
import V from '@/components/svg/events/v';
import EKa from '@/components/svg/events/ekn';
import T from '@/components/svg/events/t';

const Events: React.FC = () => {
  return (
    <div className="relative h-scren w-screen">
      <div className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center scale-[1.27] z-0 inset-shadow-2xs">
          <BackgroundEvent />
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
          <div className="flex items-center justify-center gap-2 bg-gradient-to-b from-[#493582] to-[#472F8C66] border rounded-full px-6 py-3">
            <Star />
            <h1 className="font-bold text-white">THE LATEST</h1>
          </div>

          <h1 className="mt-2 text-[15rem] font-bold bg-gradient-to-b from-white to-[#5A4A7A] bg-clip-text text-transparent leading-none text-center">
            EVENT
          </h1>

          {/* Z-index */}
          <div className="">
            <div className="bottom-[40%] left-[10%] absolute ">
              <Eki />
            </div>

            <div className="absolute left-[10%] top-[60%]">
              <N />
            </div>

            <div className="absolute left-[40%] bottom-[30%]">
              <V />
            </div>

            <div className="absolute left-[70%] bottom-[47%]">
              <EKa />
            </div>

            <div className="absolute left-[73%] top-[70%]">
              <T />
            </div>
          </div>

          {/* Main Konten */}
          <div className="">
            <div className=" w-[30vw] h-[60vh] flex justify-center items-center">
              <div className="border-2 h-[40vh] w-[30vw] rounded-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Events;
