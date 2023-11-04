import type { NextApiRequest, NextApiResponse } from 'next';
import { ITokenResponse } from '@/src/models/auth';

async function getTokenFromKakao(authCode: string) {
  const tokenUrl = `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=${process.env.NEXT_PUBLIC_KAKAO_AUTH_KEY}&client_secret=${process.env.KAKAO_AUTH_SECRET_KEY}&redirect_uri=${process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI}&code=${authCode}`;
  const response: ITokenResponse = await fetch(tokenUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  }).then(res => res.json());
  return response;
}

async function postTokenToServer(res: ITokenResponse) {
  const response = await fetch('/api/user/signin/kakao', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(res),
  });

  if (!response.ok) {
    throw new Error('서버로부터 응답을 받지 못했습니다.');
  }

  const data = await response.json();
  return data;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { code } = req.query;

  if (code && typeof code === 'string') {
    try {
      const tokenResponse = await getTokenFromKakao(code);
      console.log(tokenResponse);

      // 서버 연결 시 서버 응답 확인 후 redirect해주는 코드
      // const serverRes = postTokenToServer(tokenResponse);
      // if (serverRes === 'ok'){
      //   res.redirect(302, 'http://localhost:3000');
      // }

      res.redirect(302, 'http://localhost:3000');
    } catch (error) {
      res.status(500).json({ error: '서버 오류가 발생했습니다.' });
    }
  } else {
    res.status(400).json({ error: 'code가 없습니다.' });
  }
}
