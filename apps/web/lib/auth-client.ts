import { createAuthClient } from 'better-auth/client'
import { inferAdditionalFields } from 'better-auth/client/plugins'
import { auth } from '@/lib/auth'

export const authClient = createAuthClient({
  plugins: [inferAdditionalFields<typeof auth>()],
})

export const { signIn, signUp, useSession } = createAuthClient()