import { Utility } from '@/core/helpers/utility'
import { Organization, OrganizationRole, User } from '@prisma/client'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Api } from '../../trpc'

type OrganizationWithRoles = Organization & { roles: OrganizationRole[] }
export interface OrganizationContextType {
  organization: OrganizationWithRoles
  organizationRoles: OrganizationRole[]
  organizations: Organization[]
  isLoadingOrganization: boolean
  checkOrganizationRole(name: string): boolean
  refetchOrganization(): void
  refetchOrganizations(): void
}

export const useOrganizationContext = (options: {
  user: User
}): OrganizationContextType => {
  const params = useParams<{ organizationId?: string }>()

  const [organization, setOrganization] = useState<OrganizationWithRoles>()
  const [isLoadingOrganization, setLoadingOrganization] = useState(true)
  const [isLoadingOrganizations, setLoadingOrganizations] = useState(true)

  const organizationRoles = organization?.roles ?? []
  const keyLocalStorage = `organizationId-${options.user?.id}`
  const organizationIdSaved =
    typeof window !== 'undefined' ? localStorage.getItem(keyLocalStorage) : null

  /* --------------------------------- QUERIES -------------------------------- */

  const { data: organizations, refetch: refetchOrganizations } =
    Api.organization.findMany.useQuery(
      {
        where: { roles: { some: { userId: options.user?.id } } },
        orderBy: { name: 'asc' },
      },
      { enabled: false, initialData: [] },
    )

  const organizationId =
    params.organizationId ??
    organization?.id ??
    organizationIdSaved ??
    organizations[0]?.id

  const { refetch: refetchOrganization } = Api.organization.findUnique.useQuery(
    {
      where: { id: organizationId },
      include: { roles: { where: { userId: options.user?.id } } },
    },
    {
      enabled: false,
      onSuccess(organization) {
        if (!organization) {
          window.location.replace('/home')
          localStorage.removeItem(keyLocalStorage)
        } else {
          setOrganization(organization)
          localStorage.setItem(keyLocalStorage, organization.id)
        }
      },
      onError() {
        setOrganization(null)
        localStorage.removeItem(keyLocalStorage)
      },
    },
  )

  /* --------------------------------- EFFECTS -------------------------------- */

  useEffect(() => {
    handleRefreshOrganizations()
  }, [options.user?.id])

  useEffect(() => {
    handleRefreshOrganization()
  }, [organizationId, options.user?.id])

  /* -------------------------------- HANDLERS -------------------------------- */

  const checkOrganizationRole = (roleName: string) => {
    return !!organizationRoles?.find(role => role.name === roleName)
  }

  const handleRefreshOrganizations = async () => {
    const canFetch = Utility.isDefined(options.user?.id)

    if (canFetch) {
      setLoadingOrganizations(true)
      await refetchOrganizations()
      setLoadingOrganizations(false)
    }
  }

  const handleRefreshOrganization = async () => {
    const canFetch =
      Utility.isDefined(organizationId) &&
      Utility.isDefined(options.user) &&
      organizationId !== organization?.id

    if (canFetch) {
      setLoadingOrganization(true)
      await refetchOrganization()
      setLoadingOrganization(false)
    }
  }

  return {
    organization,
    organizationRoles,
    organizations,
    refetchOrganization: handleRefreshOrganization,
    refetchOrganizations: handleRefreshOrganizations,
    checkOrganizationRole,
    isLoadingOrganization: isLoadingOrganizations || isLoadingOrganization,
  }
}
