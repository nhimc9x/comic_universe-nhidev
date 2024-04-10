import bookGif from '~/assets/book_open.gif'

function Loading() {
  return (
    <div className="mx-auto relative grid place-content-center
    animate-[scale-up-center_0.9s_ease-in-out,pulse_ease-in-out_3s_4s_infinite]">
      <img className='size-24 object-cover' src={bookGif} alt="" />
      <div className="size-24 absolute">
        <div
          className="border w-full h-full absolute border-black/50 dark:border-white/30 rounded-full animate-spin-slow
        before:absolute before:-top-1.5 before:left-1/2 before:-translate-x-1/2 before:size-3
        before:bg-gradient-radial before:from-[#4b3ffb] before:from-30% before:to-[#46fc92] before:rounded-full"
        >
        </div>
      </div>
      <div className="size-14 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
        <div
          className="border absolute w-full h-full border-black/50 dark:border-white/30 rounded-full animate-spin-reverse
        before:absolute before:-top-1 before:left-1/2 before:-translate-x-1/2 before:size-2
        before:bg-gradient-radial before:from-[#ef5b44] before:from-30% before:to-[#f8d6b0] before:rounded-full"
        >
        </div>
      </div>
    </div>
  )
}

export default Loading

