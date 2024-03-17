
function TitleFrame({ title }) {
  return (
    <div className="mb-6">
      <div
        className="bg-gradient-to-r min-w-max relative from-cyan-400 to-cyan-200 h-12 flex items-center pl-6 pr-12 w-1/2 rounded-tl-xl rounded-tr-[100px]
        after:absolute after:left-0 after:-bottom-2 after:h-1 after:bg-gradient-to-r after:-right-4 after:from-cyan-300 after:to-cyan-200"
      >
        <div className="text-[1.625rem] text-[#2f2f2f] whitespace-nowrap uppercase font-semibold tracking-widest">{title}</div>
      </div>
    </div>
  )
}

export default TitleFrame
