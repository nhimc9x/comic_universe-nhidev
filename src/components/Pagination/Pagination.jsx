import { genresFiltersSlice } from '../../pages/Genres/FilterBar/genresFiltersSlice'
import PageNumber from './PageNumber/PageNumber'
import { useDispatch } from 'react-redux'

const Pagination = ({ totalPage, currentPage }) => {
  const dispatch = useDispatch()

  const pageNumbers = []

  const maxVisiblePages = 5

  if (totalPage >= maxVisiblePages) {
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2))
    let endPage = Math.min(totalPage, startPage + maxVisiblePages - 1)
    while (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, startPage - 1)
      endPage = Math.min(totalPage, endPage + 1)
    }
    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i)
    }
  } else {
    for (let i = 1; i <= totalPage; i++) {
      pageNumbers.push(i)
    }
  }

  const handlePrevPage = () => {
    if (currentPage === 1) return 0
    dispatch(genresFiltersSlice.actions.changePageCurrent(currentPage - 1))
  }
  const handleNextPage = () => {
    if (currentPage === totalPage) return 0
    dispatch(genresFiltersSlice.actions.changePageCurrent(currentPage + 1))
  }

  return (
    <div className="mx-auto">
      <div className="mt-10 dark:text-gray-300 w-[520px] mx-auto bg-cmu-secondary-100 dark:bg-cmu-secondary-900 h-14 rounded-full flex items-center justify-between px-6 text-lg font-semibold tracking-widest">
        <div className="cursor-pointer" onClick={handlePrevPage}>{'<Prev'}</div>
        <div className="flex gap-3">
          {pageNumbers?.map(number => (
            <PageNumber key={number} num={number} currentPage={currentPage} />
          ))}
        </div>
        <div className="cursor-pointer" onClick={handleNextPage}>{'Next>'}</div>
      </div>
    </div>
  )
}

export default Pagination
