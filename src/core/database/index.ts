import { getDatabaseProtected } from './internal/protected'
import { DatabaseUnprotected } from './internal/unprotected'

export const Database = {
  getUnprotected: () => DatabaseUnprotected,
  get: getDatabaseProtected,
}
