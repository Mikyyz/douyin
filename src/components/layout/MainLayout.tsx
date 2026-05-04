import { FC } from "react";
import { Layout } from "@douyinfe/semi-ui";
import { Outlet } from "react-router-dom";
import PageSider from "./PageSider";
import PageHeader from "./PageHeader";
import { LoginModal } from "@/components/Login";
import style from "./index.module.scss"

const { Header, Content, Sider } = Layout

const MainLayout: FC = () => {
  return (
    <>
      <Layout className={style.mainLayout}>
        <Sider className={style.siderContainer}><PageSider /></Sider>
        <Layout className={style.contentContainer}>
          <Header className={style.headerContainer}><PageHeader /></Header>
          <Content className={style.mainContentContainer}>
            <Outlet /> {/* 子页面渲染在这里 */}
          </Content>
        </Layout>
      </Layout>
      <LoginModal />
    </>
  )
}

export default MainLayout