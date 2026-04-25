import { FC } from 'react';
import { Dropdown, Typography } from '@douyinfe/semi-ui';
import { IconChevronRight } from '@douyinfe/semi-icons';
import { MenuItemType } from '@/types';

const { Item, Menu } = Dropdown;
const { Text } = Typography;

type MenuRendererProps = {
  menu: MenuItemType[]
}

const MenuRenderer: FC<MenuRendererProps> = ({ menu = [] }) => {
  return (
    <Menu>
      {menu.map((item: MenuItemType) => {
        if (item.type === 'custom') {
          return <div key={item.key}>{item.render && item.render()}</div>;
        } else if (item.type === 'submenu') {
          return (
            <Dropdown
              key={item.key}
              position="rightTop"
              style={{ width: 190, padding: 12 }}
              render={<MenuRenderer menu={item.children ?? []} />}
            >
              <Item icon={item.icon}>
                <Text type="tertiary">{item.label}</Text>
                <IconChevronRight />
              </Item>
            </Dropdown>
          );
        } else {
          return (
            <Item
              key={item.key}
              icon={item.icon}
              onClick={item.onClick}
            >
              <Text type="tertiary">{item.label}</Text>
            </Item>
          );
        }
      })}
    </Menu>
  )
};

export default MenuRenderer;