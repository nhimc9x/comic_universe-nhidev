import clsx from 'clsx'

function CategoryTopComics({ id, type, setType, title }) {
  return (
    <div
      onClick={() => setType(id)}
      className={clsx('text-2xl text-center font-semibold cursor-pointer text-black dark:text-gray-200 py-3 border-t-4',
        id === type ? 'border-cmu-primary-500' : 'border-transparent bg-cmu-secondary-100 dark:bg-[#3f3f3f]')}
    >
      {title}
    </div>
  )
}

export default CategoryTopComics
