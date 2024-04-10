import CategoryTopComics from './CategoryTopComics/CategoryTopComics'

const categories = [
  { id: 'all', title: 'All' },
  { id: 'daily', title: 'Ngày' },
  { id: 'weekly', title: 'Tuần' },
  { id: 'monthly', title: 'Tháng' }
]

function renderCategoryTopComics() {
  return (
    <div className="grid grid-cols-4 gap-[1px]">
      {categories.map(category => (
        <CategoryTopComics
          key={category.id}
          id={category.id}
          title={category.title}
        />
      ))}
    </div>
  )
}

export default renderCategoryTopComics
