import "./core/interceptor";
import "./plugins/defaultAuthExpiredHandler";

import instance from "./core/axios";

import { ApiResponse, RequestConfig, RequestPromise } from "./types";

class Request {
  get<T = any>(url: string, config?: RequestConfig): RequestPromise<T> {
    return instance.get<any, ApiResponse<T>>(url, config);
  }

  post<T = any>(
    url: string,
    data?: any,
    config?: RequestConfig,
  ): RequestPromise<T> {
    return instance.post<any, ApiResponse<T>>(url, data, config);
  }

  put<T = any>(
    url: string,
    data?: any,
    config?: RequestConfig,
  ): RequestPromise<T> {
    return instance.put<any, ApiResponse<T>>(url, data, config);
  }

  delete<T = any>(url: string, config?: RequestConfig): RequestPromise<T> {
    return instance.delete<any, ApiResponse<T>>(url, config);
  }

  patch<T = any>(
    url: string,
    data?: any,
    config?: RequestConfig,
  ): RequestPromise<T> {
    return instance.patch<any, ApiResponse<T>>(url, data, config);
  }
}

export default new Request();
