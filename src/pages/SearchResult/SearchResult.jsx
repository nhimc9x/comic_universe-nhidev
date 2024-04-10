import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import SkeletonCardComicPro from '~/components/CardComicPro/SkeletonCardComicPro/SkeletonCardComicPro'
import CardComicPro from '~/components/CardComicPro/CardComicPro'
import { findComics } from '~/apiServices'
import { searchResultSlice } from './searchResultSlice'
import { LuSearchX } from 'react-icons/lu'
import scrollToTop from '~/utils/scrollToTop'
import Pagination from '~/components/Pagination/Pagination'

function SearchResult() {
  const location = useLocation()
  const urlParams = new URLSearchParams(location.search)
  const searchValue = urlParams.get('q')

  const dispatch = useDispatch()
  const dataSearchResult = useSelector(state => state.searchResult.dataSearchResult)

  const [loading, setLoading] = useState(false)
  const [pageCurrent, setPageCurrent] = useState(1)

  useEffect(() => {
    setPageCurrent(1)
  }, [searchValue])

  useEffect(() => {
    if (dataSearchResult?.current_page !== pageCurrent) {
      (async () => {
        setLoading(true)
        const result = await findComics(searchValue, pageCurrent)
        dispatch(searchResultSlice.actions.saveDataSearchResult(result))
        setLoading(false)
      })()
    }
  }, [dataSearchResult, dispatch, pageCurrent, searchValue])


  const handlePrevPage = () => {
    if (pageCurrent == 1) return 0
    scrollToTop()
    setPageCurrent(pageCurrent - 1)
  }

  const handleNextPage = () => {
    if (pageCurrent == (dataSearchResult?.total_pages || 5)) return 0
    scrollToTop()
    setPageCurrent(pageCurrent + 1)
  }

  const handleChangePage = (num) => {
    scrollToTop()
    setPageCurrent(num)
  }


  return (
    <div className="">
      <div className='dark:text-white text-black text-2xl my-4 py-2 px-4 rounded bg-sky-400 dark:bg-sky-900'>
        Kết quả tìm kiếm từ: {searchValue}
      </div>

      <div className="grid w-max max-w-full mx-auto grid-cols-1 sms:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 min-[1224px]:grid-cols-5 gap-4">
        {loading ? <SkeletonCardComicPro count={20} /> :
          dataSearchResult?.comics?.length ?
            <>
              {dataSearchResult?.comics?.map(comic =>
                <CardComicPro
                  key={comic?.id}
                  comicId={comic?.id}
                  thumbnail={comic?.thumbnail}
                  isTrending={comic?.is_trending}
                  title={comic?.title}
                  updateAt={comic?.updated_at}
                  totalViews={comic?.total_views}
                  followers={comic?.followers} />
              )}
            </> :
            <div className='col-span-full min-h-[300px] grid place-content-center'>
              <div className="text-5xl flex justify-center mb-3">
                <LuSearchX />
              </div>
              <div className="text-xl">Không tìm thấy kết quả.</div>
            </div>
        }
      </div>

      <Pagination
        totalPage={dataSearchResult?.total_pages || 5}
        pageCurrent={+pageCurrent}
        handleChangePage={handleChangePage}
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
      />

    </div>
  )
}

export default SearchResult
