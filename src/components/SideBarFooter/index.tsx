import { FC } from "react";
import {
  Space,
  Button,
  Dropdown,
  Typography,
  RadioGroup,
  Radio,
} from "@douyinfe/semi-ui";
import {
  IconSettingStroked,
  IconGridStroked,
  IconVideoStroked,
  IconHelpCircleStroked,
  IconAIStrokedLevel1,
  IconBriefStroked,
  IconTabsStroked,
  IconCustomerSupportStroked,
} from "@douyinfe/semi-icons";
import AppDropdown from "../AppDropdown";
import ThemeSwitch from "../ThemeSwitch";

const { Item, Title } = Dropdown;
const { Text } = Typography;

const settingMenuCongfig = [
  {
    type: "submenu",
    key: "home",
    label: "默认首页设置",
    icon: <IconVideoStroked />,
    children: [
      {
        type: "custom",
        key: "radio",
        render: () => (
          <>
            <Title>
              <Text>启动时, 默认进入:</Text>
            </Title>
            <RadioGroup direction="vertical" defaultValue={2}>
              <Item>
                <Radio value={1}>推荐频道</Radio>
              </Item>
              <Item>
                <Radio value={2}>精选频道</Radio>
              </Item>
              <Item>
                <Radio value={3}>关注频道</Radio>
              </Item>
            </RadioGroup>
          </>
        ),
      },
    ],
  },
  {
    type: "custom",
    key: "theme",
    render: () => <Item> <ThemeSwitch /></Item>,
  },
  {
    type: "menu",
    key: "ai_setting",
    label: "AI设置",
    icon: <IconAIStrokedLevel1 />,
  },
  {
    type: "menu",
    key: "keyboard_shortcut",
    label: "键盘快捷键",
    icon: <IconTabsStroked />,
  },
  {
    type: "menu",
    key: "help",
    label: "常见问题",
    icon: <IconHelpCircleStroked />,
  },
  {
    type: "menu",
    key: "feedback",
    label: "我的客服",
    icon: <IconCustomerSupportStroked />,
  },
] as any;

const infoMenuConfig = [
  {
    type: "menu",
    key: "about_douyin",
    label: "关于抖音",
  },
  {
    type: "menu",
    key: "creator_service",
    label: "创作服务",
  },
  {
    type: "menu",
    key: "security_trust_center",
    label: "安全与信任中心",
  },
] as any;

const SideBarFooter: FC = () => {
  return (
    <Space spacing={2}>
      <AppDropdown
        menu={settingMenuCongfig}
        triggerEl={
          <Button
            theme="borderless"
            type="tertiary"
            icon={<IconSettingStroked />}
          />
        }
        trigger="click"
      />
      <AppDropdown
        menu={infoMenuConfig}
        triggerEl={
          <Button theme="borderless" type="tertiary" icon={<IconGridStroked />} />
        }
      />
      <Button
        theme="borderless"
        type="tertiary"
        icon={<IconHelpCircleStroked />}
      />
      <Button theme="borderless" type="tertiary" icon={<IconBriefStroked />} />
    </Space>
  );
};

export default SideBarFooter;
