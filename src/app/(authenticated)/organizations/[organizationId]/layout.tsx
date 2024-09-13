'use client'

import { useUserContext } from '@/core/context'
import { MrbSplashScreen } from '@/designSystem'
import { ReactNode, useEffect } from 'react'

type Props = { children: ReactNode }

export default function OrganizationsLayout({ children }: Props) {
  const { isLoadingOrganization, organization } = useUserContext()

  useEffect(() => {
    if (!isLoadingOrganization && !organization) {
      window.location.replace('/')
    }
  }, [isLoadingOrganization, organization])

  if (isLoadingOrganization) {
    return <MrbSplashScreen />
  }

  if (organization) {
    return <>{children}</>
  }
}
