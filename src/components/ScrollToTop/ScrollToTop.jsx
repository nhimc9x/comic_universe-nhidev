import { IoMdRocket } from 'react-icons/io'
import scrollToTop from '../../utils/scrollToTop'
import { useState, useEffect } from 'react'
import clsx from 'clsx'

function ScrollToTop() {
  const [isHidden, setIsHidden] = useState(true)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleScroll = () => {
    if (window.scrollY > 800) {
      setIsHidden(false)
    } else {
      setIsHidden(true)
    }
  }
  return (
    <div className='fixed bottom-14 right-10 z-50'>
      <div
        onClick={scrollToTop}
        className={clsx(
          'text-3xl cursor-pointer size-12 grid place-content-center rounded-full bg-gray-200 group dark:bg-[#2f2f2f] drop-shadow-md border border-cmu-secondary-200 text-cmu-primary-500',
          isHidden && 'hidden'
        )}
      >
        <IoMdRocket className='group-active:-translate-y-4 duration-300' />
      </div>
    </div>
  )
}

export default ScrollToTop