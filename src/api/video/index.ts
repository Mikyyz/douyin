import request from '@/request/request';

export const getVideoList = () => {
  return request.get('/api/v1/video/list');
};