import type { NextApiRequest, NextApiResponse } from 'next';
import { IGoogleToken } from '@/src/models/auth';
import { postTokenToServer } from '@/src/pages/api/fetch/auth';

// URLSearchParams type error를 위해 무조건적인 값임을 나타내기 위해 선언
const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!;
const clientSecret = process.env.GOOGLE_AUTH_CLIENT_SECRET!;
const redirectUri = process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI!;

async function exchangeCodeForToken(code: string) {
  const response: IGoogleToken = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      code: code,
      client_id: clientId,
      client_secret: clientSecret,
      redirect_uri: redirectUri,
      grant_type: 'authorization_code',
    }),
  }).then(res => res.json());

  return response;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { code } = req.query;

  if (code && typeof code === 'string') {
    try {
      const tokenResponse = await exchangeCodeForToken(code);
      console.log(tokenResponse);

      const serverRes = await postTokenToServer(tokenResponse, '/google/signin');
      console.log('서버 응답 : ', serverRes);

      // 환경에 따라 리다이렉트 URL 설정
      const redirectURL = process.env.NODE_ENV === 'production' ? 'https://hoodiev.com:3000' : 'http://localhost:3000';
      res.redirect(302, redirectURL);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: '서버 오류가 발생했습니다.' });
    }
  } else {
    res.status(400).json({ error: 'access_token이 전달되지 않았습니다.' });
  }
}
