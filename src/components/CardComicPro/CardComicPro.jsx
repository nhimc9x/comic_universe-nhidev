import { IoEye } from 'react-icons/io5'
import { IoHeartCircle } from 'react-icons/io5'
import { BiLoaderCircle } from 'react-icons/bi'
import isTrendingLogo from '~/assets/hot_gif.gif'
import placeholderImg from '~/assets/img_placeholder.jpg'
import { NavLink } from 'react-router-dom'

function CardComicPro({ comicId, thumbnail, isTrending, title, updateAt, totalViews, followers }) {

  return (
    <NavLink to={`/comics/${comicId}`}>
      <div className="h-[380px] max-w-[260px] overflow-hidden relative rounded group cursor-pointer">
        <div className='w-full h-full scale-100 group-hover:scale-105 duration-300 transition-transform origin-bottom'>
          <img
            className='w-full h-full object-cover'
            src={thumbnail}
            alt={title}
            onError={(e) => {
              if (e.target.src !== placeholderImg) {
                e.target.onerror = null
                e.target.src = placeholderImg
              }
            }}
          />
        </div>
        {isTrending &&
          <div className="absolute z-10 top-0 left-0">
            <img src={isTrendingLogo} alt="" className='size-12' />
          </div>
        }
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-t from-black via-black/60 via-60% to-transparent flex flex-col p-3 justify-end">
          <div className="font-bold text-white line-clamp-2 text-2xl">{title}</div>
          <div className="bg-gray-700/80 h-[1px] mt-2"></div>
          <div className="flex justify-end items-center gap-1 my-2 text-cmu-primary-500">
            <BiLoaderCircle className='' />
            <div className="text-gray-200 line-clamp-1">{updateAt}</div>
          </div>
          <div className="flex items-center justify-center gap-2 text-cmu-primary-500">
            <div className="flex items-center bg-white/15 px-1 rounded gap-1">
              <IoEye />
              <div className="">{totalViews}</div>
            </div>
            <div className="flex items-center bg-white/15 px-1 rounded gap-1">
              <IoHeartCircle />
              <div className="">{followers}</div>
            </div>
          </div>
        </div>
      </div>
    </NavLink>
  )
}

export default CardComicPro
