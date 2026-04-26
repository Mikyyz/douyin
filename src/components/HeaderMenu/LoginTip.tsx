import { FC, ReactNode, StyleHTMLAttributes } from "react";
import { Button, Typography } from "@douyinfe/semi-ui";
import styles from "./index.module.scss";
import classNames from "classnames";

const { Text } = Typography;

export type LoginTipProps = {
  text?: string;
  buttonText?: string; // 按钮文本
  className?: StyleHTMLAttributes<HTMLDivElement>["className"];
  extra?: ReactNode; // 扩展内容
  footer?: ReactNode; // 底部扩展
  children?: ReactNode;     // 完全自定义
  onLogin?: () => void;
}
export const LoginTip: FC<LoginTipProps> = ({ 
  text = "登录后即可查看",
  buttonText = "立即登录",
  onLogin,
  extra,
  footer,
  children,
  className
 }) => {
  // 如果传 children，直接完全接管
  if (children) {
    return (
      <div className={styles.loginTip}>
        {children}
      </div>
    )
  }
  return (
    <div className={classNames(styles.loginTip, className)}>
      {text && <Text type="secondary">{text}</Text>}
      {/* 扩展区域 */}
      {extra}
      <Button onClick={onLogin} theme="solid" block>{buttonText}</Button>
      {/* 底部扩展 */}
      {footer}
    </div>
  );
};