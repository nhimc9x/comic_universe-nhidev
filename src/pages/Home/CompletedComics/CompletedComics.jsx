import { useEffect, useState } from 'react'
import SubHead from '~/components/SubHead/SubHead'
import { HiBadgeCheck } from 'react-icons/hi'
import { getCompletedComics } from '~/apiServices'
import CardComic from '~/components/CardComic/CardComic'

function CompletedComics() {
  const [completedComics, setCompletedComics] = useState(Array.from({ length: 12 }))
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const fetchApi = async () => {
      const result = await getCompletedComics()
      setCompletedComics(result.comics)
      setLoading(false)
    }
    fetchApi()
  }, [])
  return (
    <div className="mb-10">
      <SubHead startIcon={<HiBadgeCheck />} title="Đã hoàn thành" />
      <div className="grid grid-cols-1 xss:grid-cols-2 sms:grid-cols-3 mdl:grid-cols-4 lg:grid-cols-5 min-[1200px]:grid-cols-6 gap-4">
        {completedComics?.slice(0, 12).map((data, index) =>
          <CardComic loading={loading} key={index} thumbnail={data?.thumbnail} altImg={data?.id} lastChapter={data?.last_chapter?.name} title={data?.title} />
        )}
      </div>
    </div>
  )
}

export default CompletedComics