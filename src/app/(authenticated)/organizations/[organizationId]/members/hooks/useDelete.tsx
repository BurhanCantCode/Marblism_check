import { useUserContext } from '@/core/context'
import { Api } from '@/core/trpc'
import { OrganizationRole, User } from '@prisma/client'
import { useSnackbar } from 'notistack'
import { useState } from 'react'

type UserWithOrganizationRoles = User & {
  organizationRoles: OrganizationRole[]
}

type Props = { users: UserWithOrganizationRoles[] }

export const useDelete = ({ users }: Props) => {
  const { enqueueSnackbar } = useSnackbar()

  const { user: userLogged, checkOrganizationRole } = useUserContext()

  const [isLoading, setLoading] = useState(false)

  const countOwners = users.filter(user =>
    user.organizationRoles.find(role => role.name === 'owner'),
  ).length

  const { mutateAsync: deleteOrganizationRole } =
    Api.organizationRole.deleteMany.useMutation()

  const canDeleteUser = (user: UserWithOrganizationRoles) => {
    const isOwner = user.organizationRoles.find(
      organizationRole => organizationRole.name === 'owner',
    )

    const isSelf = userLogged.id === user.id

    if (isSelf) {
      return !isOwner || countOwners > 1
    } else {
      return checkOrganizationRole('owner')
    }
  }

  const deleteUser = async (user: UserWithOrganizationRoles) => {
    setLoading(true)

    let isSuccess = false

    if (canDeleteUser(user)) {
      try {
        await deleteOrganizationRole({
          where: {
            userId: user.id,
          },
        })

        if (user.id === userLogged.id) {
          window.location.replace('/')
        } else {
          enqueueSnackbar(`${user.email} has been removed`)
        }
      } catch (error) {
        enqueueSnackbar(error.message, { variant: 'error' })
      }
    }

    setLoading(false)

    return isSuccess
  }

  return {
    deleteUser,
    isLoadingDelete: isLoading,
    canDeleteUser,
  }
}
