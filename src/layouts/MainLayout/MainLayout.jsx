import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'

function MainLayout({ children }) {
  return (
    <div className="bg-white dark:bg-[#18181b]">
      <Header />
      <div className="max-w-[1440px] w-full mx-auto pt-32 px-4">
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default MainLayout