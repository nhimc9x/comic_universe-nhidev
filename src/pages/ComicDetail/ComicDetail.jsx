import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useParams } from 'react-router-dom'
import { getComicsDetail } from '../../apiServices'
import Book3D from './Book3D/Book3D'
import { MdPerson2 } from 'react-icons/md'
import { FaChartSimple } from 'react-icons/fa6'
import { MdRateReview } from 'react-icons/md'
import { IoHeartCircle } from 'react-icons/io5'
import { IoEye } from 'react-icons/io5'
import { ImBook } from 'react-icons/im'
import Loading from '../../components/Loading/Loading'
import ListChapter from './ListChapter/ListChapter'
import { comicDetailSlice } from './comicDetailSlice'
import usePageTitle from '~/hooks/usePageTitle'

function ComicDetail() {
  const dispatch = useDispatch()
  const dataComicDetail = useSelector(state => state.comicDetail.dataComicDetail)

  const { comicId } = useParams()
  const [detailData, setDetailData] = useState()
  const [loading, setLoading] = useState()

  useEffect(() => {
    if (comicId !== dataComicDetail?.id) {
      (async () => {
        setDetailData()
        setLoading(true)
        const result = await getComicsDetail(comicId)
        dispatch(comicDetailSlice.actions.saveComicDetail(result))
        setDetailData(result)
        setLoading(false)
      })()
    }
    else {
      setDetailData(dataComicDetail)
    }
  }, [comicId, dispatch])

  usePageTitle(detailData?.title)

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
          <div className="bg-black/50 backdrop-blur-2xl mdl:px-20 md:px-10 px-6 pt-14 pb-8">
            <div className="flex gap-10 flex-col md:flex-row">
              <div className="flex flex-col gap-10 items-center">
                <Book3D thumbnail={detailData?.thumbnail} />

                <NavLink
                  to={`/comics/${comicId}/chapters/${detailData?.chapters[detailData?.chapters.length - 1].id}`}
                  className="flex gap-2 bg-cmu-primary-500/60 group text-cmu-secondary-100 ring-offset-1 ring-offset-transparent ring-1
                 ring-cmu-primary-500 hover:bg-cmu-secondary-100 hover:text-cmu-primary-500 duration-200 w-max px-4 py-2 font-semibold rounded"
                >
                  <div className="flex items-center group-hover:-rotate-45 duration-200">
                    <ImBook />
                  </div>
                  <div className="">Đọc từ đầu</div>
                </NavLink>

              </div>
              <div className="flex-1 text-gray-100">
                <div className="text-3xl font-bold mb-2 text-shadow">
                  {detailData?.title}
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
                <div className="my-4 flex gap-2 flex-wrap text-cmu-primary-400">
                  {detailData?.genres.map(genre => (
                    <div key={genre?.id} className="border border-cmu-primary-400 backdrop-brightness-0 px-3 py-1 text-sm rounded">{genre?.name}</div>
                  ))}
                </div>
                <div className="text-lg text-justify">
                  {detailData?.description}
                </div>
              </div>
            </div>
            <ListChapter comicId={comicId} listChapter={detailData?.chapters} />
          </div>
        }

      </div>
    </div>
  )
}

export default ComicDetail

