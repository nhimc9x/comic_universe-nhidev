import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getSingleChapter } from '~/apiServices'
import HeaderBar from './HeaderBar/HeaderBar'
import clsx from 'clsx'
import Loading from '~/components/Loading/Loading'
import ScrollToTop from '~/components/ScrollToTop/ScrollToTop'
import usePageTitle from '~/hooks/usePageTitle'

function SingleChapter() {
  const { comicId, chapterId } = useParams()

  const [dataSingleChapter, setDataSingleChapter] = useState()

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    (async () => {
      setLoading(true)
      const result = await getSingleChapter(comicId, chapterId)
      setDataSingleChapter(result)
      setLoading(false)
    })()
  }, [chapterId, comicId])

  usePageTitle(dataSingleChapter?.comic_name)

  return (
    <div className="overflow-hidden">

      {loading &&
        <div className="bg-black/10 z-40 fixed top-0 right-0 left-0 bottom-0 grid place-content-center">
          <Loading />
        </div>
      }

      <HeaderBar loading={loading} dataSingleChapter={dataSingleChapter} />

      <div className={clsx('text-center border-b mb-1 mt-[70px] py-10 bg-white duration-300', loading && 'translate-x-[101%]')}>
        <div className="text-[32px] leading-[32px] font-bold text-cmu-primary-500 font-cmu-Nunito">UComics</div>
        <div className='mt-4 text-3xl text-[#2f2f2f] font-bold duration-300 px-8'>
          {dataSingleChapter?.comic_name}
        </div>
      </div>

      <div className={clsx('duration-300', loading && '-translate-x-[101%]')}>
        {dataSingleChapter?.images?.map(data =>
          <img
            loading='lazy'
            className='w-full object-cover block text-white text-2xl'
            key={data?.page}
            src={data?.src}
            onError={(e) => {
              if (e.target.src !== data?.backup_src) {
                e.target.onerror = null
                e.target.src = data?.backup_src
              }
            }}
            alt={`Lỗi tải ảnh ${data?.page}`} />
        )}
      </div>

      <ScrollToTop />

    </div>
  )
}

export default SingleChapter
