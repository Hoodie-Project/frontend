import { TSvgComponent } from 'svgComponent';
import CalendarToday from './calendar_today.svg';
import CalendarMonth from './calendar_month.svg';
import GoogleLogo from './google_logo.svg';
import KakaoLogo from './kakao_logo.svg';
import EmptyProfile from './empty_profile.svg';
import Setting from './setting.svg';
import ArrowLeft from './arrow-left.svg';
import ArrowRight from './arrow-right.svg';
import Hamburger from './hamburger.svg';

const iconMap: { [key: string]: TSvgComponent } = {
  CalendarToday,
  CalendarMonth,
  GoogleLogo,
  KakaoLogo,
  EmptyProfile,
  Setting,
  ArrowLeft,
  ArrowRight,
  Hamburger,
};

export function getIcons(name: string): TSvgComponent {
  return iconMap[name];
}
