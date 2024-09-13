'use client'
import dynamic from 'next/dynamic'
import posthog from 'posthog-js'
import { PostHogProvider } from 'posthog-js/react'
import { ReactNode, useEffect } from 'react'
import { Configuration } from '../../configuration'
import { Api } from '../../trpc'

const PostHogPageView = dynamic(() => import('./PostHogPageView'), {
  ssr: false,
})

export function AnalyticsProvider({ children }: { children: ReactNode }) {
  const { data, isLoading } = Api.configuration.getPublic.useQuery()

  useEffect(() => {
    const isProduction = Configuration.isProduction()
    const canActivate =
      typeof window !== 'undefined' && !isLoading && data && isProduction

    if (canActivate) {
      const key = data['PUBLIC_POSTHOG_KEY']
      const host = data['PUBLIC_POSTHOG_HOST']

      try {
        posthog.init(key, {
          api_host: host,
          person_profiles: 'identified_only',
          capture_pageview: false,
        })
      } catch (error) {
        console.log(`Could not start analytics: ${error.message}`)
      }
    }
  }, [data, isLoading])

  return (
    <PostHogProvider client={posthog}>
      <PostHogPageView />
      {children}
    </PostHogProvider>
  )
}
