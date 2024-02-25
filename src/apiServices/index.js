/* eslint-disable no-console */
import request from '../utils/request'

export const getTrendingComics = async (page) => {
  try {
    const res = await request.get(`/trending-comics?page=${page}`)
    return res.data
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}

export const getRecommendComics = async () => {
  try {
    const res = await request.get('/recommend-comics')
    return res.data
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}

export const getCompletedComics = async (page) => {
  try {
    const res = await request.get(`/completed-comics?page=${page}`)
    return res.data
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}

export const getRecentUpdateComics = async (page, status) => {
  try {
    const res = await request.get(`/recent-update-comics?page=${page}&status=${status}`)
    return res.data
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}

// export const getGenres = async () => {
//   try {
//     const res = await request.get('/genres')
//     return res.data
//   } catch (error) {
//     console.error('Error fetching data:', error)
//   }
// }

// export const getComcis = async (genre_id, page, status = 'all') => {
//   try {
//     const res = await request.get(`/genres/${genre_id}`, {
//       params: {
//         page: page,
//         status: status
//       }
//     })
//     return res.data
//   } catch (error) {
//     console.error('Error fetching data:', error)
//   }
// }