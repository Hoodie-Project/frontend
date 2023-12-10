import React from 'react';
import styled from 'styled-components';
import { getBackgroundSvg } from '@/src/assets/background/getBackgroundSvg';

function AuthBackGround() {
  const svgs = [
    'leftTopFillCircle',
    'rightBottomFillCircle',
    'leftMiddleFillCircle',
    'rightMiddleFillCircle',
    'leftTopStrockCircle',
    'rightBottomStrockCircle',
  ];

  return (
    <AuthLayout>
      {svgs.map((svgName) => {
        const { SvgComponent, css } = getBackgroundSvg(svgName);
        return (
          <BackgroundSvg key={svgName} $css={css}>
            {SvgComponent && <SvgComponent />}
          </BackgroundSvg>
        );
      })}
    </AuthLayout>
  );
}

export default AuthBackGround;

const AuthLayout = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const BackgroundSvg = styled.div<{
  $css: {
    top?: string;
    right?: string;
    bottom?: string;
    left?: string;
    zIndex?: string;
  };
}>`
  position: absolute;
  top: ${(props) => props.$css.top};
  left: ${(props) => props.$css.left};
  right: ${(props) => props.$css.right};
  bottom: ${(props) => props.$css.bottom};
  z-index: ${(props) => props.$css.zIndex};
`;
