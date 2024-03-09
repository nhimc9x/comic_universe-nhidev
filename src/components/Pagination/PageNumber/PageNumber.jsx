import clsx from 'clsx'

function PageNumber({ num, currentPage, setCurrentPage }) {

  return (
    <div
      onClick={() => { setCurrentPage(num) }}
      className={clsx(
        'cursor-pointer size-9 text-base grid place-content-center rounded-full',
        currentPage === num && 'bg-cmu-primary-500 text-white animate-slide-bottom')}>
      {num}
    </div>
  )
}

export default PageNumber