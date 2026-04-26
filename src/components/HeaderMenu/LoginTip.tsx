import { FC, ReactNode } from "react";
import { Typography } from "@douyinfe/semi-ui";
import styles from "./index.module.scss";

const { Text } = Typography;

type LoginTipProps = {
  text?: string;
  render?: () => ReactNode; // 自定义渲染
}
export const LoginTip: FC<LoginTipProps> = ({ text = '', render }) => {
  return (
    <div className={styles.loginBox}>
      {text && <Text type="secondary">{text}</Text>}
      {render && render()}
    </div>
  );
};