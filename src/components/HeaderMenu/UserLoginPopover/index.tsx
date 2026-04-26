import { FC } from "react";
import { LoginPopover } from "../LoginPopover";
import { Button } from "@douyinfe/semi-ui";
import { IconUserCircle } from "@douyinfe/semi-icons";
import { UserLoginMenu } from "@/components/HeaderMenu/UserLoginPopover/UserLoginMenu";

type UserLoginPopoverProps = {
  isLogin: boolean;
};

export const UserLoginPopover: FC<UserLoginPopoverProps> = ({ isLogin }) => {
  return (
    <LoginPopover
      isLogin={isLogin}
      content="个人中心"
      position="bottomRight"
      renderLoginTip={() => <UserLoginMenu />}
    >
      <Button
        theme="solid"
        icon={<IconUserCircle style={{ fontSize: 24 }} />}
        size="large"
        style={{ fontSize: 16 }}
      >
        登录
      </Button>
    </LoginPopover>
  );
};
