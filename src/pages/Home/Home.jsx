import TrendingComics from './TrendingComics/TrendingComics'
import RecommendComics from './RecommendComics/RecommendComics'
import CompletedComics from './CompletedComics/CompletedComics'
import RecentUpdateComics from './RecentUpdateComics/RecentUpdateComics'

function Home() {
  return (
    <div>
      <TrendingComics />
      <RecommendComics />
      <CompletedComics />
      <RecentUpdateComics />
    </div>
  )
}

export default Home