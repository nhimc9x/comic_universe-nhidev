import { NavLink } from 'react-router-dom'
function SubHead({ to, title, startIcon }) {
  return (
    <NavLink to={to} className="flex items-center text-cmu-primary-500 mb-4">
      <div className="text-lg mr-2 relative bottom-[1px]" >
        {startIcon}
      </div>
      <div className="text-xl font-bold uppercase">{title}</div>
      <div
        className="ml-auto border-[1.5px] border-cmu-primary-500 text-base px-3.5 py-0.5 rounded-full hover:bg-cmu-primary-500 duration-300 hover:text-white
      hover:ring-2 hover:ring-offset-2 hover:ring-offset-white dark:hover:ring-offset-[#18181b] hover:ring-cmu-primary-400">
        More
      </div>
    </NavLink>
  )
}

export default SubHead
