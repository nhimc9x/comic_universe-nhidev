import { IoEye } from 'react-icons/io5'
import { IoHeartCircle } from 'react-icons/io5'
import { IoChatbubbleEllipsesSharp } from 'react-icons/io5'
import { BiLoaderCircle } from 'react-icons/bi'
import isTrendingLogo from '~/assets/hot_gif.gif'
import placeholderImg from '~/assets/img_placeholder.jpg'
import { NavLink } from 'react-router-dom'

function CardComicPro({ comicId, thumbnail, isTrending, title, author, totalViews, followers, totalCmt }) {
  // if (loading) return (
  //   <div className="h-[280px] rounded-md">
  //     <SkeletonCustom />
  //   </div>
  // )
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
          {author === 'Updating' || !author ?
            <div className="flex justify-end items-center gap-2 my-2 text-cmu-primary-500">
              <BiLoaderCircle className='' />
              <div className="text-gray-200 line-clamp-1">Updating</div>
            </div> :
            <div className="text-gray-200 text-end my-2 line-clamp-1">{author}</div>
          }
          <div className="flex items-center justify-center gap-2 text-cmu-primary-500">
            <div className="flex items-center bg-white/15 px-1 rounded gap-1">
              <IoEye />
              <div className="">{totalViews}</div>
            </div>
            <div className="flex items-center bg-white/15 px-1 rounded gap-1">
              <IoHeartCircle />
              <div className="">{followers}</div>
            </div>
            <div className="flex items-center bg-white/15 px-1 rounded gap-1">
              <IoChatbubbleEllipsesSharp />
              <div className="">{totalCmt}</div>
            </div>
          </div>
        </div>
      </div>
    </NavLink>
  )
}

export default CardComicPro