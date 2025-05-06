import Caps from '@/components/svg/inforclub/caps';
import CardInforClub from '@/components/components/inforclub/card/cardInforClub';
import { CardInforClubTypeProps } from '@/configs/app.config';

const inforclub: React.FC = () => {
  return (
    <main className="h-full w-full">
      <div className="flex justify-center items-center">
        <div className="relative z-0">
          <Caps />
        </div>
        <div className="absolute z-1 ">
          <CardInforClub />
        </div>
      </div>
    </main>
  );
};

export default inforclub;
