import routes from '../config/routes'
import Genres from '../pages/Genres/Genres'
import Home from '../pages/Home/Home'
import Top from '../pages/Top/Top'
import Completed from '../pages/MoreComics/Completed/Completed'
import Recent from '../pages/MoreComics/Recent/Recent'
import Trending from '../pages/MoreComics/Trending/Trending'
import ComicDetail from '../pages/ComicDetail/ComicDetail'
import SingleChapter from '../pages/SingleChapter/SingleChapter'
import SingleChapterLayout from '../layouts/SingleChapterLayout/SingleChapterLayout'
import PageNotFound from '../pages/PageNotFound/PageNotFound'
import ErrorPage from '../pages/ErrorPage/ErrorPage'
import SearchResult from '../pages/SearchResult/SearchResult'

export const PUBLIC_ROUTES = [
  { path: routes.home, component: Home },
  { path: routes.genres, component: Genres },
  { path: routes.top, component: Top },
  { path: routes.trending, component: Trending },
  { path: routes.recent, component: Recent },
  { path: routes.completed, component: Completed },
  { path: routes.comics, component: ComicDetail },
  { path: routes.search, component: SearchResult },
  { path: routes.singleChapter, component: SingleChapter, layout: SingleChapterLayout },
  { path: routes.notFound, component: PageNotFound, layout: null },
  { path: routes.error, component: ErrorPage, layout: null }
]

const PRIVATE_ROUTES = []
