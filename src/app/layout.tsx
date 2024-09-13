'use client'

import { WorkspaceProvider } from '@/.marblism/workspace'
import { AnalyticsProvider } from '@/core/analytics'
import { UserProvider } from '@/core/context'
import { TRPCProvider } from '@/core/trpc'
import { DesignSystemProvider } from '@/designSystem'
import { SessionProvider } from 'next-auth/react'

type Props = { children: React.ReactNode }

export default function RootLayout({ children }: Props) {
  return (
    <DesignSystemProvider>
      <SessionProvider>
        <TRPCProvider>
          <AnalyticsProvider>
            <WorkspaceProvider>
              <UserProvider>{children}</UserProvider>
            </WorkspaceProvider>
          </AnalyticsProvider>
        </TRPCProvider>
      </SessionProvider>
    </DesignSystemProvider>
  )
}
