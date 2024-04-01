import { NavLink } from 'react-router-dom'

function NavigationBtn({ disable, to, btnIcon }) {

  if (disable) {
    return (
      <div
        className="text-cmu-secondary-100 size-10 rounded-md grid place-content-center bg-stone-400">
        {btnIcon}
      </div>
    )
  }

  return (
    <NavLink
      to={to}
      className="text-cmu-secondary-100 size-10 rounded-md grid place-content-center bg-cmu-primary-500">
      {btnIcon}
    </NavLink>
  )
}

export default NavigationBtn
