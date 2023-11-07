import { TSvgComponent } from 'svgComponent';
import CalendarToday from './calendar_today.svg';
import GoogleLogo from './google_logo.svg';
import KakaoLogo from './kakao_logo.svg';
import EmptyProfile from './empty_profile.svg';
import Setting from './setting.svg';

const iconMap: { [key: string]: TSvgComponent } = {
  CalendarToday,
  GoogleLogo,
  KakaoLogo,
  EmptyProfile,
  Setting,
};

export function getIcons(name: string): TSvgComponent {
  return iconMap[name];
}
