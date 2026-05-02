export type AuthExpiredReason = "biz" | "http";

export interface AuthExpiredContext {
  reason: AuthExpiredReason;
  bizCode?: number;
  httpStatus?: number;
  message?: string;
}

export type AuthExpiredHandler = (context: AuthExpiredContext) => void;

let authExpiredHandler: AuthExpiredHandler | undefined;

export const setAuthExpiredHandler = (handler?: AuthExpiredHandler) => {
  authExpiredHandler = handler;
};

export const getAuthExpiredHandler = () => {
  return authExpiredHandler;
};

