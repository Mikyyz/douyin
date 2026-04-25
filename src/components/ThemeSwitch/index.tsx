import { FC } from "react";
import {
  IconContrast,
  IconMoonStroked,
  IconSunStroked,
} from "@douyinfe/semi-icons";
import { Space, Button, Typography, Tooltip } from "@douyinfe/semi-ui";
import classNames from "classnames";
import { useThemeStore } from "@/store/useThemeStore";
import { THEME_MODE } from "@/contants/theme";
import { ThemeMode } from "@/types";
import styles from "./index.module.scss";

const { Text } = Typography;

const ThemeSwitch: FC = () => {
  const { mode } = useThemeStore();

  const handleSelectThemeMode = (mode: ThemeMode) => {
    useThemeStore.getState().setMode(mode);
  }
  return (
    <div className={styles.themeSwitch}>
      <Space>
        <IconContrast />
        <Text type="tertiary">深浅模式</Text>
      </Space>
      <Space>
        <Tooltip content="浅色模式">
          <Button
            icon={<IconSunStroked />}
            theme="borderless"
            type="tertiary"
            size="small"
            className={classNames({ [styles.activeBgColor]: mode === THEME_MODE.light })}
            onClick={() => handleSelectThemeMode(THEME_MODE.light as ThemeMode)}
          />
        </Tooltip>
        <Tooltip content="深色模式">
          <Button
            icon={<IconMoonStroked />}
            theme="borderless"
            type="tertiary"
            size="small"
            className={classNames({ [styles.activeBgColor]: mode === THEME_MODE.dark })}
            onClick={() => handleSelectThemeMode(THEME_MODE.dark as ThemeMode)}
          />
        </Tooltip>
      </Space>
    </div>
  );
};

export default ThemeSwitch;
