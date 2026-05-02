import { TOKEN_EXPIRED } from "@/contants/code";

import type { ApiResponse } from "../types";
import { clearToken } from "../plugins/auth";
import { getAuthExpiredHandler } from "../plugins/hooks";

import { RequestError } from "./requestError";

const triggerAuthExpired = (context: {
  reason: "biz" | "http";
  bizCode?: number;
  httpStatus?: number;
  message?: string;
}) => {
  clearToken();
  getAuthExpiredHandler()?.(context);
};

export const createBusinessError = (params: {
  code: number;
  message: string;
  response: ApiResponse<any>;
}) => {
  if (params.code === TOKEN_EXPIRED) {
    triggerAuthExpired({
      reason: "biz",
      bizCode: params.code,
      message: params.message,
    });
  }

  return new RequestError({
    kind: "biz",
    message: params.message,
    bizCode: params.code,
    response: params.response,
  });
};

export const createHttpError = (params: {
  status: number;
  message: string;
  originalError?: unknown;
}) => {
  if (params.status === TOKEN_EXPIRED) {
    triggerAuthExpired({
      reason: "http",
      httpStatus: params.status,
      message: params.message,
    });
  }

  return new RequestError({
    kind: "http",
    message: params.message,
    httpStatus: params.status,
    originalError: params.originalError,
  });
};

export const createNetworkError = (params: {
  message: string;
  originalError?: unknown;
}) => {
  return new RequestError({
    kind: "network",
    message: params.message,
    originalError: params.originalError,
  });
};

export const createCancelError = (params: {
  message: string;
  originalError?: unknown;
}) => {
  return new RequestError({
    kind: "cancel",
    message: params.message,
    originalError: params.originalError,
  });
};
