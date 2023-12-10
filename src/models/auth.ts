export interface IKakaoToken {
  token_type: string;
  access_token: string;
  refresh_token: string;
  id_token: string;
  expires_in: number;
  refresh_token_expires_in: string;
  scope: string;
}
export interface IGoogleToken {
  token_type: string;
  access_token: string;
  refresh_token: string;
  expires_in: number;
  scope: string;
}
