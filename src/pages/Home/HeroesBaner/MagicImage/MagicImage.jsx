import './MagicImage.css'

function MagicImage({ imgUrl, altImg }) {
  return (
    <div className="w-2/3 mx-auto h-[220px] sms:h-[380px] sms:w-[260px] md:h-[480px] md:w-[340px] sm: z-10 image-cover">
      <div className="spot"></div>
      <div className="spot"></div>
      <div className="spot"></div>
      <div className="spot"></div>
      <div className="spot"></div>
      <div className="spot"></div>
      <img className="" src={imgUrl} alt={altImg} />
    </div>
  )
}

export default MagicImage

