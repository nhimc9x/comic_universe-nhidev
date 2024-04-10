import SkeletonCustom from '../../SkeletonCustom/SkeletonCustom'

function SkeletonCardComicPro({ count }) {
  const listSkeleton = Array.from({ length: count || 10 })
  return (
    <>
      {listSkeleton.map((data, index) =>
        <div key={index} className="h-[380px] w-[240px]">
          <SkeletonCustom />
        </div>
      )}
    </>
  )
}

export default SkeletonCardComicPro
