const routes = {
  home: '/',
  genres: '/theloai',
  top: '/xephang',
  trending: '/trending',
  recent: '/recent',
  completed: '/completed',
  comics: '/comics/:comicId',
  singleChapter: '/comics/:comicId/chapters/:chapterId',
  notFound: '*',
  error: '/error_page'
}

export default routes