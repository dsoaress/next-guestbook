import Redis from 'ioredis'

const redis = new Redis(process.env.REDIS_URL)

export async function saveCache(key: string, value: any) {
  await redis.set(key, JSON.stringify(value))
}

export async function recoverCache<T>(key: string): Promise<T | null> {
  const data = await redis.get(key)

  if (!data) {
    return null
  }

  const parsedData: T = JSON.parse(data)

  return parsedData
}

export async function invalidadeCache(key: string) {
  await redis.del(key)
}
