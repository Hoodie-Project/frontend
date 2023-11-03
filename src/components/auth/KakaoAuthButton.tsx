import React from 'react';
import WhiteButton from '../common/WhiteButton';
import { getIcons } from '@/src/assets/icons/getIcons';

function KakaoAuthButton() {
  const KakaoIcon = getIcons('KakaoLogo');

  return <WhiteButton Icon={KakaoIcon}>Sign in using Kakao</WhiteButton>;
}

export default KakaoAuthButton;
