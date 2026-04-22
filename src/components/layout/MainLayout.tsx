import { FC } from "react";
import { Outlet } from "react-router-dom";
import { Layout } from "@douyinfe/semi-ui";
import PageSider from "./PageSider";
import PageHeader from "./PageHeader";
import style from "./index.module.scss"

const MainLayout: FC = () => {
  const { Header, Content, Sider } = Layout
  return (
    <Layout className={style.mainLayout}>
      <Sider className={style.siderContainer}><PageSider /></Sider>
      <Layout className={style.contentContainer}>
        <Header className={style.headerContainer}><PageHeader /></Header>
        <Content>
          <Outlet /> {/* 子页面渲染在这里 */}
        </Content>
      </Layout>
    </Layout>
  )
}

export default MainLayout