import TrendingComics from './TrendingComics/TrendingComics'
import CompletedComics from './CompletedComics/CompletedComics'
import RecentUpdateComics from './RecentUpdateComics/RecentUpdateComics'
import HeroesBaner from './HeroesBaner/HeroesBaner'
import usePageTitle from '~/hooks/usePageTitle'

function Home() {
  usePageTitle('Vũ Trụ Truyện Tranh | UComics')
  return (
    <div>
      <HeroesBaner />
      <TrendingComics />
      <RecentUpdateComics />
      <CompletedComics />
    </div>
  )
}

export default Home
