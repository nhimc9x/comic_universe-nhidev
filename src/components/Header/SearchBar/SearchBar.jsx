import clsx from 'clsx'
import { useEffect, useRef, useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import { findComics } from '~/apiServices'
import SearchResultItem from './SearchResultItem/SearchResultItem'
import loadingSearch from '~/assets/search_loading.gif'
import { LuSearchX } from 'react-icons/lu'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { searchResultSlice } from '~/pages/SearchResult/searchResultSlice'

function SearchBar() {
  const inputRef = useRef(null)
  const boxSearchRef = useRef(null)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [showSearchBar, setShowSearchBar] = useState(false)
  const [showResultBox, setShowResultBox] = useState(false)
  const [dataResult, setDataResult] = useState(null)
  const [loading, setLoading] = useState()
  const [searchValue, setSearchValue] = useState('')

  const handleDocumentClick = (event) => {
    if (boxSearchRef.current && !boxSearchRef.current.contains(event.target)) {
      setShowSearchBar(false)
    }
  }
  useEffect(() => {
    document.addEventListener('click', handleDocumentClick)
    return () => {
      document.removeEventListener('click', handleDocumentClick)
    }
  }, [])

  useEffect(() => {
    if (showSearchBar) {
      inputRef.current.focus()
    } else {
      setSearchValue('')
      setDataResult(null)
    }
  }, [showSearchBar])

  useEffect(() => {
    if (searchValue.trim() === '') {
      setShowResultBox(false)
    } else {
      (async () => {
        setShowResultBox(true)
        setLoading(true)
        const result = await findComics(searchValue, 1)
        setDataResult(result)
        setLoading(false)
      })()
    }
  }, [searchValue])

  const toggleSearchBar = () => {
    setShowSearchBar(!showSearchBar)
  }

  const handleCLickLink = (comicId) => {
    navigate(`/comics/${comicId}`)
    setShowSearchBar(false)
  }

  const handleLinkToSearchPage = () => {
    dispatch(searchResultSlice.actions.saveDataSearchResult(dataResult))
    navigate(`/search?q=${searchValue}`)
    setShowSearchBar(false)
  }

  return (
    <div ref={boxSearchRef}>
      <FiSearch className='cursor-pointer' onClick={toggleSearchBar} />
      <div
        className={clsx(
          'fixed top-[70px] z-10 shadow-bottom right-0 left-0 bg-cmu-primary-500 h-14 place-content-center animate-slide-bottom',
          showSearchBar ? 'grid' : 'hidden'
        )}>
        <div className="max-w-[600px] w-[90vw] bg-white h-10 flex items-center">
          <input
            ref={inputRef}
            value={searchValue}
            onChange={e => setSearchValue(e.target.value)}
            placeholder='Tìm kiếm...'
            type="text"
            className="w-[90%] placeholder:text-base outline-none border-none text-xl px-2"
          />
          <div
            onClick={handleLinkToSearchPage}
            className="flex-1 hover:bg-cmu-secondary-300 hover:text-white flex justify-center
            items-center text-2xl text-cmu-primary-500/60 cursor-pointer h-full"
          >
            <FiSearch />
          </div>
        </div>

        <div
          className={clsx(
            'absolute top-full max-w-[800px] w-full left-1/2 -translate-x-1/2 bg-gray-200 dark:bg-[#2f2f2f] shadow-md',
            !showResultBox && 'hidden'
          )}>
          <div className="h-[340px] px-4 py-2 overflow-y-auto divide-y-2 divide-gray-300 dark:divide-[#262626]">
            {loading ?
              <div className='w-full h-full grid place-content-center'>
                <img className='w-[100px]' src={loadingSearch} alt="" />
              </div> :
              dataResult?.comics?.length ?
                <div className="">
                  {dataResult?.comics?.slice(0, 6)?.map((data, index) =>
                    <SearchResultItem
                      key={index}
                      handleCLickLink={handleCLickLink}
                      comicId={data?.id}
                      title={data?.title}
                      thumbnail={data?.thumbnail}
                      last_chapter={data?.last_chapter.name}
                      status={data?.status}
                      updated_at={data?.updated_at}
                    />
                  )}
                  <div
                    onClick={handleLinkToSearchPage}
                    className={clsx(
                      'text-base mt-3 cursor-pointer hover:ring-1 ring-cmu-primary-500 ring-offset-1 duration-300 uppercase font-bold text-center w-2/3 mx-auto py-1.5 rounded bg-gradient-to-r from-cmu-primary-500 to-cmu-secondary-400 text-white',
                      dataResult?.comics?.length > 6 ? 'block' : 'hidden'
                    )}
                  >
                    Xem tất cả
                  </div>
                </div> :
                <div className='w-full h-full grid place-content-center'>
                  <div className="text-5xl flex justify-center mb-3">
                    <LuSearchX />
                  </div>
                  <div className="text-xl">Không tìm thấy kết quả.</div>
                </div>
            }
          </div>
        </div>

      </div>
    </div>
  )
}

export default SearchBar
