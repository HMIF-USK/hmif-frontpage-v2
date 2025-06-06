'use client';
import 'swiper/css';
import Star from '@/components/svg/events/start';
import BackgroundEvent from '@/components/svg/events/background';
import CardEvent from '@/components/cards/event/Card';
import CapsEvent from '@/components/svg/events/Caps';
import { CardEventData } from '@/configs/app.config';
import { useState, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { CardEventSlots, CardEventSlotsShadows } from '@/components/helper/slot';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { Swiper, SwiperSlide } from 'swiper/react';
import CardEventMobile from '@/components/cards/event/CardMobile';

const Events: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'center',
    dragFree: true,
  });

  const isMobile = useIsMobile();

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => {
      const index = emblaApi.selectedScrollSnap();
      setCurrentIndex(index);
    };
    emblaApi.on('select', onSelect);
    onSelect();
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi]);

  return (
    <main className="relative h-full w-screen ">
      <div className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden p-8">
        <div className="absolute inset-0 flex items-center justify-center scale-[2] z-0 inset-shadow-2xs translate-y-[30px] border-b-10 ">
          <BackgroundEvent />
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
          <div className="flex items-center justify-center gap-2 bg-gradient-to-b from-[#493582] to-[#472F8C66] border rounded-full px-6 py-3">
            <Star />
            <h1 className="font-bold text-white">THE LATEST</h1>
          </div>

          <h1 className="mt-1 sm:mt-2 md:mt-3 text-8xl sm:text-9xl md:text-10xl lg:text-11xl xl:text-12xl font-extrabold bg-gradient-to-b from-white to-[#5A4A7A] bg-clip-text text-transparent leading-tight sm:leading-snug md:leading-normal text-center">
            EVENT
          </h1>

          {!isMobile && (
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 sm:top-[20vh] md:top-[25vh] z-[2] scale-85 sm:scale-90 md:scale-100">
              <CapsEvent />
            </div>
          )}

          <div className="w-[100vw] h-[100vh] flex justify-center items-center relative pt-[3rem] ">
            {!isMobile && (
              <div className="flex absolute z-10 bottom-1/2 left-40">
                <button
                  onClick={() => emblaApi?.scrollPrev()}
                  className="text-white border rounded-full p-5 bg-gradient-to-r from-[#493582] via-[#FFFFFF1A] to-[#493582] hover:bg-opacity-80 transition-all"
                >
                  <ArrowLeft />
                </button>
              </div>
            )}

            <div className="relative w-[60%]">
              {!isMobile && (
                <div className="absolute inset-0 flex justify-between z-[1] top-13 w-full">
                  {CardEventData.slice(0, 3).map((items, key) => {
                    const shadowIndex = (currentIndex + key) % 3;

                    return (
                      <div
                        key={key}
                        className={`w-[20vw] h-[40vh] rounded-xl backdrop-blur-2xl  ease-in-out ${CardEventSlotsShadows[shadowIndex]}`}
                      >
                        <div className="w-full h-full rounded-xl p-2 bg-[#393054] bg-gradient-to-b from-[#000000]/50 via-[#393054] to-[#393054]/70">
                          <div className="flex-col p-2 opacity-50">
                            <h1 className="font-semibold text-[2rem] text-white">{items.title}</h1>
                            <h1 className="font-semibold text-white">{items.desc}</h1>
                          </div>
                          <div className="h-[20vh] bg-[#EBE8F5]/20 rounded-lg"></div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

              <div className="overflow-hidden relative z-[3]" ref={emblaRef}>
                {!isMobile && (
                  <div className="flex">
                    {CardEventData.slice(3, 6).map((items, key) => {
                      const cardIndex = (currentIndex + key) % 3;

                      return (
                        <div
                          className={`w-[33.333%] h-[70vh] flex items-center justify-center  ease-in-out ${CardEventSlots[cardIndex]}`}
                          key={key}
                        >
                          <CardEvent data={items} key={key} />
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>

            {isMobile && (
              <main className="w-full p-4 ">
                <Swiper
                  spaceBetween={10}
                  slidesPerView={1}
                  onSlideChange={() => console.log('slide change')}
                  onSwiper={(swiper) => console.log(swiper)}
                >
                  {CardEventData.map((items, key) => {
                    console.log(`Data: ${items}`);
                    return (
                      <SwiperSlide key={key}>
                        <CardEventMobile data={items} />
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </main>
            )}

            {!isMobile && (
              <div className="flex absolute z-10 right-40 bottom-1/2">
                <button
                  onClick={() => emblaApi?.scrollNext()}
                  className="text-white border rounded-full p-5 bg-gradient-to-b from-[#493582] via-[#FFFFFF1A] to-[#493582] hover:bg-opacity-80 transition-all"
                >
                  <ArrowRight />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Events;
