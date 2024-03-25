import { useEffect, useState } from 'react'
import CardComicPro from '~/components/CardComicPro/CardComicPro'
import { getTrendingComics } from '../../../apiServices'
import TitleFrame from '../../../components/TitleFrame/TitleFrame'
import SkeletonCardComicPro from '../../../components/CardComicPro/SkeletonCardComicPro/SkeletonCardComicPro'
import Pagination from '../../../components/Pagination/Pagination'
import scrollToTop from '../../../utils/scrollToTop'
import { useLocation, useNavigate } from 'react-router-dom'

function Trending() {
  const location = useLocation()
  const navigate = useNavigate()
  const urlParams = new URLSearchParams(location.search)
  const page = urlParams.get('page')

  const [comics, setComics] = useState([])
  const [loading, setLoading] = useState(false)
  const [totalPage, setTotalPage] = useState()
  const [pageCurrent, setPageCurrent] = useState(+page || 1)

  useEffect(() => {
    navigate(`/trending?page=${pageCurrent}`)
  }, [navigate, pageCurrent])

  useEffect(() => {
    (async () => {
      setLoading(true)
      const result = await getTrendingComics(pageCurrent)
      setComics(result.comics)
      setTotalPage(result.total_pages)
      setLoading(false)
    })()
  }, [pageCurrent])

  const handlePrevPage = () => {
    if (pageCurrent === 1) return 0
    scrollToTop()
    setPageCurrent(pageCurrent - 1)
  }

  const handleNextPage = () => {
    if (pageCurrent === totalPage) return 0
    scrollToTop()
    setPageCurrent(pageCurrent + 1)
  }

  const handleChangePage = (num) => {
    scrollToTop()
    setPageCurrent(num)
  }

  return (
    <div className="">
      <TitleFrame title={'Xu hướng'} />
      <div className="grid w-max max-w-full mx-auto grid-cols-1 sms:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 min-[1224px]:grid-cols-5 gap-4">
        {loading ? <SkeletonCardComicPro count={20} /> :
          comics?.map(comic =>
            <CardComicPro
              key={comic?.id}
              comicId={comic?.id}
              thumbnail={comic?.thumbnail}
              isTrending={comic?.is_trending}
              title={comic?.title}
              author={comic?.authors}
              totalViews={comic?.total_views}
              totalCmt={comic?.total_comments}
              followers={comic?.followers} />
          )
        }
      </div>
      <Pagination totalPage={totalPage} pageCurrent={pageCurrent} handleChangePage={handleChangePage} handleNextPage={handleNextPage} handlePrevPage={handlePrevPage} />
    </div>
  )
}

export default Trending