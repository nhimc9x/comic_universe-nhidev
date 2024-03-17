import { useSelector } from 'react-redux'

function LoadingBar() {
  const isLoading = useSelector(state => state.loadingBar.isLoading)
  return (
    <div style={{ display: !isLoading && 'none' }} className="fixed z-50 h-[5px] bg-[#e5e7eb] dark:bg-[#2f2f2f] top-0 right-0 left-0">
      <div className="bg-cmu-primary-400 dark:bg-cmu-primary-600 h-full w-[35%] absolute animate-loading rounded-md"></div>
    </div>
  )
}

export default LoadingBar