import Star from '@/components/svg/events/start';
import EventCardContents from '@/core/components/event-card';
import TextEventComponent from '@/core/components/text-events';
import { eventCardData } from '@/configs/event.config';

const EventsComponents: React.FC = () => {
  return (
    <main className="w-full h-auto flex flex-col items-center relative z-0 overflow-x-hidden">
      <div className="absolute z-[-1] w-full overflow-hidden h-full">
        <svg
          className="w-full h-auto"
          viewBox="0 0 1455 2316"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_f_0_1)">
            <ellipse cx="719.5" cy="921" rx="866.5" ry="722" fill="url(#paint0_linear_0_1)" />
          </g>
          <g filter="url(#filter1_f_0_1)">
            <ellipse cx="674" cy="1192.5" rx="1062" ry="839.5" fill="#070707" />
          </g>
          <defs>
            <filter
              id="filter0_f_0_1"
              x="-583"
              y="-237"
              width="2605"
              height="2316"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="218" result="effect1_foregroundBlur_0_1" />
            </filter>
            <filter
              id="filter1_f_0_1"
              x="-672"
              y="69"
              width="2692"
              height="2247"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="142" result="effect1_foregroundBlur_0_1" />
            </filter>
            <linearGradient
              id="paint0_linear_0_1"
              x1="719.5"
              y1="199"
              x2="719.5"
              y2="1643"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.72" stop-color="#7300FF" />
              <stop offset="1" stop-color="#B76BC6" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className=" w-full flex flex-col py-10 lg:py-20 items-center">
        <div className="flex  items-center justify-center gap-2 bg-gradient-to-b from-[#493582] to-[#472F8C66] border border-gray-200 rounded-full px-6 py-3 md:px-12 md:py-4">
          <Star />
          <h1 className="font-bold text-white text-sm md:text-2xl">THE LATEST</h1>
        </div>
        <div className="my-8 md:my-12 flex justify-center items-center w-[250px] lg:w-[800px] z-2">
          <TextEventComponent />
        </div>
        <div className="w-full flex flex-col items-center gap-8 ">
          {eventCardData.map((items, key) => (
            <EventCardContents key={key} data={items} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default EventsComponents;
