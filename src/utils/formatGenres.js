export default function formatGenres(genreArray) {
  const formatedArray = genreArray.reduce((accumulator, currentValue) => {
    accumulator.push(currentValue.name)
    return accumulator
  }, [])
  return formatedArray.join(', ')
}