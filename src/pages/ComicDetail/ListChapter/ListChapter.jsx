import cornerTop from '~/assets/corner/corner_top.png'
import cornerBot from '~/assets/corner/corner_bot.png'
import { NavLink } from 'react-router-dom'

function ListChapter({ comicId, listChapter }) {
  return (
    <div className="relative mt-20 mx-10 p-[3%]">
      <img className='absolute w-[14%] -z-10 -top-1 -left-1 select-none corner-drop-shadow' src={cornerTop} alt="" />
      <img className="absolute w-[14%] -z-10 -top-1 -right-1 rotate-90 select-none corner-drop-shadow" src={cornerTop} alt="" />
      <img className="absolute w-[14%] -z-10 bottom-0 left-0 select-none corner-drop-shadow" src={cornerBot} alt="" />
      <img className="absolute w-[14%] -z-10 bottom-0 right-0 -rotate-90 select-none corner-drop-shadow" src={cornerBot} alt="" />
      <div className="bg-black/20">
        <div className="text-center uppercase text-2xl py-2 font-semibold text-[#FFD700] text-shadow">
          Danh sách chương
        </div>
        <div className="overflow-y-auto h-[520px] mx-8 border-2 text-gray-200 border-gray-200 rounded-md p-2 text-xl divide-y divide-gray-400">
          {listChapter?.map(chapter =>
            <NavLink
              to={`/comics/${comicId}/chapters/${chapter?.id}`}
              key={chapter?.id}
              className="py-2 pl-4 block hover:bg-white dark:hover:bg-[#2f2f2f] hover:text-cmu-primary-500">
              {chapter?.name}
            </NavLink>
          )}
        </div>
        <marquee className="text-lg pt-1 text-white" >Chúc các bạn đọc truyện vui vẻ - UCOMICS - Nhideveloper.</marquee>
      </div>
    </div>
  )
}

export default ListChapter
