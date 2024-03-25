import { useState, useEffect } from 'react'
import MagicImage from './MagicImage/MagicImage'
import TextBox from './TextBox/TextBox'
import { getComicsDetail, getRecommendComics } from '../../../apiServices'
import MeteorShower from './MeteorShower/MeteorShower'
import Intro from './Intro/Intro'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
// import required modules
import { Parallax, Pagination, Autoplay } from 'swiper/modules'

function HeroesBaner() {

  const [recommendComics, setRecommendComics] = useState([])
  const [loading, setLoading] = useState()

  useEffect(() => {
    const comicsDetailData = sessionStorage.getItem('comicsDetailData')
    if (comicsDetailData) {
      setRecommendComics(JSON.parse(comicsDetailData))
    }
    else {
      (async () => {
        setLoading(true)
        const listComic = await getRecommendComics()
        const findComicDetail = await Promise.all(listComic.map(async (comic) => {
          const result = await getComicsDetail(comic?.id)
          if (!result) return null
          return { ...result, chapters: comic?.lastest_chapter?.name }
        }))

        // Fix bug khi không tìm thấy 1 số comic bị lỗi (bỏ qua comic đó)
        const listComicDetail = findComicDetail.filter(comic => comic !== null)

        sessionStorage.setItem('comicsDetailData', JSON.stringify(listComicDetail))
        setRecommendComics(listComicDetail)
        setLoading(false)
      })()
    }
  }, [])

  return (
    <div className="bg-[#2f2f2f] h-[640px] -mt-14 -mx-4 mb-10 max-w-[1600px] relative">
      <Swiper
        style={{
          '--swiper-pagination-color': '#fff'
        }}
        speed={500}
        parallax={true}
        autoplay={{
          delay: 4000,
          pauseOnMouseEnter: true
          // disableOnInteraction: false
        }}
        pagination={{
          clickable: true
        }}
        modules={[Parallax, Pagination, Autoplay]}
        className="w-full h-full bg-black text-white p-10"
      >
        <div
          slot="container-start"
          className="parallax-bg absolute top-0 left-0 w-[130%] h-full bg-center bg-cover"
          style={{
            'backgroundImage':
              'url(https://images3.alphacoders.com/132/1328226.png)'
          }}
          data-swiper-parallax="-23%"
        ></div>

        <MeteorShower />

        {loading ? <Intro /> :
          recommendComics?.map((data, index) => (
            <SwiperSlide key={index} className='grid items-center'>
              <div className="flex w-full px-10 gap-10">
                <MagicImage imgUrl={data?.thumbnail} altImg={data?.id} />
                <TextBox title={data?.title} genres={data?.genres} chapter={data?.chapters} rating={data?.average} description={data?.description} />
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  )
}

export default HeroesBaner
