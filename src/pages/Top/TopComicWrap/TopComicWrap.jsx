import { IoEye } from 'react-icons/io5'
import { IoHeartCircle } from 'react-icons/io5'
import numberColor from '../../../utils/numberColor'
import formatNumber from '../../../utils/formatNumber'
import { NavLink } from 'react-router-dom'

function TopComicWrap({ comicId, rank, thumbnail, title, chapter, totalViews, followers, genres }) {
  return (
    <NavLink to={`/comics/${comicId}`}>
      <div
        className="flex items-center xs:gap-6 gap-2 my-2 p-4 dark:text-white
    hover:bg-gray-100 hover:drop-shadow-md dark:hover:bg-[#202020] duration-150 transition-colors cursor-pointer rounded-lg"
      >
        <div className="font-semibold px-2 md:px-4 text-3xl text-gray-600"
          style={{ color: numberColor(rank) }}
        >{formatNumber(rank + 1)}
        </div>
        <div className="h-[180px] min-w-[140px]">
          <img className='h-full w-full object-cover rounded-md'
            src={thumbnail}
            alt=""
          />
        </div>
        <div className="py-2 h-full justify-center flex flex-col">
          <div className="text-2xl font-semibold line-clamp-1 min-h-8 mb-4">
            {title}
          </div>
          <div className="">{chapter}</div>
          <div className="flex items-center text-base font-semibold gap-2 my-2 text-cmu-primary-500">
            <div className="flex items-center gap-1">
              <IoEye />
              <div className="">{totalViews}</div>
            </div>
            <div className="flex items-center gap-1">
              <IoHeartCircle />
              <div className="">{followers}</div>
            </div>
          </div>
          <div className="flex gap-2 font-bold text-xs text-cmu-primary-500 uppercase flex-wrap row-span-2">
            {genres?.map(genre =>
              <div key={genre.id} className="px-2 py-1 rounded-md ring-1 ring-cmu-primary-500">{genre.name}</div>
            )}
          </div>
        </div>
      </div>
    </NavLink>
  )
}

export default TopComicWrap