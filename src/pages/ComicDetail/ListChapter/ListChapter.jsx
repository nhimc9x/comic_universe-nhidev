import { MdMenuBook } from 'react-icons/md'

function ListChapter({ listChapter }) {
  return (
    <div className="bg-gray-300/80 mx-10 text-black mt-8 pb-4 rounded drop-shadow-lg" >
      <div className="flex items-center py-4 ml-4 text-xl uppercase gap-2">
        <div className="-translate-y-0.5 text-2xl">
          <MdMenuBook />
        </div>
        <div className="font-bold">Danh sách chương</div>
      </div>
      <div className="h-[500px] overflow-y-auto rounded px-8 mx-4 py-1 bg-gray-200 dark:text-gray-300 dark:bg-[#3f3f3f] divide-y divide-gray-300 dark:divide-[#2f2f2f]">
        {listChapter?.map(chapter =>
          <div key={chapter?.id} className="text-lg py-2 pl-2 hover:bg-cmu-primary-200 dark:hover:bg-cmu-primary-900">{chapter?.name}</div>
        )}
      </div>
    </div>
  )
}

export default ListChapter
