import { IoHome } from 'react-icons/io5'
import { FaChevronRight } from 'react-icons/fa'
import { FaChevronLeft } from 'react-icons/fa'
import SelectMenu from './SelectMenu/SelectMenu'
import { NavLink } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import findChapterBothSides from '~/utils/findChapterBothSides'
import clsx from 'clsx'
import NavigationBtn from './NavigationBtn/NavigationBtn'

function HeaderBar({ loading, dataSingleChapter }) {

  const { comicId, chapterId } = useParams()

  const { previousChapter, nextChapter } = findChapterBothSides(dataSingleChapter?.chapters, chapterId)

  return (
    <div className={clsx('bg-white fixed top-0 right-0 left-0 h-[70px] shadow border-b duration-300 border-gray-300', loading && '-translate-y-[101%]')}>
      <div className="max-w-[1440px] w-full h-full px-10 mx-auto flex items-center justify-center text-2xl">
        <NavLink to={'/'} className="text-4xl text-cmu-primary-500 mr-4">
          <IoHome />
        </NavLink>
        <NavigationBtn
          disable={!previousChapter}
          to={`/comics/${comicId}/chapters/${previousChapter}`}
          btnIcon={<FaChevronLeft />}
        />

        <SelectMenu dataSingleChapter={dataSingleChapter} />

        <NavigationBtn
          disable={!nextChapter}
          to={`/comics/${comicId}/chapters/${nextChapter}`}
          btnIcon={<FaChevronRight />}
        />
      </div>
    </div>
  )
}

export default HeaderBar
