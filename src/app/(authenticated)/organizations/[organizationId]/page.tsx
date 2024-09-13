'use client'

import { useUserContext } from '@/core/context'
import { MrbSplashScreen } from '@/designSystem'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function OrganizationPage() {
  const router = useRouter()

  const { organization } = useUserContext()

  useEffect(() => {
    if (organization) {
      router.push(`/organizations/${organization.id}/members`)
    }
  }, [organization])

  return <MrbSplashScreen />
}
