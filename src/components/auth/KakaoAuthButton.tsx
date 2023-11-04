import React from 'react';
import WhiteButton from '../common/WhiteButton';
import { getIcons } from '@/src/assets/icons/getIcons';

function KakaoAuthButton() {
  const KakaoIcon = getIcons('KakaoLogo');

  const handleKakaoLogin = () => {
    const kakaoAuthUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_KAKAO_AUTH_KEY}&redirect_uri=${process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI}&response_type=code`;
    window.location.href = kakaoAuthUrl;
  };

  return (
    <WhiteButton Icon={KakaoIcon} handleClick={handleKakaoLogin}>
      Sign in using Kakao
    </WhiteButton>
  );
}

export default KakaoAuthButton;
