import "axios";

declare module "axios" {
  export interface AxiosRequestConfig<_D = any> {
    withToken?: boolean;
    showError?: boolean;
    loading?: boolean;
    cache?: boolean;
    dedupe?: boolean;
    retry?: number;
  }
}
