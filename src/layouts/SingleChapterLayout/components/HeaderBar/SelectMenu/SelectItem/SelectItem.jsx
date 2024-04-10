import clsx from 'clsx'
import { useSelector } from 'react-redux'

function SelectItem({ value }) {
  const dataSingleChapter = useSelector(state => state.singleChapter.dataSingleChapter)

  return (
    <div
      className={clsx(
        'px-2 py-1 block rounded-[3px]',
        dataSingleChapter?.chapter_name === value ? 'bg-cmu-primary-100' : 'hover:bg-gray-200'
      )}>{value}</div>
  )
}

export default SelectItem
