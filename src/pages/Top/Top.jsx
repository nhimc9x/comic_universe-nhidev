import { useEffect, useState } from 'react'
import TopComicWrap from './TopComicWrap/TopComicWrap'
import { getAllTopComics, getTopComics } from '../../apiServices'
import { useDispatch, useSelector } from 'react-redux'
import { topSlice } from './topSlice'
import SkeletonTopComic from './SkeletonTopComics/SkeletonTopComics'
import renderCategoryTopComics from './renderCategoryTopComics/renderCategoryTopComics '
import { BsChevronCompactDown } from 'react-icons/bs'
import clsx from 'clsx'

function Top() {
  const dispatch = useDispatch()
  const rankingsDataDefault = useSelector(state => state.top.dataTopAll)

  const [quantity, setQuantity] = useState(10)
  const [loading, setLoading] = useState()
  const [type, setType] = useState('all')

  useEffect(() => {
    (async () => {
      setQuantity(10)
      setLoading(true)
      const result = type === 'all' ? await getAllTopComics() : await getTopComics(type, 1, 'all')
      dispatch(topSlice.actions.saveDataTopAll(result.comics))
      setLoading(false)
    })()

  }, [dispatch, type])

  return (
    <div className="px-4">
      <div className='border-x-2 border-b-2 border-[#e5e7eb] dark:border-[#262626]'>
        {renderCategoryTopComics(type, setType)}
        <div className="px-4 py-8 grid grid-cols-1 lg:grid-cols-2">
          {
            loading ?
              <SkeletonTopComic count={quantity} /> :
              rankingsDataDefault?.slice(0, quantity)?.map((comic, index) =>
                <TopComicWrap
                  key={comic?.id}
                  rank={index}
                  title={comic?.title}
                  thumbnail={comic?.thumbnail}
                  chapter={comic?.last_chapter?.name}
                  totalViews={comic.total_views}
                  followers={comic.followers}
                  genres={comic.genres.slice(0, 3)}
                />)
          }
        </div>
        <div
          onClick={() => setQuantity()}
          className={clsx(
            'text-5xl mx-auto w-max cursor-pointer mt-2 mb-6 text-cmu-primary-500 flex items-center flex-col',
            quantity ?? 'hidden')}>
          <BsChevronCompactDown className='animate-bounce' />
        </div>
      </div>
    </div>
  )
}

export default Top