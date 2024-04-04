import cmuComics from '../../assets/cmu_logo.png'
import NavBar from './NavBar/NavBar'
import DarkModeBtn from './DarkModeBtn/DarkModeBtn'
import { LuHistory } from 'react-icons/lu'
import SearchBar from './SearchBar/SearchBar'

function Header() {
  return (
    <div className="border-b border-[#e5e7eb] dark:border-[#262626] fixed top-0 left-0 right-0 z-40 bg-white dark:bg-black">
      <div className="w-full h-[70px] max-w-[1600px] mx-auto px-6 flex items-center">
        <a href='/' className="flex items-center">
          <img className="size-14 relative bottom-[1px]" src={cmuComics} alt="" />
          <div className="text-[32px] leading-[32px] font-bold text-cmu-primary-500 font-cmu-Nunito">UComics</div>
        </a>
        <div className="flex justify-between items-center flex-1 ml-12">

          <NavBar />

          <div className="flex items-center text-3xl text-cmu-primary-500 gap-4">
            <LuHistory />
            <DarkModeBtn />
            <SearchBar />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Header