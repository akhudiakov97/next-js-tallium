'use client'

import {ClientWeatherContextProps, ReactChildren} from '@/lib/types'
import {createContext, useContext, useEffect, useState} from 'react'

// Create the context.
const WeatherContext = createContext({} as ClientWeatherContextProps)

// Create a custom hook to use the context.
export function useWeatherContext() {
  return useContext(WeatherContext)
}

/**
 * The WeatherProvider component.
 */
export default function WeatherProvider({children}: ReactChildren) {
  const [location, setLocation] = useState('Enterprise, AL')
  const [unit, setUnit] = useState('imperial')
  const [weather, setWeather] = useState({})

  // PLEASE USE YOUR OWN API KEYS !!!
  useEffect(() => {
    const fetchWeather = async () => {
      const location = encodeURI('Your Location') // replace 'Your Location' with your actual location
      let lat = 28.3886186
      let lng = -81.5659069

      try {
        const geocodeResponse = await fetch(
          `https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=${process.env.GOOGLE_MAPS_API_KEY}`
        )
        const geocodeData = await geocodeResponse.json()

        if (geocodeData.status === 'OK' && geocodeData.results.length > 0) {
          lat = geocodeData.results[0].geometry.location.lat
          lng = geocodeData.results[0].geometry.location.lng
        }
      } catch (error) {
        console.error(error)
      }

      try {
        const weatherResponse = await fetch(
          `https://api.weatherapi.com/v1/forecast.json?key=${process.env.WEATHERAPI_KEY}&q=${lat},${lng}`
        )
        const weatherData = await weatherResponse.json()

        if (weatherData.location) {
          setWeather(weatherData)
        }
      } catch (error) {
        console.error(error)
      }
    }

    fetchWeather()
  }, [])

  return (
    <WeatherContext.Provider
      value={{
        location,
        setLocation,
        unit,
        setUnit,
        weather,
        setWeather
      }}
    >
      {children}
    </WeatherContext.Provider>
  )
}
