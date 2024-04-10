import placeholderImg from '~/assets/img_placeholder.jpg'

function SearchResultItem({ handleCLickLink, comicId, thumbnail, title, last_chapter, status, updated_at }) {
  return (
    <div
      onClick={() => handleCLickLink(comicId)}
      className="flex cursor-pointer gap-4 p-2 items-center hover:bg-gray-100 hover:drop-shadow-md dark:hover:bg-[#202020] duration-200 transition-colors">
      <img
        className='h-36 min-w-28 max-w-28 object-cover'
        src={thumbnail} alt=""
        onError={(e) => {
          if (e.target.src !== placeholderImg) {
            e.target.onerror = null
            e.target.src = placeholderImg
          }
        }}
      />
      <div className="space-y-1.5" >
        <div className="text-xl font-bold line-clamp-1">{title}</div>
        <div className="text-base line-clamp-1 bg-cmu-primary-500 rounded w-max text-white px-2 py-0.5">{last_chapter}</div>
        <div className="text-base line-clamp-1 text-black dark:text-gray-300 font-semibold">Trạng thái: {status}</div>
        <div className="text-base line-clamp-1 text-black dark:text-gray-300 font-semibold">Cập nhật: {updated_at}</div>
      </div>
    </div>
  )
}

export default SearchResultItem