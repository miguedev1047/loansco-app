import { auth } from '@/lib/auth'
import { NextRequest } from 'next/server'

export async function createContext(opts: NextRequest) {
  const session = await auth.api.getSession({ headers: opts.headers })
  return { session }
}

export type Context = Awaited<ReturnType<typeof createContext>>
