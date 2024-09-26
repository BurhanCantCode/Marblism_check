'use client'

import { Typography, Card, Row, Col, Statistic, Progress, Spin } from 'antd';
import {
  CreditCardOutlined,
  ApiOutlined,
  BarChartOutlined,
} from '@ant-design/icons';
import { useUserContext } from '@/core/context';
import { useRouter, useParams } from 'next/navigation';
import { useSnackbar } from 'notistack';
import dayjs from 'dayjs';
import { Api } from '@/core/trpc';
import { PageLayout } from '@/designSystem/layouts/Page.layout';

const { Title, Paragraph } = Typography;

export default function UsagePage() {
  const router = useRouter();
  const params = useParams<{ organizationId: string }>();
  const { user, organization } = useUserContext();
  const { enqueueSnackbar } = useSnackbar();

  const { data: subscriptions, isLoading: isLoadingSubscriptions } =
    Api.billing.findManySubscriptions.useQuery({
      organizationId: params.organizationId,
    });
  const { data: apiKeys, isLoading: isLoadingApiKeys } =
    Api.apiKey.findMany.useQuery({
      where: { organizationId: params.organizationId },
    });

  if (isLoadingSubscriptions || isLoadingApiKeys) {
    return (
      <PageLayout layout="full-width">
        <Spin size="large" />
      </PageLayout>
    );
  }

  const currentSubscription = subscriptions?.[0];
  const currentApiKey = apiKeys?.[0];

  // For this example, we'll assume a fixed number of total credits and calculate usage
  const totalCredits = 10000;
  const usedCredits = 3500;
  const remainingCredits = totalCredits - usedCredits;
  const usagePercentage = (usedCredits / totalCredits) * 100;

  return (
    <PageLayout layout="full-width">
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '24px' }}>
        <Title level={2}>Usage Statistics</Title>
        <Paragraph>
          View your current plan, limitations, and endpoint usage statistics.
        </Paragraph>

        <Row gutter={[16, 16]}>
          <Col xs={24} md={12}>
            <Card title="Current Plan" extra={<CreditCardOutlined />}>
              <Statistic
                title="Plan Name"
                value={currentSubscription?.status || 'No active subscription'}
              />
              <Statistic
                title="Expiration Date"
                value={
                  currentSubscription
                    ? dayjs(currentSubscription.endDate).format('MMMM D, YYYY')
                    : 'N/A'
                }
              />
            </Card>
          </Col>
          <Col xs={24} md={12}>
            <Card title="API Key Information" extra={<ApiOutlined />}>
              <Statistic
                title="API Key Status"
                value={currentApiKey?.isActive ? 'Active' : 'Inactive'}
              />
              <Statistic
                title="Expiration Date"
                value={
                  currentApiKey
                    ? dayjs(currentApiKey.expirationDate).format('MMMM D, YYYY')
                    : 'N/A'
                }
              />
            </Card>
          </Col>
        </Row>

        <Card
          title="Credit Usage"
          extra={<BarChartOutlined />}
          style={{ marginTop: '16px' }}
        >
          <Row gutter={[16, 16]}>
            <Col xs={24} md={12}>
              <Statistic
                title="Total Credits"
                value={totalCredits.toString()}
              />
              <Statistic title="Used Credits" value={usedCredits.toString()} />
              <Statistic
                title="Remaining Credits"
                value={remainingCredits.toString()}
              />
            </Col>
            <Col xs={24} md={12}>
              <Progress
                type="circle"
                percent={Math.round(usagePercentage)}
                format={percent => `${percent}% Used`}
                width={200}
              />
            </Col>
          </Row>
        </Card>
      </div>
    </PageLayout>
  );
}
