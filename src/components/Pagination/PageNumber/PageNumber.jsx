import clsx from 'clsx'
import { useCallback } from 'react'

function PageNumber({ num, pageCurrent, handleChangePage }) {
  const handleChangePageCB = useCallback(() => {
    handleChangePage(num)
  }, [handleChangePage, num])
  return (
    <div
      onClick={handleChangePageCB}
      className={clsx(
        'cursor-pointer size-9 text-base grid place-content-center rounded-full',
        pageCurrent === num && 'bg-cmu-primary-500 text-white animate-slide-bottom')}>
      {num}
    </div>
  )
}

export default PageNumber
