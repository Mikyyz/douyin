import request from '@/request/request';

interface LoginParams {
  phone: string;
  password: string;
}

export const login = (params: LoginParams) => {
  return request.post('/v1/auth/login', params);
};
