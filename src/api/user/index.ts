import request from '@/request/request';

interface LoginParams {
  phone: string;
  password: string;
}

interface UserInfoParams {
  user_id: string;
}

export const login = (params: LoginParams) => {
  return request.post('/v1/auth/login', params);
};

export const logout = () => {
  return request.post('/v1/auth/logout');
};

// 获取用户信息
export const getUserInfo = () => {
  return request.get('/v1/user/info');
};
