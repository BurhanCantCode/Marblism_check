import { Flex, Menu, Row } from 'antd'
import Sider from 'antd/es/layout/Sider'
import { useParams, usePathname } from 'next/navigation'
import { ReactNode } from 'react'

interface Props {
  header?: ReactNode
  items: { key: string; label: string; onClick: () => void }[]
  itemsBottom?: { key: string; label: string; onClick: () => void }[]
}

export const Leftbar: React.FC<Props> = ({ header, items, itemsBottom }) => {
  const pathname = usePathname()
  const params: Record<string, string> = useParams()

  let pathnamePure = pathname

  Object.entries(params).forEach(([key, value]) => {
    pathnamePure = pathnamePure.replace(`/${value}`, `/:${key}`)
  })

  return (
    <>
      <Sider width={250} trigger={null} style={{ height: '100%' }}>
        {header && <Row style={{ padding: 16 }}>{header}</Row>}
        <Flex vertical justify="space-between" flex={1} className="pb-4">
          <Menu
            mode="inline"
            inlineIndent={16}
            items={items}
            selectedKeys={[pathnamePure]}
            style={{ width: '100%' }}
          />
          <Menu
            mode="inline"
            inlineIndent={16}
            items={itemsBottom}
            style={{ width: '100%' }}
          />
        </Flex>
      </Sider>
    </>
  )
}
