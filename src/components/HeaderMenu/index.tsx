import { FC } from 'react'
import { Button, Popover, Space, Typography } from '@douyinfe/semi-ui'
import { IconBackTop, IconBell, IconComment, IconExport, IconImage, IconMember, IconUserCircle } from '@douyinfe/semi-icons'
import styles from "./index.module.scss"

const { Text } = Typography

const HeaderMenu: FC = () => {
  return (
    <div className={styles.headerMenu}>
      <Space spacing={10}>
        <Space vertical spacing={1}>
          <IconMember style={{ color: 'var(--semi-color-text-1)' }} />
          <Text type="secondary">充钻石</Text>
        </Space>
        <Space vertical spacing={1}>
          <IconBackTop style={{ color: 'var(--semi-color-text-1)', transform: 'rotate(180deg)' }} />
          <Text type="secondary">客户端</Text>
        </Space>
        <Space vertical spacing={1}>
          <IconImage style={{ color: 'var(--semi-color-text-1)' }} />
          <Text type="secondary">壁纸</Text>
        </Space>
        <Space vertical spacing={1}>
          <IconBell style={{ color: 'var(--semi-color-text-1)' }} />
          <Text type="secondary">通知</Text>
        </Space>
        <Space vertical spacing={1}>
          <IconComment style={{ color: 'var(--semi-color-text-1)' }} />
          <Text type="secondary">私信</Text>
        </Space>
        <Space vertical spacing={1}>
          <IconExport style={{ color: 'var(--semi-color-text-1)' }} />
          <Text type="secondary">投稿</Text>
        </Space>
        <Popover content="登录" position="bottomRight">
          <Button theme="solid" icon={<IconUserCircle />} size="large">登录</Button>
        </Popover>
      </Space>
    </div>
  )
}

export default HeaderMenu