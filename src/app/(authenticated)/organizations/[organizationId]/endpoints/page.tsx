'use client'

import { Typography, Table, Tag, Space, Button } from 'antd'
import {
  DatabaseOutlined,
  CheckCircleOutlined,
  CloseCircleOutlined,
} from '@ant-design/icons'
const { Title, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function EndpointsPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user, organization } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const organizationId = params.organizationId as string

  const { data: datasets, isLoading: datasetsLoading } =
    Api.dataset.findMany.useQuery({
      where: { organizationId },
      include: { endpoints: true },
    })

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text: string, record: any) => (
        <a
          onClick={() =>
            router.push(
              `/organizations/${organizationId}/endpoints/${record.id}`,
            )
          }
        >
          {text}
        </a>
      ),
    },
    {
      title: 'URL',
      dataIndex: 'url',
      key: 'url',
    },
    {
      title: 'Method',
      dataIndex: 'method',
      key: 'method',
    },
    {
      title: 'Status',
      key: 'status',
      render: () => (
        <Tag icon={<CheckCircleOutlined />} color="success">
          Active
        </Tag>
      ),
    },
    {
      title: 'Created At',
      dataIndex: 'dateCreated',
      key: 'dateCreated',
      render: (date: string) => dayjs(date).format('YYYY-MM-DD HH:mm'),
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (text: string, record: any) => (
        <Space size="middle">
          <Button
            onClick={() =>
              router.push(
                `/organizations/${organizationId}/endpoints/${record.id}`,
              )
            }
          >
            View Details
          </Button>
        </Space>
      ),
    },
  ]

  const allEndpoints = datasets?.flatMap(dataset => dataset.endpoints) || []

  return (
    <PageLayout layout="full-width">
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '24px' }}>
        <Title level={2}>
          <DatabaseOutlined /> Data Endpoints
        </Title>
        <Paragraph>
          View and manage all your created data endpoints. Check their status
          and usage statistics.
        </Paragraph>

        {datasetsLoading ? (
          <Paragraph>Loading endpoints...</Paragraph>
        ) : (
          <Table
            dataSource={allEndpoints}
            columns={columns}
            rowKey="id"
            pagination={{ pageSize: 10 }}
          />
        )}
      </div>
    </PageLayout>
  )
}
