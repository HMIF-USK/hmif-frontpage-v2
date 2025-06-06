import { BoardTypes, LampuType, LogoType, CardEventType } from '@/configs/app.config';
import { eventCardTypes } from '@/configs/event.config';

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
  data: CardEventType;
}

export interface EventCardTypesProps {
  data: eventCardTypes;
}
