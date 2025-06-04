import Star from '@/components/svg/events/start';
const EventsComponents: React.FC = () => {
  return (
    <main className="w-full h-screen">
      <div className="flex justify-center items-center h-full w-full flex-col">
        <div className="flex items-center justify-center gap-2 bg-gradient-to-b from-[#493582] to-[#472F8C66] border rounded-full px-12 py-3">
          <Star />
          <h1 className="font-bold text-white text-[1.3rem]">THE LATEST</h1>
        </div>
        <div className="">
          {[1, 2, 3, 4].map((key) => (
            <h1
              className="mt-2 text-[10rem] font-extrabold bg-gradient-to-b from-white to-[#5A4A7A] bg-clip-text text-transparent leading-none text-center"
              key={key}
            >
              EVENTS
            </h1>
          ))}
        </div>
      </div>
    </main>
  );
};

export default EventsComponents;
