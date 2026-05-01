import { clearToken } from '../plugins/auth';
import { TOKEN_EXPIRED } from '@/contants/code';
import { useLoginModalStore } from '@/store/useLoginModalStore';
import { LOGIN_MODAL_TITLE } from '@/contants';
export const handleBusinessError = (code: number, message: string) => {
  switch (code) {
    case TOKEN_EXPIRED:
      clearToken();
      useLoginModalStore
        .getState()
        .openLoginModal(LOGIN_MODAL_TITLE.login);
      break;

    default:
      console.error(message);
  }
};

export const handleHttpError = (status?: number) => {
  switch (status) {
    case 401:
      console.error('登录失效');
      break;
    case 403:
      console.error('无权限');
      break;
    case 500:
      console.error('服务器错误');
      break;
    default:
      console.error('网络异常');
  }
}