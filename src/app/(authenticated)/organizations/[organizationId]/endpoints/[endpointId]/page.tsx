'use client'

import { Prisma } from '@prisma/client'
import { Typography, Card, Button, Space, Spin, Modal, Input } from 'antd'
import {
  ExclamationCircleOutlined,
  KeyOutlined,
  DeleteOutlined,
} from '@ant-design/icons'
import { useState } from 'react'
const { Title, Text, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function EndpointDetailsPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user, organization } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()
  const [apiKey, setApiKey] = useState('')

  const endpointId = params.endpointId as string
  const organizationId = params.organizationId as string

  const {
    data: endpoint,
    isLoading,
    refetch,
  } = Api.endpoint.findUnique.useQuery({
    where: { id: endpointId },
    include: { dataset: true },
  })

  const { mutateAsync: updateEndpoint } = Api.endpoint.update.useMutation()
  const { mutateAsync: deleteEndpoint } = Api.endpoint.delete.useMutation()
  const { data: apiKeys, isLoading: isLoadingApiKeys } =
    Api.apiKey.findMany.useQuery({
      where: { organizationId: organizationId },
    })

  const handleDeactivate = async () => {
    try {
      await updateEndpoint({ where: { id: endpointId }, data: { url: '' } })
      enqueueSnackbar('Endpoint deactivated successfully', {
        variant: 'success',
      })
      refetch()
    } catch (error) {
      enqueueSnackbar('Failed to deactivate endpoint', { variant: 'error' })
    }
  }

  const handleDelete = () => {
    Modal.confirm({
      title: 'Are you sure you want to delete this endpoint?',
      icon: <ExclamationCircleOutlined />,
      content: 'This action cannot be undone.',
      onOk: async () => {
        try {
          await deleteEndpoint({ where: { id: endpointId } })
          enqueueSnackbar('Endpoint deleted successfully', {
            variant: 'success',
          })
          router.push(`/organizations/${organizationId}/endpoints`)
        } catch (error) {
          enqueueSnackbar('Failed to delete endpoint', { variant: 'error' })
        }
      },
    })
  }

  if (isLoading || isLoadingApiKeys) {
    return (
      <PageLayout layout="full-width">
        <Spin size="large" />
      </PageLayout>
    )
  }

  return (
    <PageLayout layout="full-width">
      <Card style={{ maxWidth: 800, margin: '0 auto' }}>
        <Title level={2}>Endpoint Details</Title>
        <Paragraph>View and manage the details of your endpoint.</Paragraph>

        {endpoint && (
          <>
            <Title level={4}>Name: {endpoint.name}</Title>
            <Text>URL: {endpoint.url}</Text>
            <br />
            <Text>Method: {endpoint.method}</Text>
            <br />
            <Text>Dataset: {endpoint.dataset?.name}</Text>

            <Title level={4} style={{ marginTop: 24 }}>
              API Key
            </Title>
            <Space direction="vertical" style={{ width: '100%' }}>
              <Input.Password
                prefix={<KeyOutlined />}
                value={apiKey || (apiKeys && apiKeys[0]?.key) || ''}
                onChange={e => setApiKey(e.target.value)}
                readOnly
              />
              <Text type="secondary">
                Use this API key to access the endpoint.
              </Text>
            </Space>

            <Title level={4} style={{ marginTop: 24 }}>
              Documentation
            </Title>
            <Paragraph>
              To access this endpoint, make a {endpoint.method} request to:
              <br />
              <Text code>{`${endpoint.url}`}</Text>
              <br />
              Include the API key in the headers:
              <br />
              <Text code>{`Authorization: Bearer YOUR_API_KEY`}</Text>
            </Paragraph>

            <Space style={{ marginTop: 24 }}>
              <Button onClick={handleDeactivate} disabled={!endpoint.url}>
                Deactivate Endpoint
              </Button>
              <Button danger icon={<DeleteOutlined />} onClick={handleDelete}>
                Delete Endpoint
              </Button>
            </Space>
          </>
        )}
      </Card>
    </PageLayout>
  )
}
