import clsx from 'clsx'
import { useDispatch } from 'react-redux'
import { genresFiltersSlice } from '../../../pages/Genres/FilterBar/genresFiltersSlice'


function PageNumber({ num, currentPage }) {
  const dispatch = useDispatch()
  const handleChangePage = () => {
    dispatch(genresFiltersSlice.actions.changePageCurrent(num))
  }

  return (
    <div
      onClick={handleChangePage}
      className={clsx(
        'cursor-pointer size-9 text-base grid place-content-center rounded-full',
        currentPage === num && 'bg-cmu-primary-500 text-white animate-slide-bottom')}>
      {num}
    </div>
  )
}

export default PageNumber