import { IKakaoToken, IGoogleToken } from '@/src/models/auth';

export async function postTokenToServer(res: IKakaoToken | IGoogleToken, url: string) {
  const response = await fetch(url, {
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
