import clsx from 'clsx'
import { NavLink, useParams } from 'react-router-dom'

function SelectItem({ chapterId, value, currentChapter }) {

  const { comicId } = useParams()

  return (
    <NavLink
      to={`/comics/${comicId}/chapters/${chapterId}`}
      className={clsx(
        'px-2 py-1 block rounded-[3px]',
        currentChapter === value ? 'bg-cmu-primary-100' : 'hover:bg-gray-200'
      )}>{value}</NavLink>
  )
}

export default SelectItem