import { ReactElement } from 'react';
import { RadioGroup, Radio, Typography, Dropdown } from '@douyinfe/semi-ui';

const { Item, Title, Menu } = Dropdown;
const { Text } = Typography;

export const HomeSetting = (): ReactElement => {
  return (
    <Dropdown position="rightTop" render={
      <Menu>
        <Title>
          <Text>启动时默认进入</Text>
        </Title>

        <RadioGroup direction="vertical" defaultValue={2}>
          <Radio value={1}>推荐频道</Radio>
          <Radio value={2}>精选频道</Radio>
          <Radio value={3}>关注频道</Radio>
        </RadioGroup>
      </Menu>
    }>
      <Item>默认首页设置</Item>
    </Dropdown>
  );
};