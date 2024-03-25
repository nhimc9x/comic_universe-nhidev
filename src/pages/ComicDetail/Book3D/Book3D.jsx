import './Book3D.css'

function Book3D({ thumbnail }) {
  return (
    <div className="book-container">
      <div className="book">
        <img
          className=''
          alt=""
          src={thumbnail}
        />
      </div>
    </div>
  )
}

export default Book3D