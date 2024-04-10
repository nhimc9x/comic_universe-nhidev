import PageNumber from './PageNumber/PageNumber'
import useMedia from 'use-media'

const Pagination = ({ totalPage, pageCurrent, handlePrevPage, handleNextPage, handleChangePage }) => {
  const isSmallScreen = useMedia({ maxWidth: 460 })
  const pageNumbers = []
  const maxVisiblePages = isSmallScreen ? 3 : 5

  if (totalPage >= maxVisiblePages) {
    let startPage = Math.max(1, pageCurrent - Math.floor(maxVisiblePages / 2))
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

  return (
    <div className="mx-auto">
      <div className="mt-10 dark:text-gray-300 w-full sms:w-[520px] mx-auto bg-cmu-secondary-100 dark:bg-cmu-secondary-900 h-14 rounded-full flex items-center justify-between px-6 text-lg font-semibold tracking-widest">
        <div className="cursor-pointer" onClick={handlePrevPage}>{'<Prev'}</div>
        <div className="flex gap-3">
          {pageNumbers?.map(number => (
            <PageNumber key={number} num={number} handleChangePage={handleChangePage} pageCurrent={pageCurrent} />
          ))}
        </div>
        <div className="cursor-pointer" onClick={handleNextPage}>{'Next>'}</div>
      </div>
    </div>
  )
}

export default Pagination

