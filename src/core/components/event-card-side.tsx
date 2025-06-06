interface EventCardItem1 {
  about: string;
}
const EventCardSide: React.FC<{ data: EventCardItem1 }> = ({ data }) => {
  return (
    <main className=" w-full h-full flex items-center justify-center bg-gradient-to-l from-[#873AE3] to-[#4A207D] rounded-lg py-4 font-bold">
      <p className=" text-xl lg:text-3xl">{data.about}</p>
    </main>
  );
};

export default EventCardSide;
