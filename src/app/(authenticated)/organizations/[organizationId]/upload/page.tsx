'use client'

import { useState } from 'react'
import { Typography, Upload, Button, Table, Space } from 'antd'
import {
  UploadOutlined,
  FileExcelOutlined,
  FileTextOutlined,
} from '@ant-design/icons'
const { Title, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function UploadDataPage() {
  const router = useRouter()
  const params = useParams<{ organizationId: string }>()
  const { user, organization } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()
  const [fileList, setFileList] = useState<any[]>([])
  const [previewData, setPreviewData] = useState<any[]>([])
  const { mutateAsync: uploadFile } = useUploadPublic()
  const { mutateAsync: createDataset } = Api.dataset.create.useMutation()

  const handleUpload = async (info: any) => {
    const { file, fileList: newFileList } = info
    setFileList(newFileList)

    if (file.status === 'done') {
      try {
        const { url } = await uploadFile({ file: file.originFileObj })
        const response = await fetch(url)
        const text = await response.text()
        const rows = text.split('\n').map(row => row.split(','))
        const headers = rows[0]
        const data = rows.slice(1).map(row => {
          const obj: any = {}
          headers.forEach((header: string, index: number) => {
            obj[header] = row[index]
          })
          return obj
        })
        setPreviewData(data)
        enqueueSnackbar('File uploaded successfully', { variant: 'success' })
      } catch (error) {
        enqueueSnackbar('Error uploading file', { variant: 'error' })
      }
    }
  }

  const handleConfirm = async () => {
    try {
      await createDataset({
        data: {
          name: fileList[0].name,
          organizationId: params.organizationId,
          description: 'Uploaded dataset',
        },
      })
      enqueueSnackbar('Dataset created successfully', { variant: 'success' })
      router.push(`/organizations/${params.organizationId}/endpoints`)
    } catch (error) {
      enqueueSnackbar('Error creating dataset', { variant: 'error' })
    }
  }

  const columns = previewData[0]
    ? Object.keys(previewData[0]).map(key => ({
        title: key,
        dataIndex: key,
        key: key,
      }))
    : []

  return (
    <PageLayout layout="full-width">
      <Space
        direction="vertical"
        size="large"
        style={{ width: '100%', maxWidth: 800, margin: '0 auto' }}
      >
        <Title level={2}>Upload Data</Title>
        <Paragraph>
          Upload your tabular data in CSV or Excel format. You can preview the
          data before processing.
        </Paragraph>
        <Upload
          accept=".csv,.xlsx,.xls"
          fileList={fileList}
          onChange={handleUpload}
          maxCount={1}
        >
          <Button icon={<UploadOutlined />}>Select File</Button>
        </Upload>
        {previewData.length > 0 && (
          <>
            <Title level={4}>Data Preview</Title>
            <Table
              dataSource={previewData}
              columns={columns}
              scroll={{ x: true }}
              pagination={{ pageSize: 5 }}
            />
            <Button type="primary" onClick={handleConfirm}>
              Confirm and Process Data
            </Button>
          </>
        )}
      </Space>
    </PageLayout>
  )
}
