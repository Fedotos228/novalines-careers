'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClinet = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  }
})

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClinet}>
      {children}
    </QueryClientProvider>
  )
}