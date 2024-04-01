function SingleChapterLayout({ children }) {
  return (
    <div className="bg-[#18181b] min-h-dvh">
      <div className="max-w-[900px] w-full mx-auto">
        {children}
      </div>
    </div>
  )
}

export default SingleChapterLayout
