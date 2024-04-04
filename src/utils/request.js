/* eslint-disable no-console */
import axios from 'axios'

export const request = axios.create({
  baseURL: 'https://comics-api.vercel.app',
  timeout: 8000
})

// export const requestV2 = axios.create({
//   baseURL: 'https://comics-api.vercel.app/v2'
// })

// export const get = async (path, options = {}) => {
//   const response = await request.get(path, options)
//   return response.data
// }

// Xử lý call api lỗi
request.interceptors.response.use(
  response => response,
  error => {
    if (error.response) {
      // Lỗi phản hồi từ server
      console.error('Server error:', error.response.status, error.response.data)
      // Chuyển hướng hoặc hiển thị thông báo lỗi
      window.location.href = '/error_page'
    } else if (error.request) {
      // Không nhận được phản hồi từ server
      console.error('No response received:', error.request)
      // Chuyển hướng
      window.location.href = '/error_page'
    } else {
      // Lỗi xảy ra trong quá trình xử lý yêu cầu
      console.error('Request error:', error.message)
    }
    return Promise.reject(error)
  }
)
