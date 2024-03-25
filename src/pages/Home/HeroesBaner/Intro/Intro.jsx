import bgTitle from '~/assets/bg_text_title.jpg'
import Loading from '../../../../components/Loading/Loading'

function Intro() {
  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 bg-white/20 dark:bg-black/70 grid place-content-center pb-14">
      <div
        style={{
          backgroundImage: `url('${bgTitle}')`
        }}
        className="text-[5rem] uppercase bg-clip-text text-transparent bg-cover bg-center
      font-sans tracking-wide font-bold animate-back-in-down"
      >
        UComics
      </div>
      <Loading />
    </div>
  )
}

export default Intro