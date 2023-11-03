import React from 'react';
import WhiteButton from '../common/WhiteButton';
import { getIcons } from '@/src/assets/icons/getIcons';

function GoogleAuthButton() {
  const GoogleIcon = getIcons('GoogleLogo');

  return <WhiteButton Icon={GoogleIcon}>Sign in using Google</WhiteButton>;
}

export default GoogleAuthButton;
