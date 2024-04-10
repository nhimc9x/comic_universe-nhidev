import { VscColorMode } from 'react-icons/vsc'
import useDarkSide from '../../../hooks/useDarkSide'
import { useState } from 'react'
import clsx from 'clsx'

function DarkModeBtn() {
  const [colorTheme, setTheme] = useDarkSide()
  const [darkSide, setDarkSide] = useState(
    colorTheme === 'light' ? true : false
  )

  const toggleDarkMode = () => {
    setTheme(colorTheme)
    setDarkSide(!darkSide)
  }
  return (
    <div className='flex items-center justify-center group' onClick={toggleDarkMode}>
      <div className="text-xl cursor-pointer py-2 font-semibold md:hidden block mr-4 group-hover:mr-10 duration-300">Chế độ ban đêm</div>
      <VscColorMode className={clsx('transition-all duration-300 cursor-pointer', darkSide && 'rotate-180')} />
    </div>
  )
}

export default DarkModeBtn