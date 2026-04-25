import { FC, ReactElement } from 'react';
import { Dropdown } from '@douyinfe/semi-ui';
import { DropdownProps } from '@douyinfe/semi-ui/lib/es/dropdown';
import MenuRenderer from '@/components/AppDropdown/MenuRenderer';
import { MenuItemType } from '@/types';

type AppDropdownProps = {
  triggerEl: ReactElement;
  menu: MenuItemType[];
} & Omit<DropdownProps, 'render' | 'children'>;

const AppDropdown: FC<AppDropdownProps> = ({ triggerEl, menu, position = 'topLeft', ...rest }) => {
  return (
    <Dropdown
      position={position}
      style={{ width: 190, padding: 12 }}
      {...rest}
      render={<MenuRenderer menu={menu} />}
    >
      {triggerEl}
    </Dropdown>
  )
};

export default AppDropdown;