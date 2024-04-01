import { HiOutlineSelector } from 'react-icons/hi'
import clsx from 'clsx'
import { useRef, useState, useEffect } from 'react'
import SelectItem from './SelectItem/SelectItem'
import { useDispatch, useSelector } from 'react-redux'

let mockdata = [
  { id: 1, name: 'Chapter 1' },
  { id: 2, name: 'Chapter 2' },
  { id: 3, name: 'Chapter 3' },
  { id: 4, name: 'Chapter 4' },
  { id: 5, name: 'Chapter 5' },
  { id: 6, name: 'Chapter 6' },
  { id: 7, name: 'Chapter 7' },
  { id: 8, name: 'Chapter 8' },
  { id: 9, name: 'Chapter 9' },
  { id: 10, name: 'Chapter 10' }
]

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

  console.log('1', currentValue)

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