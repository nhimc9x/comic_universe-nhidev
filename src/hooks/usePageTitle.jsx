import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function usePageTitle(title) {
  const location = useLocation()
  useEffect(() => {
    document.title = title || 'Đang tải...'
  }, [location, title])
}
