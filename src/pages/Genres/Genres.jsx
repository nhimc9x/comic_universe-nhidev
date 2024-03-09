import { useEffect, useState } from 'react'
import FilterBar from './FilterBar/FilterBar'
import { getComicsByGenre } from '../../apiServices'
import CardComic from '~/components/CardComic/CardComic'
import StatusOption from './FilterBar/StatusOption/StatusOption'
import Pagination from '../../components/Pagination/Pagination'
import { getGenres } from '../../apiServices'


function Genres() {
  const [comicsByGenres, setComicsByGenres] = useState(Array.from({ length: 24 }))
  const [genreCurrent, setGenreCurrent] = useState()
  const [statusComic, setStatusComic] = useState('all')
  const [loading, setLoading] = useState(true)

  // const [totalPage, setTotalPage] = useState(1)
  const [currentPage, setCurrentPage] = useState(1)


  const [genres, setGenres] = useState()
  useEffect(() => {
    const fetchApi = async () => {
      const result = await getGenres()
      setGenres(result)
      setGenreCurrent(result[0])
    }
    fetchApi()
  }, [])


  useEffect(() => {
    const fetchApi = async () => {
      const result = await getComicsByGenre(genreCurrent?.id, 1, statusComic)
      // setTotalPage(result.total_pages)
      console.log(result)
      setComicsByGenres(result.comics)
      setLoading(false)
    }
    fetchApi()
    return () => {
      setComicsByGenres(Array.from({ length: 6 }))
      setLoading(true)
    }
  }, [genreCurrent, statusComic])


  return (
    <div className='mb-10 min-h-screen'>
      <FilterBar genres={genres} genreCurrent={genreCurrent} setGenreCurrent={setGenreCurrent} />
      <div className="flex items-center gap-4 justify-center font-medium text-cmu-primary-500">

        <StatusOption option={'all'} statusComic={statusComic} setStatusComic={setStatusComic} title={'Tất cả'} />
        <StatusOption option={'completed'} statusComic={statusComic} setStatusComic={setStatusComic} title={'Hoàn thành'} />
        <StatusOption option={'ongoing'} statusComic={statusComic} setStatusComic={setStatusComic} title={'Đang tiến hành'} />

        {/* <button className="relative px-8 py-2 rounded-md bg-white isolation-auto z-10 border-2 border-lime-500
        before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-lime-500 before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700">Hover Me</button>
         */}
        {/* <div className="">Hoàn thành</div>
        <div className="">Đang tiến hành</div> */}

      </div>
      <div className="mt-8 grid grid-cols-1 xss:grid-cols-2 sms:grid-cols-3 mdl:grid-cols-4 lg:grid-cols-5 min-[1200px]:grid-cols-6 gap-4">
        {comicsByGenres?.map((data, index) =>
          <CardComic loading={loading} key={index} thumbnail={data?.thumbnail} altImg={data?.id} lastChapter={data?.last_chapter?.name} title={data?.title} />
        )}
      </div>

      {!loading && <Pagination totalPage={10} currentPage={currentPage} setCurrentPage={setCurrentPage} />}

    </div>
  )
}

export default Genres