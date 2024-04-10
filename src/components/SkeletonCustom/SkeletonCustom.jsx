import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function SkeletonCustom() {

  const theme = localStorage.theme

  return (
    <div className='h-full'>
      <Skeleton baseColor={theme === 'dark' ? '#202020' : ''} highlightColor={theme === 'dark' ? '#333' : ''} height={'100%'} />
    </div>
  )
}

export default SkeletonCustom
