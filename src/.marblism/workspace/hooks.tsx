'use client'

import { useParams, usePathname, useRouter } from 'next/navigation'
import { closeSnackbar } from 'notistack'
import { useEffect } from 'react'

const restoreUrl = (route: string, params: Record<string, string>) => {
  let routeRestored = route

  Object.entries(params).forEach(
    ([key, value]) => (routeRestored = routeRestored.replace(value, `:${key}`)),
  )

  return routeRestored
}

/**
 * Emit request when the path changed
 */
export const useMessageSend = (isActive = false) => {
  const pathname = usePathname()
  const params: any = useParams()

  useEffect(() => {
    if (!isActive) {
      return
    }

    window.parent.postMessage({ type: 'ready' }, '*')
  }, [isActive])

  useEffect(() => {
    if (!isActive) {
      return
    }

    const url = `${window.location.origin}${pathname}`

    const pathPure = restoreUrl(pathname, params)

    window.parent.postMessage({ type: 'navigation', url, pathPure }, '*')
  }, [isActive, pathname, params])
}

/**
 * Change the path on request
 */
export const useMessageReceived = (isActive = false) => {
  const router = useRouter()

  const handleMessage = event => {
    const canContinue = event?.data?.type === 'navigation'

    if (canContinue) {
      const path = event.data.path?.trim()

      if (path && path !== '') {
        router.push(path)
        closeSnackbar()
      }
    }
  }

  useEffect(() => {
    if (!isActive) {
      return
    }

    window.addEventListener('message', handleMessage)

    return () => {
      window.removeEventListener('message', handleMessage)
    }
  }, [])
}
