import { useEffect, useState } from 'react'
import SubHead from '~/components/SubHead/SubHead'
import { MdOutlineUpdate } from 'react-icons/md'
import { getRecentUpdateComics } from '~/apiServices'
import CardComic from '~/components/CardComic/CardComic'
import { useDispatch, useSelector } from 'react-redux'
import { homeSlice } from '../homeSlice'
import routes from '~/config/routes'

function RecentUpdateComics() {
  const dispatch = useDispatch()
  const dataRecentUpdateCommicsSelector = useSelector(state => state.home.recentUpdateCommics)

  const [recentUpdateComics, setRecentUpdateComics] = useState(Array.from({ length: 12 }))
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const fetchApi = async () => {
      const result = await getRecentUpdateComics(1)
      dispatch(homeSlice.actions.saveRecentUpdateComics(result.comics))
      setLoading(false)
    }
    if (!dataRecentUpdateCommicsSelector) {
      fetchApi()
    } else {
      setLoading(false)
      setRecentUpdateComics(dataRecentUpdateCommicsSelector)
    }
  }, [dataRecentUpdateCommicsSelector, dispatch])


  return (
    <div className="mb-10">
      <SubHead startIcon={<MdOutlineUpdate />} to={routes.recent} title="Mới cập nhật" />
      <div className="grid grid-cols-1 xss:grid-cols-2 sms:grid-cols-3 mdl:grid-cols-4 lg:grid-cols-5 min-[1200px]:grid-cols-6 gap-4">
        {recentUpdateComics?.slice(0, 12).map((data, index) =>
          <CardComic loading={loading} key={index} comicId={data?.id} thumbnail={data?.thumbnail} altImg={data?.id} lastChapter={data?.last_chapter?.name} title={data?.title} />
        )}
      </div>
    </div>
  )
}

export default RecentUpdateComics