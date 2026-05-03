import { DEFAULT_DATETIME_FORMAT } from "@/contants";
import dayjs from "dayjs";

export const replacePathParams = (url: string, params: Record<string, any>) => {
  if (!params) {
    return url;
  }
  return Object.keys(params).reduce((path, key) => {
    return path.replace(`:${key}`, params[key]);
  }, url);
}

// 转换时间戳
export const formatTime = (timestamp: number, format = DEFAULT_DATETIME_FORMAT) => {
  return dayjs(timestamp).format(format);
}