import { useEffect, useState } from 'react'
import SubHead from '~/components/SubHead/SubHead'
import { MdRecommend } from 'react-icons/md'
import { getRecommendComics } from '~/apiServices'
import CardComic from '~/components/CardComic/CardComic'
import { useDispatch, useSelector } from 'react-redux'
import { homeSlice } from '../homeSlice'

function RecommenComics() {
  const dispatch = useDispatch()
  const dataRecommendCommicsSelector = useSelector(state => state.home.recommendCommics)

  const [recommendComics, setRecommendComics] = useState(Array.from({ length: 12 }))
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const fetchApi = async () => {
      const result = await getRecommendComics()
      dispatch(homeSlice.actions.saveRecommendComics(result))
      setLoading(false)
    }
    if (!dataRecommendCommicsSelector) {
      fetchApi()
    } else {
      setLoading(false)
      setRecommendComics(dataRecommendCommicsSelector)
    }
  }, [dataRecommendCommicsSelector, dispatch])
  return (
    <div className="mb-10">
      <SubHead startIcon={<MdRecommend />} title="Truyện đề cử" />
      <div className="grid grid-cols-1 xss:grid-cols-2 sms:grid-cols-3 mdl:grid-cols-4 lg:grid-cols-5 min-[1200px]:grid-cols-6 gap-4">
        {recommendComics?.slice(0, 12).map((data, index) =>
          <CardComic loading={loading} key={index} thumbnail={data?.thumbnail} altImg={data?.id} lastChapter={data?.lastest_chapter?.name} title={data?.title} />
        )}
      </div>
    </div>
  )
}

export default RecommenComics