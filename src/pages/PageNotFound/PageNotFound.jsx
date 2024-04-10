import { NavLink } from 'react-router-dom'
import routes from '~/config/routes'

function PageNotFound() {
  return (
    <div className="bg-gray-100">
      <div className="h-screen flex flex-col justify-center items-center">
        <h1 className="text-8xl font-bold text-cmu-primary-500">404</h1>
        <p className="text-4xl my-4 font-medium text-cmu-primary-400">Page Not Found</p>
        <NavLink to={routes.home} className="mt-4 text-xl text-blue-600 hover:underline">Go back home</NavLink>
      </div>
    </div>
  )
}

export default PageNotFound
