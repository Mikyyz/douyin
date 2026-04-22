import { FC } from "react";
import { Button, Divider, Nav, Popover, Space } from "@douyinfe/semi-ui";
import { IconAppCenter, IconArticle, IconDesktop, IconFavoriteList, IconHelpCircle, IconLive, IconSearch, IconSetting, IconTiktokLogo, IconUser, IconUserAdd, IconUserCardVideo, IconUserGroup } from '@douyinfe/semi-icons';
import Logo from "./Logo";

const { Header, Item, Footer } = Nav

const PageSider: FC = () => {
  return (
    <Nav
      bodyStyle={{ width: 160, height: '80vh', textAlign: 'center', borderRight: 0 }}
    >
      <Header>
        <IconTiktokLogo style={{ height: '36px', fontSize: 36 }} />
        <span>抖音精选</span>
      </Header>
      <Item itemKey="jingxuan" icon={<IconTiktokLogo />} text="精选" style={{ display: 'flex', justifyContent: 'center' }}></Item>
      <Item itemKey="recommend" icon={<IconFavoriteList />} text="推荐"></Item>
      <Item itemKey="aisearch" icon={<IconSearch />} text="搜索"></Item>
      <Divider margin='12px'/>
      <Item itemKey="follow" icon={<IconUserAdd />} text="关注"></Item>
      <Item itemKey="friend" icon={<IconUserGroup />} text="朋友"></Item>
      <Item itemKey="user" icon={<IconUser />} text="我的"></Item>
      <Divider margin='12px'/>
      <Item itemKey="live" icon={<IconLive />} text="直播"></Item>
      <Item itemKey="vs" icon={<IconUserCardVideo />} text="放映厅"></Item>
      <Item itemKey="series" icon={<IconDesktop />} text="短剧"></Item>
      <Footer>
        <Space spacing={2}>
          <Popover position="topLeft" content="设置">
            <Button theme='borderless' type='tertiary' icon={<IconSetting />} />
          </Popover>
          <Button theme='borderless' type='tertiary' icon={<IconAppCenter />} />
          <Button theme='borderless' type='tertiary' icon={<IconHelpCircle />} />
          <Button theme='borderless' type='tertiary' icon={<IconArticle />} />
        </Space>
      </Footer>
    </Nav>
  );
};

export default PageSider;
