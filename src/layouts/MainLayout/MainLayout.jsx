import Header from '../../components/Header/Header'

function MainLayout({ children }) {
  return (
    <div className="bg-white dark:bg-[#18181b]">
      <Header />
      <div className="h-[1000px] max-w-[1440px] w-full mx-auto pt-24 px-4">
        {children}
      </div>
    </div>
  )
}

export default MainLayout