import Star from '@/components/svg/events/start';
import EventCardContents from '@/core/components/event-card';
import TextEventComponent from '@/core/components/text-events';
import { eventCardData } from '@/configs/event.config';
import BackdropEvents from '@/components/svg/events/backdropEvents';

const EventsComponents: React.FC = () => {
  return (
    <main className="w-full min-h-screen">
      <div className="container mx-auto px-4 py-8 max-w-7xl flex flex-col items-center relative z-2">
        <div className="flex items-center justify-center gap-2 bg-gradient-to-b from-[#493582] to-[#472F8C66] border border-gray-200 rounded-full px-6 py-3 md:px-12 md:py-4 z-2">
          <Star />
          <h1 className="font-bold text-white text-lg md:text-2xl">THE LATEST</h1>
        </div>
        <div className="absolute inset-0 -translate-x-23 scale-105 z-1">
          <BackdropEvents />
        </div>
        <div className="my-8 md:my-12 flex justify-center items-center w-full z-2">
          <TextEventComponent />
        </div>
        <div className="w-full flex flex-col items-center gap-8 z-2">
          {eventCardData.map((items, key) => (
            <EventCardContents key={key} data={items} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default EventsComponents;
