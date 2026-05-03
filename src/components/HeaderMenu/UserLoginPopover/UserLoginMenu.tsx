import { FC, ReactNode } from "react";
import {
  IconUserCircle,
  IconBellStroked,
  IconShoppingBagStroked,
  IconChevronRight,
  IconExit,
} from "@douyinfe/semi-icons";
import { Avatar, Divider, List, Space, Typography } from "@douyinfe/semi-ui";
import {
  IconBadgeStar,
  IconGettingStarted,
  IconHeart,
  IconModal,
  IconRating,
} from "@douyinfe/semi-icons-lab";
import styles from "./index.module.scss";
import { useRequest } from "@/hooks/useRequest";
import { logout } from "@/api/user";
import { useLoginStore } from "@/store/useLoginStore";
import { useUserStore } from "@/store/useUserStore";
import { useAppStore } from "@/store/useAppStore";
import { useNavigate } from "react-router-dom";

const { Title, Text } = Typography;
const { Item } = List;

type LoginMenuSource = {
  key: string;
  title: string;
  icon: ReactNode;
};

const loginMenuSource: LoginMenuSource[] = [
  {
    key: "like",
    title: "我的喜欢",
    icon: <IconHeart style={{ fontSize: 19 }} />,
  },
  {
    key: "favorite_collection",
    title: "我的收藏",
    icon: <IconRating style={{ fontSize: 19 }} />,
  },
  {
    key: "history",
    title: "观看历史",
    icon: <IconGettingStarted style={{ fontSize: 19 }} />,
  },
  {
    key: "watch_later",
    title: "稍后再看",
    icon: <IconBadgeStar style={{ fontSize: 19 }} />,
  },
  {
    key: "post",
    title: "我的作品",
    icon: <IconModal style={{ fontSize: 19 }} />,
  },
];
interface UserLoginMenuProps {
  isLogin: boolean
}
export const UserLoginMenu: FC<UserLoginMenuProps> = ({ isLogin }) => {
  const userInfo = useUserStore((s) => s.userInfo);
  const { run: onLogout } = useRequest(logout, { manual: true });
  const handleLogout = async () => {
    try {
      await onLogout();
      // 清登录态
      useLoginStore.getState().logout();
      // 清用户信息
      useUserStore.getState().clearUserInfo();
      // 重置应用状态
      useAppStore.getState().resetApp();
    } catch (error) {}
  }
  return (
    <List
      className={styles.userLoginMenu}
      header={
        <div className={styles.userLoginMenuHeader}>
          {isLogin ? (
            <>
              <Avatar
                border={{ color: "var(--semi-color-border)" }}
                src={userInfo.avatar}
              />
              <div className={styles.userLoginMenuHeaderTitle}>
                <Title heading={6}>Mikyyz</Title>
                <Space style={{ display: "flex", color: "var(--semi-color-text-2)" }}>
                  <Space>关注 118</Space>
                  <Divider layout="vertical" />
                  <Space>粉丝 15</Space>
                </Space>
              </div>
            </>
          ): (
            <>
              <IconUserCircle className={styles.userLoginMenuHeaderAvatar} />
              <div className={styles.userLoginMenuHeaderTitle}>
                <Title heading={6}>未登录</Title>
                <Text type="tertiary" size="small">
                  登录后即可查喜欢、收藏作品
                </Text>
              </div>
            </>
          )}
        </div>
      }
      footer={
        <div className={styles.userLoginMenuFooterContent}>
          <Space className={styles.userLoginMenuFooter}>
            <IconBellStroked className={styles.userLoginMenuFooterIcon} />
            <Text type="tertiary">我的预约</Text>
          </Space>
          <Space className={styles.userLoginMenuFooter}>
            <IconShoppingBagStroked
              className={styles.userLoginMenuFooterIcon}
            />
            <Text type="tertiary">我的订单</Text>
          </Space>
          {/* 退出登录 */}
          {isLogin && (
            <div className={styles.userLogoutBtnWrapper}>
              <div className={styles.userLogoutBtn} onClick={handleLogout}>
                <IconExit className={styles.userLogoutBtnIcon} />
                <span>退出登录</span>
              </div>
            </div>
          )}
        </div>
      }
      bordered={false}
      dataSource={loginMenuSource}
      renderItem={(item: LoginMenuSource) => (
        <Item className={styles.userLoginMenuItemContainer}>
          <div key={item.key} className={styles.userLoginMenuItemContent}>
            <div className={styles.userLoginMenuItem}>
              {item.icon}
              <Text>{item.title}</Text>
            </div>
            <Space spacing={1}>
              {isLogin && <Text type="tertiary">0</Text>}
              <IconChevronRight className={styles.userLoginMenuItemIcon} />
            </Space>
          </div>
        </Item>
      )}
    />
  );
};
