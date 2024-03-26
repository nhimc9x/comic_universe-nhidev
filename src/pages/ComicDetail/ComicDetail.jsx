import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getComicsDetail } from '../../apiServices'
import Book3D from './Book3D/Book3D'
import { MdPerson2 } from 'react-icons/md'
import { FaChartSimple } from 'react-icons/fa6'
import { MdRateReview } from 'react-icons/md'
import { IoHeartCircle } from 'react-icons/io5'
import { IoEye } from 'react-icons/io5'
import { FaStar } from 'react-icons/fa6'
import { ImBook } from 'react-icons/im'
import Loading from '../../components/Loading/Loading'
import ListChapter from './ListChapter/ListChapter'

function ComicDetail() {
  const { comicId } = useParams()

  const [detailData, setDetailData] = useState()
  const [loading, setLoading] = useState()

  useEffect(() => {
    (async () => {
      setLoading(true)
      const result = await getComicsDetail(comicId)
      setDetailData(result)
      setLoading(false)
    })()
  }, [comicId])

  return (
    <div className="">
      <div
        style={{
          backgroundImage: `url(${detailData?.thumbnail})`
        }}
        className='bg-no-repeat bg-cover bg-top rounded-t-2xl overflow-hidden'>

        {loading ?
          <div className="h-[80dvh] dark:bg-[#2f2f2f] bg-[#8f8f8f] grid place-content-center animate-pulse">
            <Loading />
          </div> :
          <div className="bg-black/50 backdrop-blur-2xl p-20">
            <div className="flex gap-10">
              <div className="flex flex-col gap-10 items-center">
                <Book3D thumbnail={detailData?.thumbnail} />
                <div className="flex gap-2 bg-cmu-primary-500/60 group text-cmu-secondary-100 ring-offset-1 ring-offset-transparent ring-1 ring-cmu-primary-500 hover:bg-cmu-secondary-100 hover:text-cmu-primary-500 duration-200 w-max px-4 py-2 font-semibold rounded">
                  <div className="flex items-center group-hover:-rotate-45 duration-200">
                    <ImBook />
                  </div>
                  <div className="">Đọc từ đầu</div>
                </div>
              </div>
              <div className="flex-1 text-gray-100">
                <div className="text-3xl font-bold">
                  {detailData?.title}
                </div>
                <div className="my-1 flex items-center gap-1 text-sm py-0.5 text-yellow-200 px-1 bg-cmu-secondary-500 rounded w-max">
                  <div className="">{detailData?.average}</div>
                  <FaStar className='text-xs -translate-y-[1px]' />
                </div>
                <div className="grid grid-cols-2 w-max gap-8 text-lg">
                  <div className="">
                    <div className="flex items-center gap-2">
                      <div className="">
                        <MdPerson2 />
                      </div>
                      <div className="">Tác giả</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="">
                        <FaChartSimple />
                      </div>
                      <div className="">Tình trạng</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="">
                        <MdRateReview />
                      </div>
                      <div className="">Lượt đánh giá</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="">
                        <IoHeartCircle />
                      </div>
                      <div className="">Lượt theo dõi</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="">
                        <IoEye />
                      </div>
                      <div className="">Lượt xem</div>
                    </div>
                  </div>
                  <div className="">
                    <div className="">{detailData?.authors}</div>
                    <div className="">{detailData?.status}</div>
                    <div className="">{detailData?.rating_count}</div>
                    <div className="">{detailData?.followers}</div>
                    <div className="">{detailData?.total_views}</div>
                  </div>
                </div>
                <div className="my-4 flex gap-2 text-cmu-primary-400">
                  {detailData?.genres.map(genre => (
                    <div key={genre?.id} className="border border-cmu-primary-400 backdrop-brightness-0 px-3 py-1 text-sm rounded">{genre?.name}</div>
                  ))}
                </div>
                <div className="text-lg">
                  {detailData?.description}
                </div>
              </div>
            </div>
            <ListChapter comicId={detailData?.id} listChapter={detailData?.chapters} />
          </div>
        }

      </div>
    </div>
  )
}

export default ComicDetail
