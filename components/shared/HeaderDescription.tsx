'use client'

import {usePathname} from 'next/navigation'

type Route = '/' | '/wx-server' | '/wx-client'

const description: {[key in Route]: string} = {
  '/': 'About',
  '/wx-server': 'Weather (Server)',
  '/wx-client': 'Weather (Client)',
}

const HeaderDescription = () => {
  const pathname = usePathname()

  return <h2>{description[pathname as Route]}</h2>
}

export default HeaderDescription
