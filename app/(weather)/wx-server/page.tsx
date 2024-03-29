import DisplayWeather from '@/components/wx-server/DisplayWeather'
import {getForecast} from '@/lib/functions'
import {notFound} from 'next/navigation'

/**
 * The weather (server) homepage.
 *
 * @see https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts
 */
export const runtime = 'edge'

export default async function WxServerHome() {
  // Get the weather forecast.
  const {weather} = await getForecast('Enterprise, AL')

  // No forecast? Bail...
  if (!weather) {
    notFound()
  }

  return <DisplayWeather weather={weather} />
}
