'use client'

import { useState } from 'react'
import { Typography, Form, Input, Button, Card, Row, Col, Space } from 'antd'
import {
  CreditCardOutlined,
  LockOutlined,
  CheckCircleOutlined,
} from '@ant-design/icons'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function PaymentPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user, organization } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()
  const [isConfirming, setIsConfirming] = useState(false)
  const [paymentDetails, setPaymentDetails] = useState<any>(null)

  const { data: products, isLoading: isLoadingProducts } =
    Api.billing.findManyProducts.useQuery({})
  const { mutateAsync: createPaymentLink } =
    Api.billing.createPaymentLink.useMutation()

  const onFinish = async (values: any) => {
    setPaymentDetails(values)
    setIsConfirming(true)
  }

const handleConfirmPayment = async () => {
  try {
    if (!products || products.length === 0) {
      throw new Error('No products available')
    }
    const paymentLinkResponse = await createPaymentLink({ productId: products[0].id })
    router.push(paymentLinkResponse.url)
  } catch (error) {
    enqueueSnackbar('Failed to process payment. Please try again.', {
      variant: 'error',
    })
  }
}

  if (isLoadingProducts) {
    return (
      <PageLayout layout="full-width">
        <Text>Loading...</Text>
      </PageLayout>
    )
  }

  return (
    <PageLayout layout="full-width">
      <Row justify="center">
        <Col xs={24} sm={20} md={16} lg={12}>
          <Space direction="vertical" size="large" style={{ width: '100%' }}>
            <Title level={2}>Purchase Plan</Title>
            <Text>
              Enter your payment details to purchase a plan for{' '}
              {organization?.name}
            </Text>

            {!isConfirming ? (
              <Card>
                <Form layout="vertical" onFinish={onFinish}>
                  <Form.Item
                    name="cardNumber"
                    label="Card Number"
                    rules={[
                      {
                        required: true,
                        message: 'Please enter your card number',
                      },
                    ]}
                  >
                    <Input
                      prefix={<CreditCardOutlined />}
                      placeholder="1234 5678 9012 3456"
                    />
                  </Form.Item>
                  <Row gutter={16}>
                    <Col span={12}>
                      <Form.Item
                        name="expiryDate"
                        label="Expiry Date"
                        rules={[
                          {
                            required: true,
                            message: 'Please enter the expiry date',
                          },
                        ]}
                      >
                        <Input placeholder="MM/YY" />
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item
                        name="cvv"
                        label="CVV"
                        rules={[
                          { required: true, message: 'Please enter the CVV' },
                        ]}
                      >
                        <Input prefix={<LockOutlined />} placeholder="123" />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Form.Item
                    name="cardholderName"
                    label="Cardholder Name"
                    rules={[
                      {
                        required: true,
                        message: 'Please enter the cardholder name',
                      },
                    ]}
                  >
                    <Input placeholder="John Doe" />
                  </Form.Item>
                  <Form.Item>
                    <Button type="primary" htmlType="submit" block>
                      Review Order
                    </Button>
                  </Form.Item>
                </Form>
              </Card>
            ) : (
              <Card>
                <Title level={4}>Order Summary</Title>
                <Text>Plan: {products?.[0]?.name}</Text>
                <br />
                <Text>Price: ${products?.[0]?.price.toString()}</Text>
                <br />
                <Text>
                  Card: **** **** **** {paymentDetails?.cardNumber.slice(-4)}
                </Text>
                <br />
                <br />
                <Button
                  type="primary"
                  onClick={handleConfirmPayment}
                  icon={<CheckCircleOutlined />}
                  block
                >
                  Confirm and Pay
                </Button>
                <Button
                  onClick={() => setIsConfirming(false)}
                  style={{ marginTop: '10px' }}
                  block
                >
                  Edit Payment Details
                </Button>
              </Card>
            )}
          </Space>
        </Col>
      </Row>
    </PageLayout>
  )
}
