import routes from '../config/routes'
import Genres from '../pages/Genres/Genres'
import Home from '../pages/Home/Home'
import New from '../pages/New/New'
import Top from '../pages/Top/Top'

export const PUBLIC_ROUTES = [
  { path: routes.home, component: Home },
  { path: routes.genres, component: Genres },
  { path: routes.top, component: Top },
  { path: routes.new, component: New }

]

const PRIVATE_ROUTES = []
