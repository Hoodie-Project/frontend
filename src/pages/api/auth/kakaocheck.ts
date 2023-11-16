import type { NextApiRequest, NextApiResponse } from 'next';
import { IKakaoToken } from '@/src/models/auth';
import { postTokenToServer } from '@/src/pages/api/fetch/auth';

async function getTokenFromKakao(authCode: string) {
  const tokenUrl = `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=${process.env.NEXT_PUBLIC_KAKAO_AUTH_KEY}&client_secret=${process.env.KAKAO_AUTH_SECRET_KEY}&redirect_uri=${process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI}&code=${authCode}&nonce=${process.env.NEXT_PUBLIC_KAKAO_NONCE}`;
  const response: IKakaoToken = await fetch(tokenUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  }).then(res => res.json());
  return response;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { code } = req.query;

  if (code && typeof code === 'string') {
    try {
      const tokenResponse = await getTokenFromKakao(code);
      console.log(tokenResponse);

      // 서버 연결 시 서버 응답 확인 후 redirect해주는 코드
      const serverRes = await postTokenToServer(tokenResponse, '/kakao/signin');
      console.log('서버 응답 : ', serverRes);

      // 환경에 따라 리다이렉트 URL 설정
      const redirectURL = process.env.NODE_ENV === 'production' ? 'https://hoodiev.com:3000' : 'http://localhost:3000';
      res.redirect(302, redirectURL);
    } catch (error) {
      res.status(500).json({ error: '서버 오류가 발생했습니다.' });
    }
  } else {
    res.status(400).json({ error: 'code가 없습니다.' });
  }
}
