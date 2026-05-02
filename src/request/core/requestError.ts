import type { ApiResponse } from "../types";

export type RequestErrorKind = "biz" | "http" | "network" | "cancel";

export interface RequestErrorOptions {
  kind: RequestErrorKind;
  message: string;
  bizCode?: number;
  httpStatus?: number;
  response?: ApiResponse<any>;
  originalError?: unknown;
}

export class RequestError extends Error {
  kind: RequestErrorKind;
  bizCode?: number;
  httpStatus?: number;
  response?: ApiResponse<any>;
  originalError?: unknown;

  constructor(options: RequestErrorOptions) {
    super(options.message);
    this.name = "RequestError";
    this.kind = options.kind;
    this.bizCode = options.bizCode;
    this.httpStatus = options.httpStatus;
    this.response = options.response;
    this.originalError = options.originalError;
  }
}

export const isRequestError = (error: unknown): error is RequestError => {
  return error instanceof RequestError;
};

