import Footer from '~/components/Footer/Footer'
import Header from '~/components/Header/Header'
import LoadingBar from '~/components/LoadingBar/LoadingBar'
import ScrollToTop from '~/components/ScrollToTop/ScrollToTop'

function MainLayout({ children }) {
  return (
    <div className="bg-white dark:bg-[#18181b] min-h-dvh">
      <LoadingBar />
      <Header />
      <div className="max-w-[1440px] w-full mx-auto pt-32 px-4">
        {children}
      </div>
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default MainLayout
