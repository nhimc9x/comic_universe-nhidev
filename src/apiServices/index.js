/* eslint-disable no-console */
import { request, requestV2 } from '../utils/request'

export const getTrendingComics = async (page) => {
  try {
    const res = await requestV2.get(`/trending-comics?page=${page}`)
    return res.data
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}

export const getRecommendComics = async () => {
  try {
    const res = await requestV2.get('/recommend-comics')
    return res.data
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}

export const getCompletedComics = async (page) => {
  try {
    const res = await requestV2.get(`/completed-comics?page=${page}`)
    return res.data
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}

export const getRecentUpdateComics = async (page, status = 'all') => {
  try {
    const res = await requestV2.get(`/recent-update-comics?page=${page}&status=${status}`)
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

// page: number; // option
// status: 'all' | 'completed' | 'ongoing'; // option

// // Paths
// All: `/top?page=${page}&status=${status}`;
// Daily: `/top/daily?page=${page}&status=${status}`;
// Weekly: `/top/weekly?page=${page}&status=${status}`;
// Monthly: `/top/monthly?page=${page}&status=${status}`;
// Chapter: `/top/chapter?page=${page}&status=${status}`;
// Follow: `/top/follow?page=${page}&status=${status}`;
// Comment: `/top/comment?page=${page}&status=${status}`;

export const getAllTopComics = async () => {
  try {
    const res = await requestV2.get('/top')
    return res.data
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}

export const getTopComics = async (type, page, status) => {
  try {
    const res = await requestV2.get(`/top/${type}`, {
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

export const getComicsDetail = async (comicsId) => {
  try {
    const res = await requestV2.get(`/comics/${comicsId}`)
    return res.data
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}