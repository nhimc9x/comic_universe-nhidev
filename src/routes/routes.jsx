import routes from '../config/routes'
import Genres from '../pages/Genres/Genres'
import Home from '../pages/Home/Home'
import Top from '../pages/Top/Top'
import Completed from '../pages/MoreComics/Completed/Completed'
import Recent from '../pages/MoreComics/Recent/Recent'
import Recommend from '../pages/MoreComics/Recommend/Recommend'
import Trending from '../pages/MoreComics/Trending/Trending'

export const PUBLIC_ROUTES = [
  { path: routes.home, component: Home },
  { path: routes.genres, component: Genres },
  { path: routes.top, component: Top },

  { path: routes.trending, component: Trending },
  { path: routes.recommend, component: Recommend },
  { path: routes.recent, component: Recent },
  { path: routes.completed, component: Completed }
]

const PRIVATE_ROUTES = []
