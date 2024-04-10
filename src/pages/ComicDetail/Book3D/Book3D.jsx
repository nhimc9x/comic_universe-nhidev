import placeholderImg from '~/assets/img_placeholder.jpg'
import './Book3D.css'

function Book3D({ thumbnail }) {
  return (
    <div className="book-container">
      <div className="book">
        <img
          className=''
          alt=""
          src={thumbnail}
          onError={(e) => {
            if (e.target.src !== placeholderImg) {
              e.target.onerror = null
              e.target.src = placeholderImg
            }
          }}
        />
      </div>
    </div>
  )
}

export default Book3D
