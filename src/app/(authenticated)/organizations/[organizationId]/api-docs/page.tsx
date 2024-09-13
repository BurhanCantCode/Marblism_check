'use client'

import { Typography, Card, Space, Collapse, Divider } from 'antd'
import { BookOutlined, CodeOutlined } from '@ant-design/icons'
const { Title, Text, Paragraph } = Typography
const { Panel } = Collapse
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function APIDocumentationPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const endpoints = [
    {
      name: 'User',
      methods: [
        'findUnique',
        'findFirst',
        'findMany',
        'create',
        'update',
        'delete',
      ],
    },
    {
      name: 'Organization',
      methods: [
        'findUnique',
        'findFirst',
        'findMany',
        'create',
        'update',
        'delete',
      ],
    },
    {
      name: 'Dataset',
      methods: [
        'findUnique',
        'findFirst',
        'findMany',
        'create',
        'update',
        'delete',
      ],
    },
    {
      name: 'Endpoint',
      methods: [
        'findUnique',
        'findFirst',
        'findMany',
        'create',
        'update',
        'delete',
      ],
    },
  ]

  const renderCodeExample = (endpoint: string, method: string) => {
    const codeExample = `
import { Api } from '@/core/trpc'

// Example for ${method}
const { ${method === 'create' || method === 'update' || method === 'delete' ? 'mutateAsync' : 'data, isLoading, refetch'} } = Api.${endpoint.toLowerCase()}.${method}.use${method === 'create' || method === 'update' || method === 'delete' ? 'Mutation' : 'Query'}()

${
  method === 'findUnique' || method === 'findFirst'
    ? `
// Usage
const ${endpoint.toLowerCase()}Id = '123'
const result = await ${method}({ where: { id: ${endpoint.toLowerCase()}Id } })
`
    : method === 'findMany'
      ? `
// Usage
const result = await findMany({})
`
      : method === 'create'
        ? `
// Usage
const newData = { /* Add required fields here */ }
const created${endpoint} = await mutateAsync({ data: newData })
`
        : method === 'update'
          ? `
// Usage
const ${endpoint.toLowerCase()}Id = '123'
const updatedData = { /* Add fields to update */ }
const updated${endpoint} = await mutateAsync({ where: { id: ${endpoint.toLowerCase()}Id }, data: updatedData })
`
          : `
// Usage
const ${endpoint.toLowerCase()}Id = '123'
await mutateAsync({ where: { id: ${endpoint.toLowerCase()}Id } })
`
}
`
    return <pre>{codeExample}</pre>
  }

  return (
    <PageLayout layout="full-width">
      <Space
        direction="vertical"
        size="large"
        style={{ width: '100%', maxWidth: 800, margin: '0 auto' }}
      >
        <Title level={2}>
          <BookOutlined /> API Documentation
        </Title>
        <Paragraph>
          Welcome to the API documentation. Here you can find comprehensive
          information on how to use our API endpoints and integrate them into
          your applications.
        </Paragraph>

        <Card
          title={
            <Title level={4}>
              <CodeOutlined /> Endpoints and Methods
            </Title>
          }
        >
          <Collapse>
            {endpoints.map(endpoint => (
              <Panel header={endpoint.name} key={endpoint.name}>
                <Space direction="vertical" style={{ width: '100%' }}>
                  {endpoint.methods.map(method => (
                    <Card
                      key={`${endpoint.name}-${method}`}
                      size="small"
                      title={method}
                    >
                      {renderCodeExample(endpoint.name, method)}
                    </Card>
                  ))}
                </Space>
              </Panel>
            ))}
          </Collapse>
        </Card>

        <Card
          title={
            <Title level={4}>
              <BookOutlined /> General Usage Guidelines
            </Title>
          }
        >
          <Text>
            1. All API functions are auto-generated and available using TRPC
            Client with @trpc/react-query.
          </Text>
          <Divider />
          <Text>
            2. Always declare useMutation and useQuery hooks at the top level of
            your component.
          </Text>
          <Divider />
          <Text>
            3. Be aware of Prisma types and include relations when necessary in
            your queries.
          </Text>
          <Divider />
          <Text>
            4. Most 'where' conditions require an 'id', especially for
            connectOrCreate operations.
          </Text>
        </Card>
      </Space>
    </PageLayout>
  )
}
