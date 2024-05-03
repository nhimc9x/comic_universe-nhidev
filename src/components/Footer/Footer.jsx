import { IoPersonOutline } from 'react-icons/io5'
import { HiOutlineMail } from 'react-icons/hi'
import { LuGithub } from 'react-icons/lu'

function Footer() {
  return (
    <div className="pt-8 pb-12 flex flex-col items-center justify-center">
      <div className="flex max-w-[1600px] w-full mx-auto px-8 justify-center items-center">
        <div className="h-[1px] w-full bg-cmu-primary-300 dark:bg-cmu-primary-950"></div>
        <div className="text-cmu-primary-400 font-bold px-4">Nhideveloper</div>
        <div className="h-[1px] w-full bg-cmu-primary-300 dark:bg-cmu-primary-950"></div>
      </div>
      <div className="flex text-3xl gap-5 mt-4 text-white dark:text-gray-400">
        <a href='https://github.com/nhimc9x' className="dark:bg-gray-800 rounded bg-slate-500 hover:-translate-y-1 duration-300 hover:text-cmu-primary-600 dark:hover:text-cmu-primary-400 size-11 grid place-content-center">
          <LuGithub />
        </a>
        <a href="mailto:nhicomputer77@gmail.com" className="dark:bg-gray-800 rounded bg-slate-500 hover:-translate-y-1 duration-300 hover:text-cmu-primary-600 dark:hover:text-cmu-primary-400 size-11 grid place-content-center">
          <HiOutlineMail />
        </a>
        <a href='https://nhideveloper.id.vn' className="dark:bg-gray-800 rounded bg-slate-500 hover:-translate-y-1 duration-300 hover:text-cmu-primary-600 dark:hover:text-cmu-primary-400 size-11 grid place-content-center">
          <IoPersonOutline />
        </a>
      </div>
    </div>
  )
}

export default Footer
