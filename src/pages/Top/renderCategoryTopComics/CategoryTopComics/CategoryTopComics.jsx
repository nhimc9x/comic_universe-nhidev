import { useDispatch, useSelector } from 'react-redux'
import clsx from 'clsx'
import { topSlice } from '../../topSlice'

function CategoryTopComics({ id, title }) {
  const dispatch = useDispatch()
  const type = useSelector(state => state.top.type)

  const handleChangeType = () => {
    dispatch(topSlice.actions.changeType(id))
  }

  return (
    <div
      onClick={handleChangeType}
      className={clsx('text-xl xs:text-2xl text-center font-semibold cursor-pointer text-black dark:text-gray-200 py-3 border-t-4',
        id === type ? 'border-cmu-primary-500' : 'border-transparent bg-cmu-secondary-100 dark:bg-[#3f3f3f]')}
    >
      {title}
    </div>
  )
}

export default CategoryTopComics
