import TrendingComics from './TrendingComics/TrendingComics'
import RecommendComics from './RecommendComics/RecommendComics'
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
      {/* <RecommendComics /> */}
    </div>
  )
}

export default Home