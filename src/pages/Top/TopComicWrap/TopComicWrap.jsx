import { IoEye } from 'react-icons/io5'
import { IoHeartCircle } from 'react-icons/io5'
import numberColor from '../../../utils/numberColor'
import formatNumber from '../../../utils/formatNumber'
import { NavLink } from 'react-router-dom'
import compactNumber from '../../../utils/compactNumber'

function TopComicWrap({ comicId, rank, thumbnail, title, chapter, totalViews, followers, updatedAt }) {
  return (
    <NavLink to={`/comics/${comicId}`}>
      <div
        className="flex items-center sms:gap-6 gap-2 my-2 p-2 sms:p-4 dark:text-white
    hover:bg-gray-100 hover:drop-shadow-md dark:hover:bg-[#202020] duration-150 transition-colors cursor-pointer rounded-lg"
      >
        <div className="hidden xs:block font-semibold px-0 md:px-4 text-2xl sms:text-3xl text-gray-600"
          style={{ color: numberColor(rank) }}
        >{formatNumber(rank + 1)}
        </div>
        <div className="h-[140px] min-w-[100px] xs:h-[180px] xs:min-w-[140px]">
          <img className='h-full w-full object-cover rounded-md'
            src={thumbnail}
            alt=""
          />
        </div>
        <div className="py-2 h-full justify-center flex flex-col">
          <div className="text-2xl font-semibold line-clamp-1 min-h-8 mb-2">
            {title}
          </div>
          <div className="bg-cmu-primary-500 w-max py-1 px-2 rounded text-white text-base font-semibold">{chapter}</div>
          <div className="flex items-center flex-wrap text-base font-semibold gap-2 my-2 text-cmu-primary-500">
            <div className="flex items-center gap-1">
              <IoEye />
              <div className="">{compactNumber(totalViews)}</div>
            </div>
            <div className="flex items-center gap-1">
              <IoHeartCircle />
              <div className="">{compactNumber(followers)}</div>
            </div>
          </div>
          <div className="font-semibold text-[#2f2f2f] dark:text-gray-300">{updatedAt}</div>
        </div>
      </div>
    </NavLink>
  )
}

export default TopComicWrap