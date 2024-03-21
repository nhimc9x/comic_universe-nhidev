import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import numberColor from '../../../../utils/numberColor'
import formatNumber from '../../../../utils/formatNumber'

function SkeletonTopComicItem({ rank }) {
  const theme = localStorage.theme

  return (
    <div className='flex items-center xs:gap-6 gap-2 my-2 p-4 rounded-lg'>
      <div className="font-semibold px-2 md:px-4 text-3xl text-gray-600"
        style={{ color: numberColor(rank) }}
      >{formatNumber(rank + 1)}
      </div>
      <div className="h-[180px] min-w-[140px] max-w-[140px]">
        <Skeleton baseColor={theme === 'dark' ? '#202020' : ''} highlightColor={theme === 'dark' ? '#333' : ''} height={'100%'} />
      </div>
      <div className="py-2 gap-3 h-full flex-1 justify-center flex flex-col">
        <div className="">
          <Skeleton baseColor={theme === 'dark' ? '#202020' : ''} highlightColor={theme === 'dark' ? '#333' : ''} height={'100%'} />
        </div>
        <div className="">
          <Skeleton baseColor={theme === 'dark' ? '#202020' : ''} highlightColor={theme === 'dark' ? '#333' : ''} height={'100%'} />
        </div>
        <div className="">
          <Skeleton baseColor={theme === 'dark' ? '#202020' : ''} highlightColor={theme === 'dark' ? '#333' : ''} height={'100%'} />
        </div>
        <div className="w-[100px]">
          <Skeleton baseColor={theme === 'dark' ? '#202020' : ''} highlightColor={theme === 'dark' ? '#333' : ''} height={'100%'} />
        </div>
      </div>
    </div>
  )
}

export default SkeletonTopComicItem