import { NavLink } from 'react-router-dom'
import SkeletonCustom from '../SkeletonCustom/SkeletonCustom'
import placeholderImg from '~/assets/img_placeholder.jpg'

function CardComic({ comicId, loading, thumbnail, altImg, lastChapter, title }) {
  if (loading) return (
    <div className="h-[280px] w-[260px] mx-auto xss:mx-0 xss:w-auto rounded-md">
      <SkeletonCustom />
    </div>
  )
  return (
    <NavLink to={`/comics/${comicId}`}>
      <div className="h-[280px] max-w-[260px] mx-auto overflow-hidden relative rounded group">
        <div className='w-full h-full group-hover:scale-105 duration-300 transition-transform origin-bottom'>
          <img
            className='w-full h-full object-cover'
            src={thumbnail}
            alt={altImg}
            onError={(e) => {
              if (e.target.src !== placeholderImg) {
                e.target.onerror = null
                e.target.src = placeholderImg
              }
            }}
          />
        </div>
        <div className='absolute top-0 left-0 bg-[#3f3f3f] text-white text-sm py-1 px-2'>{lastChapter}</div>
        <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-b from-gray-600/60 min-h-16 to-black text-lg px-4 py-1 font-bold text-white line-clamp-2'>
          {title}
        </div>
      </div>
    </NavLink>
  )
}

export default CardComic
