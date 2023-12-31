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
import Plus from './plus.svg';
import Calendar31 from './calendar_31.svg';
import Clock from './clock.svg';
import DoubleQuote from './double_quote.svg';
import Refresh from './refresh.svg';
import X from './X.svg';
import Memo from './iconmonstr-note-14.svg';
import MenuDots from './iconmonstr-menu-dot-horizontal-thin.svg';

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
  Plus,
  Calendar31,
  Clock,
  DoubleQuote,
  Refresh,
  X,
  Memo,
  MenuDots,
};

export function getIcons(name: string): TSvgComponent {
  return iconMap[name];
}
