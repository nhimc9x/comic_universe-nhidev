import CategoryTopComics from './CategoryTopComics/CategoryTopComics'

const categories = [
  { id: 'all', title: 'Top All' },
  { id: 'daily', title: 'Top Ngày' },
  { id: 'weekly', title: 'Top Tuần' },
  { id: 'monthly', title: 'Top Tháng' }
]

function renderCategoryTopComics(type, setType) {
  return (
    <div className="grid grid-cols-4 gap-[1px]">
      {categories.map(category => (
        <CategoryTopComics
          key={category.id}
          id={category.id}
          type={type}
          setType={setType}
          title={category.title}
        />
      ))}
    </div>
  )
}

export default renderCategoryTopComics