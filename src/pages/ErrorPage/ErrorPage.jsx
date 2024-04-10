import { NavLink } from 'react-router-dom'
import routes from '../../config/routes'

function ErrorPage() {
  return (
    <div className="bg-gray-100 px-2 text-center">
      <div className="h-screen flex flex-col justify-center items-center">
        <h1 className="text-8xl font-extrabold text-red-500">500</h1>
        <p className="text-4xl font-medium text-gray-800">Internal Server Error</p>
        <p className="text-xl text-gray-800 mt-4">We apologize for the inconvenience. Please try again later.</p>
        <NavLink
          to={routes.home}
          className="bg-blue-400 px-4 py-2.5 rounded-md mt-4 font-bold text-white uppercase
        hover:bg-blue-300 hover:text-[#2f2f2f] duration-300"
        >
          Back home
        </NavLink>
      </div>
    </div>
  )
}

export default ErrorPage
