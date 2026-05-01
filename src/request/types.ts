import {
  AxiosRequestConfig,
  InternalAxiosRequestConfig,
} from 'axios';

export interface ApiResponse<T = any> {
  status_code: number;
  msg: string;
  data: T;
}

export interface RequestConfig<D = any> extends InternalAxiosRequestConfig<D> {
  /**
   * 是否携带 token
   */
  withToken?: boolean;

  /**
   * 是否显示错误提示
   */
  showError?: boolean;

  /**
   * 是否开启 loading
   */
  loading?: boolean;

  /**
   * 是否缓存
   */
  cache?: boolean;

  /**
   * 请求去重
   */
  dedupe?: boolean;

  /**
   * 重试次数
   */
  retry?: number;
}

export type RequestPromise<T> = Promise<T>;