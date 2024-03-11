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

export const getGenres = async () => {
  try {
    const res = await request.get('/genres')

    // Thường gặp lỗi trả về mảng rỗng
    if (!res.data.length) {
      return getGenres()
    }
    else {
      return res.data
    }
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}

export const getComicsByGenre = async (genre_id, page, status) => {
  try {
    const res = await request.get(`/genres/${genre_id}`, {
      params: {
        status: status,
        page: page
      }
    })
    return res.data
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}