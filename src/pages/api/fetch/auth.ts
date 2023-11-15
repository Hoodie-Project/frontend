import { IKakaoToken, IGoogleToken } from '@/src/models/auth';

const BASE_URL = 'https://server.hoodiev.com/api';

export async function postTokenToServer(res: IKakaoToken | IGoogleToken, url: string) {
  const response = await fetch(`${BASE_URL}` + `${url}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(res),
  });

  const data = await response.json();
  return data;
}
