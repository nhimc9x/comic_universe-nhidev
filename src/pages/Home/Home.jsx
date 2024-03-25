import TrendingComics from './TrendingComics/TrendingComics'
import CompletedComics from './CompletedComics/CompletedComics'
import RecentUpdateComics from './RecentUpdateComics/RecentUpdateComics'
import HeroesBaner from './HeroesBaner/HeroesBaner'

function Home() {
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