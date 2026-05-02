import request from '@/request/request';

export const login = () => {
  return request.get('/v1/auth/login');
};
