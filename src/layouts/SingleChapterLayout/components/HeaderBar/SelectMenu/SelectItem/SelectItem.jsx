import clsx from 'clsx'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'


function SelectItem({ chapterId, value }) {
  const dataSingleChapter = useSelector(state => state.singleChapter.dataSingleChapter)

  const navigate = useNavigate()
  // const changeChapter = () => {
  //   navigate(``/comics/${comicId}/chapters/${chapterId}``)
  // }

  return (
    <div
      className={clsx(
        'px-2 py-1 block rounded-[3px]',
        dataSingleChapter?.chapter_name === value ? 'bg-cmu-primary-100' : 'hover:bg-gray-200'
      )}>{value}</div>
  )
}

export default SelectItem