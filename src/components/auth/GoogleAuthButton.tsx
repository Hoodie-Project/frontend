import React from 'react';
import WhiteButton from '../common/WhiteButton';
import { getIcons } from '@/src/assets/icons/getIcons';

function GoogleAuthButton() {
  const GoogleIcon = getIcons('GoogleLogo');

  const handleGoogleLogin = () => {
    const googleAuthUrl =
      'https://accounts.google.com/o/oauth2/auth?' +
      `client_id=${process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}&` +
      `redirect_uri=${process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI}&` +
      `response_type=code&` +
      `scope=email profile&` +
      `access_type=offline`;
    window.location.href = googleAuthUrl;
  };

  return (
    <WhiteButton Icon={GoogleIcon} handleClick={handleGoogleLogin}>
      Sign in using Google
    </WhiteButton>
  );
}

export default GoogleAuthButton;
