import './MagicImage.css'

function MagicImage({ imgUrl, altImg }) {
  return (
    <div className="h-[480px] z-10 image-cover">
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
