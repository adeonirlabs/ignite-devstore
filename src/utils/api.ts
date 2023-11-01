import { env } from '~/env'

export function api(endpoint: string, options?: RequestInit) {
  const baseUrl = env.NEXT_PUBLIC_API_URL
  const url = new URL(endpoint, baseUrl)

  return fetch(url, options)
}
