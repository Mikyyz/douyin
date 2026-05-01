import { FC } from "react";
import { Badge, Space, Tag, Typography } from "@douyinfe/semi-ui";
import {
  IconBellStroked,
  IconBookmarkAddStroked,
  IconCommentStroked,
  IconCrownStroked,
  IconDownloadStroked,
  IconImageStroked,
} from "@douyinfe/semi-icons";
import { useLoginStore } from "@/store/useLoginStore";
import { HeaderMenuItem } from "@/components/HeaderMenu/HeaderMenuItem";
import { LoginPopover } from "@/components/HeaderMenu/LoginPopover";
import { UserLoginPopover } from "@/components/HeaderMenu/UserLoginPopover";
import { useLoginModalStore } from "@/store/useLoginModalStore";
import { LOGIN_MODAL_TITLE } from "@/contants";
import styles from "./index.module.scss";

const { Text } = Typography;

const HeaderMenu: FC = () => {
  const { isLogin } = useLoginStore();
  const isLoginModalOpen = useLoginModalStore((s) => s.isLoginModalOpen);
  const openLoginModal = useLoginModalStore((s) => s.openLoginModal);
  const setModalConfig = useLoginModalStore((s) => s.setModalConfig);
  const handleLogin = (key: string) => {
    if (key in LOGIN_MODAL_TITLE && !isLoginModalOpen) {
      openLoginModal(LOGIN_MODAL_TITLE[key as keyof typeof LOGIN_MODAL_TITLE]);
      setModalConfig({ mask: true, showCloseIcon: true })
    }
  }
  return (
    <div className={styles.headerMenu}>
      <Space spacing={10}>
        {/* 充钻石 */}
        <LoginPopover
          isLogin={isLogin}
          content="个人中心"
          loginTipProps={{
            text: "登录后即可查看钻石",
            className: styles.loginTipContent,
            onLogin: () => handleLogin('payment'),
            extra: (
              <Text strong style={{ fontSize: 20 }}>
                <span>1元</span>
                <span> = </span>
                <Badge
                  count={
                    <Tag
                      shape="circle"
                      colorful
                      style={{
                        padding: 0,
                        marginLeft: 50,
                        borderBottomLeftRadius: 0,
                      }}
                    >
                      <span style={{ transform: "scale(0.7)" }}>全网低价</span>
                    </Tag>
                  }
                >
                  10钻石
                </Badge>
              </Text>
            ),
          }}
        >
          <div>
            <HeaderMenuItem icon={<IconCrownStroked />} text="充钻石" />
          </div>
        </LoginPopover>
        {/* 客户端 */}
        <HeaderMenuItem icon={<IconDownloadStroked />} text="客户端" />
        {/* 壁纸 */}
        <HeaderMenuItem icon={<IconImageStroked />} text="壁纸" />
        {/* 通知 */}
        <LoginPopover
          isLogin={isLogin}
          content="通知"
          loginTipProps={{
            text: "登录后即可查看通知消息",
            className: styles.loginTipContent,
            onLogin: () => handleLogin('notification')
          }}
        >
          <div>
            <HeaderMenuItem icon={<IconBellStroked />} text="通知" />
          </div>
        </LoginPopover>
        {/* 消息 */}
        <LoginPopover
          isLogin={isLogin}
          content="消息"
          loginTipProps={{
            text: "登录后即可查看私信消息",
            className: styles.loginTipContent,
            onLogin: () => handleLogin('message')
          }}
        >
          <div>
            <HeaderMenuItem icon={<IconCommentStroked />} text="消息" />
          </div>
        </LoginPopover>
        {/* 投稿 */}
        <HeaderMenuItem icon={<IconBookmarkAddStroked />} text="投稿" />
        {/* 登录 */}
        <UserLoginPopover isLogin={isLogin} />
      </Space>
    </div>
  );
};

export default HeaderMenu;
