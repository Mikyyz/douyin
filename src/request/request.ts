import "./core/interceptor";

import instance from "./core/axios";

import { RequestConfig, RequestPromise } from "./types";

class Request {
  get<T = any>(url: string, config?: RequestConfig): RequestPromise<T> {
    return instance.get(url, config);
  }

  post<T = any>(
    url: string,
    data?: any,
    config?: RequestConfig,
  ): RequestPromise<T> {
    return instance.post(url, data, config);
  }

  put<T = any>(
    url: string,
    data?: any,
    config?: RequestConfig,
  ): RequestPromise<T> {
    return instance.put(url, data, config);
  }

  delete<T = any>(url: string, config?: RequestConfig): RequestPromise<T> {
    return instance.delete(url, config);
  }

  patch<T = any>(
    url: string,
    data?: any,
    config?: RequestConfig,
  ): RequestPromise<T> {
    return instance.patch(url, data, config);
  }
}

export default new Request();
