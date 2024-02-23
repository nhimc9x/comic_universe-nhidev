
function SubHead({ title, startIcon }) {
  return (
    <div className="flex items-center text-2xl font-semibold text-cmu-primary-400">
      <div className="text-lg mr-2" >
        {startIcon}
      </div>
      <div className="text-xl font-bold uppercase">{title}</div>
      <div className="ml-auto border-[1.5px] border-cmu-primary-400 text-base px-3.5 py-0.5 rounded-full hover:bg-cmu-primary-400 duration-300 hover:text-white hover:ring-2 hover:ring-offset-2 hover:ring-offset-white dark:hover:ring-offset-[#18181b] hover:ring-cmu-primary-200">More</div>
    </div>
  )
}

export default SubHead