import { IKakaoToken, IGoogleToken } from '@/src/models/auth';
import { BASE_URL } from '@/src/pages/api/fetch/const';
import { useAuthStore } from '@/src/zustand/auth';

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

export function logout() {
  const { clearAuth } = useAuthStore();

  clearAuth(); // Zustand 상태 초기화
  document.cookie = 'refreshToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'; // 쿠키 삭제
  window.location.href = '/auth'; // 로그인 페이지로 리디렉션
}
