import Card from '@/components/svg/inforclub/card';
// import { CardInforClubTypes } from '@/configs/app.config';
import { CardInforClubData } from '@/configs/app.config';

const CardInforClub: React.FC = () => {
  return (
    <main>
      {/* <div className="border-2 border-white drop-shadow-xl/50 h-[40vh] w-[20vw] p-4 flex-col"> */}
      {CardInforClubData.map((items, key) => (
        <div
          key={key}
          className="border-2 border-white drop-shadow-xl/50 h-[40vh] w-[20vw] p-4 flex-col top-80"
        >
          <h1 className="font-bold text-[2rem] w-[10vw]">{items.title}</h1>
          <p>{items.desk}</p>
        </div>
      ))}
      {/* </div> */}
    </main>
  );
};

export default CardInforClub;

{
  /* <h1 className="font-bold text-[2rem] w-[10vw]">{card.title}</h1>
        <p>{card.desk}</p> */
}
