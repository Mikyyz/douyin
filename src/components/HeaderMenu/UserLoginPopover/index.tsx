import { FC } from "react";
import { LoginPopover } from "../LoginPopover";
import { Avatar, Button } from "@douyinfe/semi-ui";
import { IconUserCircle } from "@douyinfe/semi-icons";
import { UserLoginMenu } from "@/components/HeaderMenu/UserLoginPopover/UserLoginMenu";
import { useLoginModalStore } from "@/store/useLoginModalStore";
import { LOGIN_MODAL_TITLE } from "@/contants";
import { useUserStore } from "@/store/useUserStore";

type UserLoginPopoverProps = {
  isLogin: boolean;
};

export const UserLoginPopover: FC<UserLoginPopoverProps> = ({ isLogin }) => {
  const { isLoginModalOpen, openLoginModal, setModalConfig } =
    useLoginModalStore();
  const userInfo = useUserStore((s) => s.userInfo);
  const handleLogin = (key: string) => {
    if (key in LOGIN_MODAL_TITLE && !isLoginModalOpen) {
      openLoginModal(LOGIN_MODAL_TITLE[key as keyof typeof LOGIN_MODAL_TITLE]);
      setModalConfig({ mask: true, showCloseIcon: true });
    }
  };
  return (
    <LoginPopover
      isLogin={isLogin}
      content={<UserLoginMenu isLogin={isLogin} />}
      position="bottomRight"
      renderLoginTip={() => <UserLoginMenu isLogin={isLogin} />}
    >
      {isLogin ? (
        <Avatar size="small" src={userInfo?.avatar} />
      ) : (
        <Button
          theme="solid"
          icon={<IconUserCircle style={{ fontSize: 24 }} />}
          size="large"
          style={{ fontSize: 16 }}
          onClick={() => handleLogin("login")}
        >
          登录
        </Button>
      )}
    </LoginPopover>
  );
};
