import { env } from '~/env'

export function api(endpoint: string, options?: RequestInit) {
  const baseUrl = env.NEXT_PUBLIC_API_URL
  const prefix = 'api'
  const url = new URL(`${prefix}/${endpoint}`, baseUrl)

  return fetch(url, options)
}
