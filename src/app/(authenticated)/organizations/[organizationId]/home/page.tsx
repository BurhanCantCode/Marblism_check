'use client'

import { Typography, Card, Row, Col, Statistic, Button } from 'antd'
import {
  UploadOutlined,
  ApiOutlined,
  BarChartOutlined,
} from '@ant-design/icons'
const { Title, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function HomePage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user, organization } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const { data: datasets, isLoading: datasetsLoading } =
    Api.dataset.findMany.useQuery({
      where: { organizationId: params.organizationId },
      include: { endpoints: true },
    })

  const { data: apiKeys, isLoading: apiKeysLoading } =
    Api.apiKey.findMany.useQuery({
      where: { organizationId: params.organizationId },
    })

  const handleUploadClick = () => {
    router.push(`/organizations/${params.organizationId}/upload`)
  }

  const handleManageEndpointsClick = () => {
    router.push(`/organizations/${params.organizationId}/endpoints`)
  }

  return (
    <PageLayout layout="full-width">
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '24px' }}>
        <Title level={2}>Data Endpoints Overview</Title>
        <Paragraph>
          Welcome to your data endpoints dashboard. Here you can view your usage
          statistics and access quick links to manage your data.
        </Paragraph>

        <Row gutter={[16, 16]}>
          <Col xs={24} sm={12} md={8}>
            <Card>
              <Statistic
                title="Total Datasets"
                value={datasets?.length || 0}
                prefix={<BarChartOutlined />}
              />
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Card>
              <Statistic
                title="Total Endpoints"
                value={datasets?.reduce(
                  (acc, dataset) => acc + (dataset.endpoints?.length || 0),
                  0,
                )}
                prefix={<ApiOutlined />}
              />
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Card>
              <Statistic
                title="Active API Keys"
                value={apiKeys?.filter(key => key.isActive).length || 0}
                prefix={<UploadOutlined />}
              />
            </Card>
          </Col>
        </Row>

        <Title level={3} style={{ marginTop: '24px' }}>
          Quick Actions
        </Title>
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={12}>
            <Button
              type="primary"
              icon={<UploadOutlined />}
              onClick={handleUploadClick}
              block
            >
              Upload New Data
            </Button>
          </Col>
          <Col xs={24} sm={12}>
            <Button
              icon={<ApiOutlined />}
              onClick={handleManageEndpointsClick}
              block
            >
              Manage Endpoints
            </Button>
          </Col>
        </Row>

        <Title level={3} style={{ marginTop: '24px' }}>
          Recent Datasets
        </Title>
        <Row gutter={[16, 16]}>
          {datasets?.slice(0, 3).map(dataset => (
            <Col xs={24} sm={12} md={8} key={dataset.id}>
              <Card title={dataset.name}>
                <Paragraph ellipsis={{ rows: 2 }}>
                  {dataset.description}
                </Paragraph>
                <Statistic
                  title="Endpoints"
                  value={dataset.endpoints?.length || 0}
                />
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </PageLayout>
  )
}
