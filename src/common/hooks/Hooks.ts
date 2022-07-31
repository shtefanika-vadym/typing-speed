import { useEffect } from 'react'

export const useTabTitle = (tabTitle: string) => {
  useEffect(() => {
    document.title = tabTitle
  }, [])
}
