import { FaStar } from 'react-icons/fa6'
import formatGenres from '~/utils/formatGenres'

function TextBox({ genres, title, chapter, description }) {
  return (
    <div data-swiper-parallax="-400" className="flex-1 overflow-hidden bg-black/30 backdrop-blur-sm p-8 rounded-lg select-none">
      <div data-swiper-parallax="-300" className="text-lg mb-2 line-clamp-2">Thể loại: {genres && formatGenres(genres)}</div>
      <div data-swiper-parallax="-200" className="text-4xl font-bold text-shadow mb-2">{title}</div>
      <div data-swiper-parallax="-100" className="flex gap-2 mb-2">
        <div className="bg-cmu-primary-500 px-3 py-1 text-sm rounded">{chapter}</div>
        <div className="flex items-center gap-1 text-sm text-yellow-300 px-2 bg-cmu-secondary-500 rounded">
          <FaStar className='text-xs -translate-y-[1px]' />
        </div>
      </div>
      <div className="line-clamp-[9]">
        {description}
      </div>
    </div>
  )
}

export default TextBox