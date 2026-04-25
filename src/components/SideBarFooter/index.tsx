import { FC } from 'react';
import { Space, Popover, Button } from '@douyinfe/semi-ui';
import { IconSetting, IconAppCenter, IconHelpCircle, IconArticle } from '@douyinfe/semi-icons';

const SideBarFooter: FC = () => {
  return (
    <Space spacing={2}>
      <Popover position="topLeft" content="设置">
        <Button theme='borderless' type='tertiary' icon={<IconSetting />} />
      </Popover>
      <Button theme='borderless' type='tertiary' icon={<IconAppCenter />} />
      <Button theme='borderless' type='tertiary' icon={<IconHelpCircle />} />
      <Button theme='borderless' type='tertiary' icon={<IconArticle />} />
    </Space>
  )
};

export default SideBarFooter;