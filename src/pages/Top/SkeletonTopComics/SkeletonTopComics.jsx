import SkeletonTopComicItem from '../TopComicWrap/SkeletonTopComicItem/SkeletonTopComicItem'

function SkeletonTopComic({ count }) {
  const arr = Array.from({ length: count || 10 })
  return (
    <>
      {arr.map((data, index) =>
        <SkeletonTopComicItem key={index} rank={index} />
      )}
    </>
  )
}

export default SkeletonTopComic
