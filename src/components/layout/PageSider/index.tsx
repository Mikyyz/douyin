import { FC } from "react";
import { Button, Divider, Nav, Popover, Space } from "@douyinfe/semi-ui";
import { IconAppCenter, IconArticle, IconDesktop, IconFavoriteList, IconHelpCircle, IconLive, IconSearch, IconSetting, IconTiktokLogo, IconUser, IconUserAdd, IconUserCardVideo, IconUserGroup } from '@douyinfe/semi-icons';
import { useLocation, useNavigate } from "react-router-dom";
import SideBarFooter from "@/components/SideBarFooter";

const { Header, Item, Footer } = Nav

const PageSider: FC = () => {
  const location = useLocation()
  const navigate = useNavigate()
  return (
    <Nav
      bodyStyle={{ width: 160, height: '80vh', textAlign: 'center', borderRight: 0 }}
      selectedKeys={[location.pathname]}
      defaultSelectedKeys={['/']}
      onSelect={({ itemKey }: { itemKey: string }) => {
        navigate(itemKey as string);
      }}
    >
      <Header>
        <IconTiktokLogo style={{ height: '36px', fontSize: 36 }} />
        <span>抖音精选</span>
      </Header>
      <Item itemKey="/jingxuan" icon={<IconTiktokLogo />} text="精选" style={{ maxWidth: 128 }}></Item>
      <Item itemKey="/recommend" icon={<IconFavoriteList />} text="推荐" style={{ maxWidth: 128 }}></Item>
      <Item itemKey="/aisearch" icon={<IconSearch />} text="搜索" style={{ maxWidth: 128 }}></Item>
      <Divider margin='12px'/>
      <Item itemKey="/follow" icon={<IconUserAdd />} text="关注" style={{ maxWidth: 128 }}></Item>
      <Item itemKey="/friend" icon={<IconUserGroup />} text="朋友" style={{ maxWidth: 128 }}></Item>
      <Item itemKey="/user" icon={<IconUser />} text="我的" style={{ maxWidth: 128 }}></Item>
      <Divider margin='12px'/>
      <Item itemKey="/live" icon={<IconLive />} text="直播" style={{ maxWidth: 128 }}></Item>
      <Item itemKey="/vs" icon={<IconUserCardVideo />} text="放映厅" style={{ maxWidth: 128 }}></Item>
      <Item itemKey="/series" icon={<IconDesktop />} text="短剧" style={{ maxWidth: 128 }}></Item>
      <Footer>
        <SideBarFooter />
      </Footer>
    </Nav>
  );
};

export default PageSider;
