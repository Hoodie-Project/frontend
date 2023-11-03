import leftTopFillCircle from './Ellipse1.svg';
import rightBottomFillCircle from './Ellipse2.svg';
import leftMiddleFillCircle from './Ellipse3.svg';
import rightMiddleFillCircle from './Ellipse4.svg';
import leftTopStrockCircle from './Ellipse5.svg';
import rightBottomStrockCircle from './Ellipse6.svg';
import { TSvgComponent } from 'svgComponent';

type SvgMapType = {
  [key: string]: TSvgComponent;
};

type CssType = {
  [key: string]: {
    top?: string;
    right?: string;
    bottom?: string;
    left?: string;
    zIndex?: string;
  };
};

const svgMap: SvgMapType = {
  leftTopFillCircle,
  rightBottomFillCircle,
  leftMiddleFillCircle,
  rightMiddleFillCircle,
  leftTopStrockCircle,
  rightBottomStrockCircle,
};

const cssMap: CssType = {
  leftTopFillCircle: { top: '0rem', left: '0rem', zIndex: '1' },
  rightBottomFillCircle: { bottom: '-1rem', right: '0rem', zIndex: '1' },
  leftMiddleFillCircle: { top: '35rem', left: '30rem' },
  rightMiddleFillCircle: { top: '2.8125rem', right: '20rem' },
  leftTopStrockCircle: { top: '0rem', left: '0rem' },
  rightBottomStrockCircle: { bottom: '-1rem', right: '0rem' },
};

export function getBackgroundSvg(name: string): {
  SvgComponent: TSvgComponent;
  css: {
    top?: string;
    right?: string;
    bottom?: string;
    left?: string;
    zIndex?: string;
  };
} {
  const SvgComponent = svgMap[name];
  const css = cssMap[name];

  return { SvgComponent, css };
}
