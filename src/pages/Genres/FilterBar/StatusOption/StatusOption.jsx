import clsx from 'clsx'

function StatusOption({ title, statusComic, setStatusComic, option }) {
  return (
    <div onClick={() => setStatusComic(option)} className={clsx('relative group border cursor-pointer px-4 py-2 rounded-md border-cmu-primary-500 overflow-hidden', statusComic === option && ' text-white bg-cmu-primary-500')}>
      <div className="group-hover:text-white relative z-20 duration-300">{title}</div>
      <div className="absolute z-10 top-0 translate-y-1/2 right-1/2 translate-x-1/2">
        <div className="size-5 bg-cmu-primary-500 scale-0 group-hover:scale-[8] duration-[350ms] rounded-full"></div>
      </div>
    </div>
  )
}

export default StatusOption