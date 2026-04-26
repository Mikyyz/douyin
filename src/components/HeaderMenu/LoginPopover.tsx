import { FC, ReactNode } from "react";
import { Popover } from "@douyinfe/semi-ui";
import { LoginTip } from "./LoginTip";

type LoginPopoverProps = {
  isLogin: boolean;
  content: ReactNode;
  children: ReactNode;
}
export const LoginPopover: FC<LoginPopoverProps> = ({ isLogin, content, children }) => {
  return (
    <Popover content={isLogin ? content : <LoginTip /> }>
      {children}
    </Popover>
  )
};