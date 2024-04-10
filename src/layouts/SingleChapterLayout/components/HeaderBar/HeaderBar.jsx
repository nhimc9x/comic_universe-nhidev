import { IoHome } from 'react-icons/io5'
import { FaChevronRight } from 'react-icons/fa'
import { FaChevronLeft } from 'react-icons/fa'
import SelectMenu from './SelectMenu/SelectMenu'

function HeaderBar() {
  return (
    <div className="bg-white fixed top-0 h-[70px] right-0 left-0">
      <div className="max-w-[1440px] w-full h-full px-10 mx-auto flex items-center justify-center text-2xl">
        <div className="text-4xl text-cmu-primary-500 mr-4">
          <IoHome />
        </div>

        <div className="text-cmu-secondary-100 bg-cmu-primary-500 size-10 rounded-md grid place-content-center">
          <FaChevronLeft />
        </div>

        <SelectMenu />

        <div className="text-cmu-secondary-100 bg-cmu-primary-500 size-10 rounded-md grid place-content-center">
          <FaChevronRight />
        </div>
      </div>
    </div>
  )
}

export default HeaderBar
