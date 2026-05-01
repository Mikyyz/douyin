import { FC, ReactNode } from "react";
import { Popover } from "@douyinfe/semi-ui";
import { LoginTip, LoginTipProps } from "./LoginTip";
import { PopoverProps } from "@douyinfe/semi-ui/lib/es/popover";

type LoginPopoverProps = {
  isLogin: boolean;
  content: ReactNode;
  children: ReactNode;
  loginTipProps?: LoginTipProps; // 透传登录提示
  renderLoginTip?: () => ReactNode; // 自定义登录提示
} & PopoverProps;
export const LoginPopover: FC<LoginPopoverProps> = ({
  isLogin,
  content,
  children,
  renderLoginTip,
  loginTipProps,
  ...rest
}) => {
  return (
    <Popover
      content={
        isLogin
          ? content
          : renderLoginTip?.() ?? <LoginTip {...loginTipProps} />
      }
      clickToHide
      {...rest}
    >
      {children}
    </Popover>
  );
};
