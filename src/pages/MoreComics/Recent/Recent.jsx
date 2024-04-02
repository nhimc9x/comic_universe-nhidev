import { useEffect, useState } from 'react'
import CardComicPro from '~/components/CardComicPro/CardComicPro'
import { getRecentUpdateComics } from '../../../apiServices'
import TitleFrame from '../../../components/TitleFrame/TitleFrame'
import SkeletonCardComicPro from '../../../components/CardComicPro/SkeletonCardComicPro/SkeletonCardComicPro'
import Pagination from '../../../components/Pagination/Pagination'
import scrollToTop from '../../../utils/scrollToTop'
import { useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { moreComicsSlice } from '../moreComicsSlice'
import routes from '../../../config/routes'

function Recent() {
  const location = useLocation()
  const navigate = useNavigate()
  const urlParams = new URLSearchParams(location.search)

  const pageCurrent = urlParams.get('page')

  const dispatch = useDispatch()

  const dataMoreComics = useSelector(state => state.moreComics.dataCurrent)
  const pathNameCurrent = useSelector(state => state.moreComics.pathNameCurrent)

  const [loading, setLoading] = useState(false)
  const [totalPage, setTotalPage] = useState()

  useEffect(() => {
    if (dataMoreComics?.current_page != pageCurrent || pathNameCurrent !== routes.recent) {
      (async () => {
        setLoading(true)
        const result = await getRecentUpdateComics(pageCurrent)
        dispatch(moreComicsSlice.actions.saveDataCurrent(result))
        dispatch(moreComicsSlice.actions.changePathNameCurrent(location.pathname))
        setLoading(false)
      })()
    }
    if (dataMoreComics.total_pages !== totalPage) {
      setTotalPage(dataMoreComics.total_pages)
    }
  }, [dataMoreComics, dispatch, location.pathname, pageCurrent, pathNameCurrent, totalPage])

  const handlePrevPage = () => {
    if (pageCurrent == 1) return 0
    scrollToTop()
    navigate(`${location.pathname}?page=${+pageCurrent - 1}`)
  }

  const handleNextPage = () => {
    if (pageCurrent == totalPage) return 0
    scrollToTop()
    navigate(`${location.pathname}?page=${+pageCurrent + 1}`)
  }

  const handleChangePage = (num) => {
    scrollToTop()
    navigate(`${location.pathname}?page=${num}`)
  }


  return (
    <div className="">
      <TitleFrame title={'Mới cập nhật'} />
      <div className="grid w-max max-w-full mx-auto grid-cols-1 sms:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 min-[1224px]:grid-cols-5 gap-4">
        {loading ? <SkeletonCardComicPro count={20} /> :
          dataMoreComics?.comics?.map(comic =>
            <CardComicPro
              key={comic?.id}
              comicId={comic?.id}
              thumbnail={comic?.thumbnail}
              isTrending={comic?.is_trending}
              title={comic?.title}
              updateAt={comic?.updated_at}
              totalViews={comic?.total_views}
              followers={comic?.followers} />
          )
        }
      </div>
      <Pagination totalPage={totalPage} pageCurrent={+pageCurrent} handleChangePage={handleChangePage} handleNextPage={handleNextPage} handlePrevPage={handlePrevPage} />
    </div>
  )
}

export default Recent