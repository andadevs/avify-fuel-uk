import { useEffect, useState } from 'react'
import { getCurrentGenerations } from '../../services/generation'
import { IGeneration } from '../type/generation'
import { IError } from '../type/http'

export const useListCurrentGenerations = () => {
  const [data, setData] = useState<IGeneration>()
  const [error, setError] = useState<IError>()
  const [isLoading, setIsLoading] = useState(false)

  const getData = async () => {
    setIsLoading(true);

    try {
      const response = await getCurrentGenerations();
      if (response.error) setError(response.error)
      if (response.data) setData(response.data)
    } catch (error) {
      console.error("ERROR", error)
    }

    setIsLoading(false)

  }

  useEffect(() => {
    getData();
  }, [])

  return { data, isLoading, error }
}