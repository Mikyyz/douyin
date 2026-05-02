import request from "@/request/request";

export const getVideoList = () => {
  return request.get("/v1/video/list");
};
