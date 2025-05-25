import { BoardTypes, LampuType, LogoType, CardEventType } from '@/configs/app.config';

export interface BoardTypesProps {
  data: BoardTypes;
}

export interface LampuTypeProps {
  data: LampuType;
}

export interface LogoTypeProps {
  data: LogoType;
}

export interface CardEventTypeProps {
  index: number;
  activeIndex: number;
  data: CardEventType;
}
