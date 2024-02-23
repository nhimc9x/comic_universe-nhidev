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
    <div onClick={toggleDarkMode}>
      <VscColorMode className={clsx('transition-all duration-300 cursor-pointer', darkSide && 'rotate-180')} />
    </div>
  )
}

export default DarkModeBtn