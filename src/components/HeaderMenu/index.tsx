import { FC } from "react";
import { Badge, Button, List, Popover, Space, Tag, Typography } from "@douyinfe/semi-ui";
import {
  IconBellStroked,
  IconBookmarkAddStroked,
  IconChevronRight,
  IconCommentStroked,
  IconCrownStroked,
  IconDownloadStroked,
  IconImageStroked,
  IconShoppingBagStroked,
  IconUserCircle,
} from "@douyinfe/semi-icons";
import { useLoginStore } from "@/store/useLoginStore";
import { IconBadgeStar, IconGettingStarted, IconHeart, IconModal, IconRating } from "@douyinfe/semi-icons-lab";
import { HeaderMenuItem } from "@/components/HeaderMenu/HeaderMenuItem";
import styles from "./index.module.scss";

const { Text, Title } = Typography;

const dataSource = [
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
  }
]

const HeaderMenu: FC = () => {
  const { isLogin } = useLoginStore();
  return (
    <div className={styles.headerMenu}>
      <Space spacing={10}>
        <Popover
          content={
            !isLogin ? (
              <div style={{ width: 220, padding: 14, gap: 20, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Text type="tertiary">登录后即可查看钻石</Text>
                <Text strong style={{ fontSize: 20 }}>
                  <span>1元</span>
                  <span> = </span>
                  <Badge count={<Tag shape='circle' colorful style={{ padding: 0, marginLeft: 50, borderBottomLeftRadius: 0}}><span style={{ transform: 'scale(0.7)' }}>全网低价</span></Tag>}>10钻石</Badge>
                </Text>
                <Button theme="solid" block>立即登录</Button>
              </div>
            ) : (
              "个人中心"
            )
          }
        >
          <HeaderMenuItem icon={<IconCrownStroked />} text="充钻石" />
        </Popover>
        <HeaderMenuItem icon={<IconDownloadStroked />} text="客户端" />
        <HeaderMenuItem icon={<IconImageStroked />} text="壁纸" />
        <Popover content={
            !isLogin ? (
              <div style={{ width: 220, padding: 14, gap: 20, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Text type="secondary">登录后即可查看通知消息</Text>
                <Button theme="solid" block>立即登录</Button>
              </div>
            ) : (
              "通知"
            )
          }>
          <HeaderMenuItem icon={<IconBellStroked />} text="通知" />
        </Popover>
        <Popover content={
            !isLogin ? (
              <div style={{ width: 220, padding: 14, gap: 20, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Text type="secondary">登录后即可查看私信消息</Text>
                <Button theme="solid" block>立即登录</Button>
              </div>
            ) : (
              "消息"
            )
        }>
          <HeaderMenuItem icon={<IconCommentStroked />} text="消息" />
        </Popover>
        <HeaderMenuItem icon={<IconBookmarkAddStroked />} text="投稿" />
        <Popover trigger="click" style={{ padding: 0, margin: 0 }} content={
          !isLogin ? (
            <List
                header={
                  <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginLeft: -24 }}>
                    <IconUserCircle style={{ fontSize: 54, color: "var(--semi-color-text-3)" }} />
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                      <Title heading={6}>未登录</Title>
                      <Text type="tertiary" size="small">登录后即可查喜欢、收藏作品</Text>
                    </div>
                  </div>
                }
                
                style={{ width: 300, padding: '4px 16px' }}
                footer={
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <Space className={styles.listItemFooter}>
                      <IconBellStroked style={{ color: "var(--semi-color-text-3)" }} />
                      <Text type="tertiary">我的预约</Text>
                    </Space>
                    <Space className={styles.listItemFooter}>
                      <IconShoppingBagStroked style={{ color: "var(--semi-color-text-3)" }} />
                      <Text type="tertiary">我的订单</Text>
                    </Space>
                  </div>
                }
                bordered={false}
                dataSource={dataSource}
                renderItem={item => <List.Item className={styles.listItem}>
                  <div key={item.key} style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', gap: 8, alignItems: 'bottom' }}>
                      {item.icon}
                      <Text>{item.title}</Text>
                    </div>
                    <IconChevronRight style={{ color: "var(--semi-color-text-3)", fontSize: 13 }} />
                  </div>
                </List.Item>}
            />
          ) : (
            "个人中心"
          )
        } position="bottomRight">
          <Button
            theme="solid"
            icon={<IconUserCircle style={{ fontSize: 24 }} />}
            size="large"
            style={{ fontSize: 16 }}
          >
            登录
          </Button>
        </Popover>
      </Space>
    </div>
  );
};

export default HeaderMenu;
