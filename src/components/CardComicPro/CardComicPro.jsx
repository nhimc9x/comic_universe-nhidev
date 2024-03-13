import { IoEye } from 'react-icons/io5'
import { IoHeartCircle } from 'react-icons/io5'
import { IoChatbubbleEllipsesSharp } from 'react-icons/io5'
import { BiLoaderCircle } from 'react-icons/bi'

const thumbnail = 'https://st.nettruyenbb.com/data/comics/32/vo-luyen-dinh-phong-9068.jpg'
const lastChapter = 'Chapter 3695'
const title = 'Võ luyện đỉnh phong ddddddđ'
const author = 'ssssssssss'

function CardComicPro() {
  // if (loading) return (
  //   <div className="h-[280px] rounded-md">
  //     <SkeletonCustom />
  //   </div>
  // )
  return (
    <div className="h-[360px] overflow-hidden relative rounded group cursor-pointer">
      <div className='w-full h-full scale-100 group-hover:scale-105 duration-300 transition-transform origin-bottom'>
        <img
          className='w-full h-full object-cover'
          src={thumbnail}
          alt={'null'}
        />
      </div>
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-t from-black via-black/60 via-60% to-transparent flex flex-col p-3 justify-end">
        <div className="font-bold text-white line-clamp-2 text-2xl">{title}</div>
        <div className="bg-gray-700/80 h-[1px] mt-2"></div>
        {author === 'updating' || !author ?
          <div className="flex justify-end items-center gap-2 my-2 text-cmu-primary-500">
            <BiLoaderCircle />
            <div className="text-gray-200 line-clamp-1">Updating</div>
          </div> :
          <div className="text-gray-200 text-end my-2 line-clamp-1">{author}</div>
        }
        <div className="flex items-center justify-center gap-2 text-cmu-primary-500">
          <div className="flex items-center bg-white/15 px-1 rounded gap-1">
            <IoEye />
            <div className="">1.060M</div>
          </div>
          <div className="flex items-center bg-white/15 px-1 rounded gap-1">
            <IoHeartCircle />
            <div className="">504K</div>
          </div>
          <div className="flex items-center bg-white/15 px-1 rounded gap-1">
            <IoChatbubbleEllipsesSharp />
            <div className="">463K</div>
          </div>
        </div>
      </div>
      {/* <div className='absolute top-0 left-0 bg-[#3f3f3f] text-white text-sm py-1 px-2'>{lastChapter}</div>
      <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-b from-gray-600/60 min-h-16 to-black text-lg px-4 py-1 font-bold text-white line-clamp-2'>
        {title}
      </div> */}
    </div>
  )
}

export default CardComicPro