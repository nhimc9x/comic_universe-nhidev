import { HiOutlineSelector } from 'react-icons/hi'
import clsx from 'clsx'
import { useRef, useState, useEffect } from 'react'
import SelectItem from './SelectItem/SelectItem'
import { useSelector } from 'react-redux'

function SelectMenu() {
  const dataSingleChapter = useSelector(state => state.singleChapter.dataSingleChapter)

  const [isHide, setIsHide] = useState(true)
  const [currentValue, setCurrentValue] = useState(dataSingleChapter?.chapter_name)
  const selectMenuRef = useRef(null)

  useEffect(() => {
    setCurrentValue(dataSingleChapter?.chapter_name)
  }, [dataSingleChapter])

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
      <div className="text-xl">{currentValue}</div>
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
            chapterId={chapter?.id}
            value={chapter?.name}
          />
        )}
      </div>

    </div>
  )
}

export default SelectMenu
