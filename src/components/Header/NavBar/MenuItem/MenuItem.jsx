import { NavLink } from 'react-router-dom'
import './MenuItem.css'

function MenuItem({ to, title }) {
  return (
    <NavLink className="menu-item" to={to}>{title}</NavLink>
  )
}

export default MenuItem