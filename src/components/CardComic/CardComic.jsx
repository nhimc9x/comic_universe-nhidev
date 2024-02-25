import SkeletonCustom from '../SkeletonCustom/SkeletonCustom'

function CardComic({ loading, thumbnail, altImg, lastChapter, title }) {
  if (loading) return (
    <div className="h-[280px] overflow-hidden relative rounded-md group">
      <SkeletonCustom />
    </div>
  )
  return (
    <div className="h-[280px] overflow-hidden relative rounded-md group">
      <div className='w-full h-full group-hover:scale-105 duration-300 origin-bottom'>
        <img
          className='w-full h-full object-cover'
          src={thumbnail}
          alt={altImg}
        />
      </div>
      <div className='absolute top-0 left-0 bg-[#3f3f3f] text-white text-sm py-1 px-2'>{lastChapter}</div>
      <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-b from-gray-600/60 min-h-16 to-black text-lg px-4 py-1 font-bold text-white line-clamp-2 duration-200'>
        {title}
      </div>
    </div>
  )
}

export default CardComic