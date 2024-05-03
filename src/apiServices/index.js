/* eslint-disable no-console */
import { request } from '~/utils/request'

export const getTrendingComics = async (page) => {
  const res = await request.get(`/trending-comics?page=${page}`)
  return res.data
}

export const getRecommendComics = async () => {
  const res = await request.get('/recommend-comics')
  return res.data
}

export const getCompletedComics = async (page) => {
  const res = await request.get(`/completed-comics?page=${page}`)
  return res.data
}

export const getRecentUpdateComics = async (page, status = 'all') => {
  const res = await request.get(`/recent-update-comics?page=${page}&status=${status}`)
  return res.data
}

export const getGenres = async () => {
  const res = await request.get('/genres')

  // Thường gặp lỗi trả về mảng rỗng
  if (!res.data.length) {
    return getGenres()
  }
  else {
    return res.data
  }
}

export const getComicsByGenre = async (genre_id, page, status) => {
  const res = await request.get(`/genres/${genre_id}`, {
    params: {
      status: status,
      page: page
    }
  })
  return res.data
}

export const getAllTopComics = async () => {
  const res = await request.get('/top')
  return res.data
}

export const getTopComics = async (type, page, status) => {
  const res = await request.get(`/top/${type}`, {
    params: {
      status: status,
      page: page
    }
  })
  return res.data
}

export const getComicsDetail = async (comicsId) => {
  const res = await request.get(`/comics/${comicsId}`)
  return res.data
}

export const getSingleChapter = async (comicsId, chapterId) => {
  const res = await request.get(`/comics/${comicsId}/chapters/${chapterId}`)
  return res.data
}

export const findComics = async (query, page) => {
  const res = await request.get(`/search?q=${query}&page=${page}`)
  return res.data
}
