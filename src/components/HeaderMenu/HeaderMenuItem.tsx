import { FC, ReactNode } from "react";
import { Space, Typography } from "@douyinfe/semi-ui";
import styles from '@/components/HeaderMenu/index.module.scss';

const { Text } = Typography;

type HeaderMenuItemProps = {
  icon: ReactNode;
  text: string;
}
export const HeaderMenuItem: FC<HeaderMenuItemProps> = ({ icon, text }) => {
  return (
    <div className={styles.headerMenuItem}>
      <Space vertical spacing={1}>
        <span className={styles.headerMenuItemIcon}>{icon}</span>
        <Text type="secondary">{text}</Text>
      </Space>
    </div>
  )
};