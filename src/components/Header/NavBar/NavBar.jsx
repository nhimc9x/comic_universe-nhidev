import MenuItem from './MenuItem/MenuItem'
import routes from '../../../config/routes'

function NavBar() {
  return (
    <div className="flex text-xl font-bold gap-3 items-center text-black dark:text-white">
      <MenuItem to={routes.home} title='Trang chủ' />
      <MenuItem to={routes.genres} title='Thể loại' />
      <MenuItem to={routes.top} title='Xếp hạng' />
    </div>
  )
}

export default NavBar