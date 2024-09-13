import { useUserContext } from '@/core/context'
import { Col, Layout, Row } from 'antd'
import { useRouter } from 'next/navigation'
import { ReactNode } from 'react'
import { useDesignSystem } from '../../provider'
import { Leftbar } from './components/Leftbar'
import { Topbar } from './components/Topbar'

import { OrganizationSelect } from './components/OrganizationSelect'

interface Props {
  children: ReactNode
}

export const NavigationLayout: React.FC<Props> = ({ children }) => {
  const router = useRouter()

  const { organization, authenticationStatus: isLoggedIn } = useUserContext()

  const { isMobile } = useDesignSystem()

  const goTo = (url: string) => {
    router.push(url)
  }

  const itemsOrganization = [
    {
      key: '/organizations/:organizationId/home',
      label: 'Home',
      onClick: () =>
        goTo(
          '/organizations/:organizationId/home'.replace(
            ':organizationId',
            organization.id,
          ),
        ),
    },

    {
      key: '/organizations/:organizationId/upload',
      label: 'Upload Data',
      onClick: () =>
        goTo(
          '/organizations/:organizationId/upload'.replace(
            ':organizationId',
            organization.id,
          ),
        ),
    },

    {
      key: '/organizations/:organizationId/endpoints',
      label: 'Endpoints',
      onClick: () =>
        goTo(
          '/organizations/:organizationId/endpoints'.replace(
            ':organizationId',
            organization.id,
          ),
        ),
    },

    {
      key: '/organizations/:organizationId/payment',
      label: 'Payment',
      onClick: () =>
        goTo(
          '/organizations/:organizationId/payment'.replace(
            ':organizationId',
            organization.id,
          ),
        ),
    },

    {
      key: '/organizations/:organizationId/usage',
      label: 'Usage',
      onClick: () =>
        goTo(
          '/organizations/:organizationId/usage'.replace(
            ':organizationId',
            organization.id,
          ),
        ),
    },

    {
      key: '/organizations/:organizationId/api-docs',
      label: 'API Documentation',
      onClick: () =>
        goTo(
          '/organizations/:organizationId/api-docs'.replace(
            ':organizationId',
            organization.id,
          ),
        ),
    },

    {
      key: '/organizations/:organizationId/pricing',
      label: 'Pricing',
      onClick: () =>
        goTo(
          '/organizations/:organizationId/pricing'.replace(
            ':organizationId',
            organization.id,
          ),
        ),
    },
  ].filter(_ => !!organization)

  const itemsLeftbar = [
    {
      key: '/home',
      label: 'Home',
      onClick: () => goTo('/home'),
    },

    ...itemsOrganization,
  ]

  const itemsTopbar = []

  const itemsLeftbarBottom = []

  const itemsMobile = [
    {
      key: '/profile',
      label: 'Profile',
      onClick: () => goTo('/profile'),
    },
    ...itemsTopbar,
    ...itemsLeftbar,
    ...itemsLeftbarBottom,
  ]

  const isLeftbar = itemsLeftbar.length > 0 && !isMobile

  return (
    <>
      <Layout>
        <Row
          style={{
            height: '100vh',
            width: '100vw',
          }}
        >
          {isLeftbar && (
            <Col>
              <Leftbar
                header={<OrganizationSelect />}
                items={itemsLeftbar}
                itemsBottom={itemsLeftbarBottom}
              />
            </Col>
          )}

          <Col
            style={{
              flex: 1,
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
            }}
          >
            <Topbar
              isMobile={isMobile}
              itemsMobile={itemsMobile}
              isLoggedIn={isLoggedIn === 'authenticated'}
              items={itemsTopbar}
              header={!isLeftbar && <OrganizationSelect />}
            />

            <Col
              style={{
                flex: 1,
                overflowY: 'auto',
                overflowX: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              {children}
            </Col>
          </Col>
        </Row>
      </Layout>
    </>
  )
}
