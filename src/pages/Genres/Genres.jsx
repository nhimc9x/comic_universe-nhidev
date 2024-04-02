import { useEffect } from 'react'
import FilterBar from './FilterBar/FilterBar'
import CardComic from '~/components/CardComic/CardComic'
import StatusOption from './FilterBar/StatusOption/StatusOption'
import Pagination from '../../components/Pagination/Pagination'
import { getGenres } from '../../apiServices'
import { useDispatch, useSelector } from 'react-redux'
import { fetchApiGetComics, genresFiltersSlice } from './FilterBar/genresFiltersSlice'
import scrollToTop from '../../utils/scrollToTop'
import usePageTitle from '~/hooks/usePageTitle'

function Genres() {
  const dispatch = useDispatch()
  const dataGenres = useSelector(state => state.genresFilters.dataGenres)
  const isChanged = useSelector(state => state.genresFilters.isChanged)
  const genreCurrent = useSelector(state => state.genresFilters.genreCurrent)
  const pageCurrent = useSelector(state => state.genresFilters.pageCurrent)
  const statusCurrent = useSelector(state => state.genresFilters.statusCurrent)
  const dataComics = useSelector(state => state.genresFilters.dataComics)
  const totalPage = useSelector(state => state.genresFilters.totalPage)
  const loading = useSelector(state => state.genresFilters.loading)

  useEffect(() => {
    const fetchApiGetGenres = async () => {
      const result = await getGenres()
      dispatch(genresFiltersSlice.actions.saveGenres(result))
    }
    if (!dataGenres.length) fetchApiGetGenres()
  }, [dataGenres, dispatch])

  useEffect(() => {
    if (!isChanged) {
      dispatch(fetchApiGetComics({ genre: genreCurrent?.id, page: pageCurrent, status: statusCurrent }))
    }
    // setComicsByGenres(dataComics)
  }, [dispatch, isChanged])

  usePageTitle('Thể loại | UComics')

  const handlePrevPage = () => {
    if (pageCurrent === 1) return 0
    dispatch(genresFiltersSlice.actions.changePageCurrent(pageCurrent - 1))
    scrollToTop()
  }

  const handleNextPage = () => {
    if (pageCurrent === totalPage) return 0
    dispatch(genresFiltersSlice.actions.changePageCurrent(pageCurrent + 1))
    scrollToTop()
  }

  const handleChangePage = (num) => {
    dispatch(genresFiltersSlice.actions.changePageCurrent(num))
    scrollToTop()
  }

  // console.log(dataComics)
  // console.log(loading)

  return (
    <div className='mb-10 min-h-[80vh]'>
      <FilterBar />
      <div className="flex items-center gap-4 justify-center font-medium text-cmu-primary-500">
        <StatusOption option={'all'} statusComic={statusCurrent} title={'Tất cả'} />
        <StatusOption option={'completed'} statusComic={statusCurrent} title={'Hoàn thành'} />
        <StatusOption option={'ongoing'} statusComic={statusCurrent} title={'Đang tiến hành'} />
      </div>

      {!dataComics ?
        <div className="h-80 text-xl text-gray-600 dark:text-gray-400 grid place-content-center">Hiện tại chưa tìm thấy truyện tranh nào</div> :
        <>
          <div className="mt-8 grid grid-cols-1 xss:grid-cols-2 sms:grid-cols-3 mdl:grid-cols-4 lg:grid-cols-5 min-[1200px]:grid-cols-6 gap-4">
            {dataComics?.map((data, index) =>
              <CardComic loading={loading} key={index} comicId={data?.id} thumbnail={data?.thumbnail} altImg={data?.id} lastChapter={data?.last_chapter?.name} title={data?.title} />
            )}
          </div>
          <Pagination totalPage={totalPage} pageCurrent={pageCurrent} handleChangePage={handleChangePage} handlePrevPage={handlePrevPage} handleNextPage={handleNextPage} />
        </>
      }
    </div>
  )
}

export default Genres
