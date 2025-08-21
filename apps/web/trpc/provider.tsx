'use client'

import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { queryClient, trpcClient } from '@/trpc/client'
import { TRPCProvider } from '@/trpc/trpc'

export function TRPCAppProvider({ children }: React.PropsWithChildren) {
  return (
    <QueryClientProvider client={queryClient}>
      <TRPCProvider
        trpcClient={trpcClient}
        queryClient={queryClient}
      >
        {children}
        <ReactQueryDevtools />
      </TRPCProvider>
    </QueryClientProvider>
  )
}
