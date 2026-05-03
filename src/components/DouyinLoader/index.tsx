import { FC } from "react";
import classNames from "classnames";
import styles from "./index.module.scss";

interface DouyinLoaderProps {
  size?: number;
  text?: string;
  fullscreen?: boolean;
  className?: string;
}

export const DouyinLoader: FC<DouyinLoaderProps> = ({
  size = 44,
  text = "加载中",
  fullscreen = false,
  className,
}) => {
  return (
    <div
      className={classNames(styles.loaderRoot, fullscreen && styles.fullscreen, className)}
      style={{ ["--loader-size" as any]: `${size}px` }}
      role="status"
      aria-live="polite"
      aria-busy="true"
    >
      <div className={styles.row}>
        <span className={classNames(styles.dot, styles.blue)} />
        <span className={classNames(styles.dot, styles.red)} />
        <span className={styles.srOnly}>{text}</span>
      </div>
      {text ? <div className={styles.text}>{text}</div> : null}
    </div>
  );
};
