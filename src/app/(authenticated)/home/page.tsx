'use client'

import { Typography, Space, Card, Button } from 'antd'
import {
  InfoCircleOutlined,
  RocketOutlined,
  ApiOutlined,
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
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  return (
    <PageLayout layout="full-width">
      <Space
        direction="vertical"
        size="large"
        style={{ width: '100%', maxWidth: 800, margin: '0 auto' }}
      >
        <Title level={1} style={{ textAlign: 'center' }}>
          Welcome to Our Application
        </Title>
        <Paragraph style={{ textAlign: 'center', fontSize: '18px' }}>
          Discover how our application can streamline your workflow and boost
          productivity.
        </Paragraph>

        <Card>
          <Space direction="vertical" size="middle">
            <Space>
              <InfoCircleOutlined
                style={{ fontSize: '24px', color: '#1890ff' }}
              />
              <Title level={3}>How It Works</Title>
            </Space>
            <Paragraph>
              Our application provides a seamless experience for managing your
              data and APIs. Here's a quick overview of the main features:
            </Paragraph>
            <ul>
              <li>Upload and manage datasets</li>
              <li>Create and configure endpoints</li>
              <li>Monitor usage and performance</li>
              <li>Access comprehensive API documentation</li>
            </ul>
          </Space>
        </Card>

        <Card>
          <Space direction="vertical" size="middle">
            <Space>
              <RocketOutlined style={{ fontSize: '24px', color: '#52c41a' }} />
              <Title level={3}>Getting Started</Title>
            </Space>
            <Paragraph>
              To begin using the application, follow these simple steps:
            </Paragraph>
            <ol>
              <li>Navigate to the Upload Data page to add your datasets</li>
              <li>Create endpoints for your data in the Endpoints page</li>
              <li>
                Monitor your usage and manage payments in the Usage and Payment
                pages
              </li>
              <li>Refer to the API Documentation for integration details</li>
            </ol>
          </Space>
        </Card>

        <Card>
          <Space direction="vertical" size="middle">
            <Space>
              <ApiOutlined style={{ fontSize: '24px', color: '#722ed1' }} />
              <Title level={3}>Explore Features</Title>
            </Space>
            <Paragraph>
              Ready to dive in? Click on the buttons below to explore different
              sections of the application:
            </Paragraph>
            <Space wrap>
              <Button
                onClick={() =>
                  router.push(`/organizations/${params.organizationId}/upload`)
                }
              >
                Upload Data
              </Button>
              <Button
                onClick={() =>
                  router.push(
                    `/organizations/${params.organizationId}/endpoints`,
                  )
                }
              >
                Manage Endpoints
              </Button>
              <Button
                onClick={() =>
                  router.push(`/organizations/${params.organizationId}/usage`)
                }
              >
                View Usage
              </Button>
              <Button
                onClick={() =>
                  router.push(
                    `/organizations/${params.organizationId}/api-docs`,
                  )
                }
              >
                API Documentation
              </Button>
            </Space>
          </Space>
        </Card>
      </Space>
    </PageLayout>
  )
}
