import { useAuthStore } from '@/src/zustand/auth';
import { BASE_URL } from '@/src/pages/api/fetch/const';

async function fetchWithToken(url: string, options: RequestInit = {}) {
  const { accessToken, setAccessToken, clearAuth } = useAuthStore.getState();

  // accessToken을 헤더에 추가
  const headers = new Headers(options.headers);
  if (accessToken) {
    headers.append('Authorization', `Bearer ${accessToken}`);
  }

  const response = await fetch(`${BASE_URL}` + `${url}`, { ...options, headers });

  // 401 오류 처리
  if (response.status === 401) {
    try {
      const refreshResponse = await fetch(`${BASE_URL}` + '/refreshToken', {
        method: 'POST',
        credentials: 'include', // 쿠키를 포함시킴
      });

      if (!refreshResponse.ok) {
        throw new Error('Token refresh failed');
      }

      const { accessToken: newAccessToken } = await refreshResponse.json();
      setAccessToken(newAccessToken);

      // 재요청
      headers.set('Authorization', `Bearer ${newAccessToken}`);
      return fetch(`${BASE_URL}` + `${url}`, { ...options, headers });
    } catch (error) {
      clearAuth();
      window.location.href = '/auth';
      return Promise.reject(error);
    }
  }

  return response;
}

export { fetchWithToken };
