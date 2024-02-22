import request from '../utils/request'

export const getGenres = async () => {
  try {
    const res = await request.get('/genres')
    return res.data
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}

export const getComcis = async (genre_id, page, status = 'all') => {
  try {
    const res = await request.get(`/genres/${genre_id}`, {
      params: {
        page: page,
        status: status
      }
    })
    return res.data
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}