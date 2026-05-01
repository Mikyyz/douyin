import request from '@/request/request';

export const getVideoList = () => {
  return request.get('/video/list');
};