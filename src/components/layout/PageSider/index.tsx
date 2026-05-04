import { FC } from "react";
import { Nav } from "@douyinfe/semi-ui";
import {
  IconTiktokLogo,
} from "@douyinfe/semi-icons";
import { useLocation, useNavigate } from "react-router-dom";
import { SideNavItem } from "@/components/layout/PageSider/SideNavItem";
import SideBarFooter from "@/components/SideBarFooter";
import { useLoginModalStore } from "@/store/useLoginModalStore";
import { LOGIN_MODAL_TITLE } from "@/contants";
import styles from "./index.module.scss";
import { useLoginStore } from "@/store/useLoginStore";

const { Header, Footer } = Nav;

const PageSider: FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { openLoginModal, setModalConfig, closeLoginModal } = useLoginModalStore();
  const isLogin = useLoginStore((s) => s.isLogin);  

  const handleSelectNavItem = ({ itemKey }: { itemKey: string}) => {
    navigate(`/${itemKey}`);
    closeLoginModal();
    if (itemKey in LOGIN_MODAL_TITLE && !isLogin) {
      openLoginModal(LOGIN_MODAL_TITLE[itemKey as keyof typeof LOGIN_MODAL_TITLE] );
      setModalConfig({ mask: false, showCloseIcon: false });
    }
  }
  return (
    <Nav
      className={styles.pageNav}
      selectedKeys={[location.pathname?.slice(1) || "/"]}
      defaultSelectedKeys={["/"]}
      onSelect={handleSelectNavItem as any}
    >
      <Header style={{ color: "var(--semi-color-text-0)" }}>
        <IconTiktokLogo style={{ height: "36px", fontSize: 36 }} />
        <span style={{ fontSize: 18, fontWeight: "bold" }}>抖音精选</span>
      </Header>
      <SideNavItem />
      <Footer>
        <SideBarFooter />
      </Footer>
    </Nav>
  );
};

export default PageSider;
