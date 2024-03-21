import './MeteorShower.css'

function MeteorShower() {
  return (
    <div
      className="
    absolute top-0 right-0 left-0 bottom-0 overflow-hidden
    *:absolute *:top-1/2 *:left-1/2 *:h-2 *:w-2 *:bg-white *:rounded-full *:animate-shower
    *:before:absolute *:before:top-1/2 *:before:-translate-y-1/2 *:before:w-[240px] *:before:h-0.5
    *:before:bg-gradient-to-r *:before:from-white *:before:to-transparent
    ">
      <span className="shooting_star"></span>
      <span className="shooting_star"></span>
      <span className="shooting_star"></span>
      <span className="shooting_star"></span>
      <span className="shooting_star"></span>
      <span className="shooting_star"></span>
      <span className="shooting_star"></span>
      <span className="shooting_star"></span>
    </div>
  )
}

export default MeteorShower
