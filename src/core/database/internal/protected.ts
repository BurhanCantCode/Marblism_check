import { Authentication } from '@/core/authentication'
import { enhance } from '@zenstackhq/runtime'
import { DatabaseUnprotected } from './unprotected'

export async function getDatabaseProtected() {
  const session = await Authentication.getSession()

  return enhance(DatabaseUnprotected, { user: session?.user as any })
}
