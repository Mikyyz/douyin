import request from "@/request/request";
import { ApiResponse, RequestPromise } from "@/request/types";

export const getVideoList = (): RequestPromise<ApiResponse> => {
  return request.get("/v1/video/list");
};
