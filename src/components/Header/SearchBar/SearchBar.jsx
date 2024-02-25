import clsx from 'clsx'
import { useState } from 'react'
import { FiSearch } from 'react-icons/fi'

function SearchBar() {
  const [showSearchBar, setShowSearchBar] = useState(false)
  const toggleSearchBar = () => {
    setShowSearchBar(!showSearchBar)
  }
  return (
    <div>
      <FiSearch className='cursor-pointer' onClick={toggleSearchBar} />
      <div className={clsx('fixed top-[70px] shadow-bottom right-0 left-0 bg-cmu-primary-500 h-14 place-content-center animate-slide-bottom', showSearchBar ? 'grid' : 'hidden')}>
        <div className="w-[600px] bg-white h-10 flex items-center px-2">
          <input placeholder='Tìm kiếm...' type="text" className="w-[90%] placeholder:text-base outline-none border-none text-xl"/>
          <div className="flex-1 flex justify-center items-center text-2xl text-cmu-primary-500/60 cursor-pointer h-full">
            <FiSearch />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchBar