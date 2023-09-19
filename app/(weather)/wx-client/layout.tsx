'use client'

import '@/app/globals.css'
import Search from '@/components/wx-client/Search'
import Settings from '@/components/wx-client/Settings'
import WeatherProvider from '@/components/wx-client/WeatherProvider'
import {ReactChildren} from '@/lib/types'
import '../weather.css'

/**
 * The weather (client) root layout.
 *
 * @see https://nextjs.org/docs/app/api-reference/file-conventions/layout
 */
export default function WeatherLayout({children}: ReactChildren) {
  return (
    <WeatherProvider>
      <Search />
      <section>{children}</section>
      <Settings />
    </WeatherProvider>
  )
}
