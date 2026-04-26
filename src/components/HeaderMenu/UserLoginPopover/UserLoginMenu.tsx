import { FC, ReactNode } from "react";
import {
  IconUserCircle,
  IconBellStroked,
  IconShoppingBagStroked,
  IconChevronRight,
} from "@douyinfe/semi-icons";
import { List, Space, Typography } from "@douyinfe/semi-ui";
import {
  IconBadgeStar,
  IconGettingStarted,
  IconHeart,
  IconModal,
  IconRating,
} from "@douyinfe/semi-icons-lab";
import styles from "./index.module.scss";

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
export const UserLoginMenu: FC = () => {
  return (
    <List
      className={styles.userLoginMenu}
      header={
        <div className={styles.userLoginMenuHeader}>
          <IconUserCircle className={styles.userLoginMenuHeaderAvatar} />
          <div className={styles.userLoginMenuHeaderTitle}>
            <Title heading={6}>未登录</Title>
            <Text type="tertiary" size="small">
              登录后即可查喜欢、收藏作品
            </Text>
          </div>
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
            <IconChevronRight className={styles.userLoginMenuItemIcon} />
          </div>
        </Item>
      )}
    />
  );
};
