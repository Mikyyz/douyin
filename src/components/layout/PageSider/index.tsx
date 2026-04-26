import { FC } from "react";
import { Divider, Nav } from "@douyinfe/semi-ui";
import {
  IconAIStrokedLevel1,
  IconFollowStroked,
  IconMonitorStroked,
  IconSearch,
  IconSearchStroked,
  IconTiktokLogo,
  IconUserCardVideoStroked,
  IconUserListStroked,
  IconUserStroked,
  IconVideoStroked,
} from "@douyinfe/semi-icons";
import { useLocation, useNavigate } from "react-router-dom";
import SideBarFooter from "@/components/SideBarFooter";
import styles from "./index.module.scss";

const { Header, Item, Footer } = Nav;

const PageSider: FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <Nav
      className={styles.pageNav}
      selectedKeys={[location.pathname]}
      defaultSelectedKeys={["/"]}
      onSelect={({ itemKey }: { itemKey: string }) => {
        navigate(itemKey as string);
      }}
    >
      <Header style={{ color: "var(--semi-color-text-0)" }}>
        <IconTiktokLogo style={{ height: "36px", fontSize: 36 }} />
        <span style={{ fontSize: 18, fontWeight: "bold" }}>抖音精选</span>
      </Header>
      <Item
        itemKey="/jingxuan"
        icon={<IconTiktokLogo />}
        text="精选"
        style={{ maxWidth: 128 }}
      ></Item>
      <Item
        itemKey="/recommend"
        icon={<IconAIStrokedLevel1 />}
        text="推荐"
        style={{ maxWidth: 128 }}
      ></Item>
      <Item
        itemKey="/aisearch"
        icon={<IconSearchStroked />}
        text="搜索"
        style={{ maxWidth: 128 }}
      ></Item>
      <Divider margin="12px" />
      <Item
        itemKey="/follow"
        icon={<IconFollowStroked />}
        text="关注"
        style={{ maxWidth: 128 }}
      ></Item>
      <Item
        itemKey="/friend"
        icon={<IconUserListStroked />}
        text="朋友"
        style={{ maxWidth: 128 }}
      ></Item>
      <Item
        itemKey="/user"
        icon={<IconUserStroked />}
        text="我的"
        style={{ maxWidth: 128 }}
      ></Item>
      <Divider margin="12px" />
      <Item
        itemKey="/live"
        icon={<IconVideoStroked />}
        text="直播"
        style={{ maxWidth: 128 }}
      ></Item>
      <Item
        itemKey="/vs"
        icon={<IconUserCardVideoStroked />}
        text="放映厅"
        style={{ maxWidth: 128 }}
      ></Item>
      <Item
        itemKey="/series"
        icon={<IconMonitorStroked />}
        text="短剧"
        style={{ maxWidth: 128 }}
      ></Item>
      <Footer>
        <SideBarFooter />
      </Footer>
    </Nav>
  );
};

export default PageSider;
