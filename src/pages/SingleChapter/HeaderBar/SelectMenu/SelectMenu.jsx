import { HiOutlineSelector } from 'react-icons/hi'
import clsx from 'clsx'
import { useRef, useState, useEffect } from 'react'
import SelectItem from './SelectItem/SelectItem'

function SelectMenu({ dataSingleChapter }) {

  const [isHide, setIsHide] = useState(true)

  const selectMenuRef = useRef(null)

  const handleToggle = () => {
    setIsHide(!isHide)
  }

  const handleDocumentClick = (event) => {
    if (selectMenuRef.current && !selectMenuRef.current.contains(event.target)) {
      setIsHide(true)
    }
  }
  useEffect(() => {
    document.addEventListener('click', handleDocumentClick)
    return () => {
      document.removeEventListener('click', handleDocumentClick)
    }
  }, [])

  return (
    <div
      ref={selectMenuRef}
      onClick={handleToggle}
      className={clsx(
        'relative bg-white border flex-1 max-w-[500px] h-11 rounded-md mx-2 flex items-center justify-between px-2',
        isHide ? 'border-gray-300' : 'border-cmu-primary-600')}>
      <div className="text-xl line-clamp-1">{dataSingleChapter?.chapter_name}</div>
      <div className="">
        <HiOutlineSelector />
      </div>

      <div
        className={clsx(
          'absolute top-[calc(100%+6px)] text-gray-700 left-0 right-0 bg-white rounded-md max-h-[240px] overflow-y-auto border border-gray-300 shadow text-xl p-1',
          isHide && 'hidden'
        )}>
        {dataSingleChapter?.chapters?.map(chapter =>
          <SelectItem
            key={chapter?.id}
            currentChapter={dataSingleChapter?.chapter_name}
            chapterId={chapter?.id}
            value={chapter?.name}
          />
        )}
      </div>

    </div>
  )
}

export default SelectMenu