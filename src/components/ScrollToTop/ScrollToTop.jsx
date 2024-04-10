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
    <div className='fixed bottom-10 sms:bottom-14 right-4 sms:right-10 z-40'>
      <div
        onClick={scrollToTop}
        className={clsx(
          'text-3xl cursor-pointer size-12 p-1 rounded-full group drop-shadow-xl bg-gradient-to-r from-[#9f9f9f] to-[#ef5b44]',
          isHidden && 'hidden'
        )}
      >
        <div className="w-full h-full grid place-content-center rounded-full text-white bg-gradient-to-r from-[#ef5b44] to-[#9f9f9f]">
          <IoMdRocket className='group-active:-translate-y-4 duration-300' />
        </div>
      </div>
    </div>
  )
}

export default ScrollToTop