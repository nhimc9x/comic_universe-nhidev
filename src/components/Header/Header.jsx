import cmuComics from '../../assets/cmu_logo.png'
import NavBar from './NavBar/NavBar'
import DarkModeBtn from './DarkModeBtn/DarkModeBtn'
import { LuHistory } from 'react-icons/lu'
import SearchBar from './SearchBar/SearchBar'
import { HiMenu } from 'react-icons/hi'
import { useEffect, useRef, useState } from 'react'
import clsx from 'clsx'
import { useLocation } from 'react-router-dom'

function Header() {
  const location = useLocation()

  const navbarRightRef = useRef(null)
  const [showNavBarRight, setShowNavBarRight] = useState(false)

  const handleDocumentClick = (e) => {
    if (navbarRightRef.current && !navbarRightRef.current.contains(e.target)) {
      setShowNavBarRight(false)
    }
  }
  useEffect(() => {
    document.addEventListener('click', handleDocumentClick)
    return () => {
      document.removeEventListener('click', handleDocumentClick)
    }
  }, [])

  useEffect(() => {
    setShowNavBarRight(false)
  }, [location])

  return (
    <div className="border-b border-[#e5e7eb] dark:border-[#262626] fixed top-0 left-0 right-0 z-50 bg-white dark:bg-black">
      <div className="w-full h-[70px] max-w-[1600px] mx-auto px-6 flex items-center">
        <a href='/' className="flex items-center">
          <img className="size-14 relative bottom-[1px]" src={cmuComics} alt="" />
          <div className="text-[32px] leading-[32px] font-bold text-cmu-primary-500 font-cmu-Nunito">UComics</div>
        </a>

        <div className="hidden md:flex justify-between items-center flex-1 ml-12">
          <NavBar />
          <div className="flex items-center text-3xl text-cmu-primary-500 gap-4">
            <LuHistory />
            <DarkModeBtn />
            <SearchBar />
          </div>
        </div>

        <div className="md:hidden flex ml-auto gap-4 items-center text-3xl text-cmu-primary-500">
          <SearchBar />
          <div ref={navbarRightRef}>
            <div
              onClick={() => setShowNavBarRight(!showNavBarRight)}
              className="p-2">
              <div className="flex flex-col gap-1.5">
                <span className={clsx(
                  'w-8 h-1 rounded-sm bg-cmu-primary-500 duration-200',
                  showNavBarRight && 'rotate-45 translate-y-[calc(100%+0.8px)]'
                )}></span>
                <span className={clsx(
                  'w-8 h-1 rounded-sm bg-cmu-primary-500',
                  showNavBarRight && 'hidden'
                )}></span>
                <span className={clsx(
                  'w-8 h-1 rounded-sm bg-cmu-primary-500 duration-200',
                  showNavBarRight && '-rotate-45 -translate-y-[calc(100%+0.8px)]'
                )}></span>
              </div>
            </div>
            <div className={clsx(
              'bg-gray-200 dark:bg-[#2f2f2f] border-l-2 border-cmu-primary-500 w-[340px] fixed right-0 bottom-0 top-[70px] flex flex-col duration-300',
              showNavBarRight ? 'translate-x-0' : 'translate-x-full'
            )}>
              <div className="mb-4">
                <NavBar />
              </div>
              <DarkModeBtn />
              <div className="mt-2 cursor-pointer flex flex-col items-center justify-center group">
                <div className="text-xl font-semibold md:hidden block py-2">Lịch sử đọc</div>
                <LuHistory className='group-hover:-rotate-[360deg] text-3xl duration-500 ease-in-out' />
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Header