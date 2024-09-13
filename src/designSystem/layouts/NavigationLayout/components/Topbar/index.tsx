import { MenuOutlined } from '@ant-design/icons'
import { Avatar, Flex, Layout, Menu, Tag } from 'antd'
import { useParams, usePathname, useRouter } from 'next/navigation'
import { ReactNode } from 'react'

import { useUserContext } from '@/core/context'
import { Utility } from '@/core/helpers/utility'

const { Header } = Layout

interface Props {
  isMobile?: boolean
  isLoggedIn?: boolean
  header?: ReactNode
  items: { key: string; label: string; onClick: () => void }[]
  itemsMobile: { key: string; label: string; onClick: () => void }[]
}

export const Topbar: React.FC<Props> = ({
  isMobile = false,
  isLoggedIn = false,
  header,
  items,
  itemsMobile,
}) => {
  const pathname = usePathname()
  const router = useRouter()
  const params = useParams()

  let pathnamePure = pathname

  Object.entries(params).forEach(([key, value]) => {
    pathnamePure = pathnamePure.replace(`/${value}`, `/:${key}`)
  })

  const { user, checkRole } = useUserContext()

  const style: any = {}

  const isThin = items.length === 0

  if (isThin) {
    style.height = '60px'
  }

  if (isMobile) {
    return (
      <>
        <Header>
          <Flex align="center" justify="space-between">
            {header && <Flex>{header}</Flex>}

            <Menu
              mode="horizontal"
              items={itemsMobile}
              selectedKeys={[pathnamePure]}
              style={{ width: 46 }}
              overflowedIndicator={<MenuOutlined />}
            />
          </Flex>
        </Header>
      </>
    )
  }

  return (
    <>
      <Header style={style}>
        <Flex align="center" style={style}>
          {header && <Flex>{header}</Flex>}

          <Flex vertical flex={1}>
            <Menu
              mode="horizontal"
              items={items}
              selectedKeys={[pathnamePure]}
              overflowedIndicator={<MenuOutlined />}
              style={{ flex: 1 }}
            />
          </Flex>

          <Flex align="center" gap="middle">
            {isLoggedIn && (
              <>
                {checkRole('admin') && (
                  <Tag color="red" bordered={false}>
                    Admin
                  </Tag>
                )}
                <Avatar
                  src={user?.pictureUrl}
                  alt={user.name}
                  size="default"
                  onClick={() => router.push('/profile')}
                  style={{ cursor: 'pointer' }}
                >
                  {Utility.stringToInitials(user?.name)}
                </Avatar>
              </>
            )}
          </Flex>
        </Flex>
      </Header>
    </>
  )
}
