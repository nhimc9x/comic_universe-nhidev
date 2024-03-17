import SkeletonTopComicItem from './SkeletonTopComicItem/SkeletonTopComicItem'

function SkeletonTopComic({ count }) {
  const listSkeleton = Array.from({ length: count || 10 })
  return (
    <>
      {listSkeleton.map((data, index) =>
        <SkeletonTopComicItem key={index} rank={index} />
      )}
    </>
  )
}

export default SkeletonTopComic
