/* eslint-disable no-console */
import axios from 'axios'

export const request = axios.create({
  baseURL: 'https://comics-api.vercel.app',
  timeout: 10000
})

// Sử dụng Apis V2
export const requestV2 = axios.create({
  baseURL: 'https://comics-api.vercel.app/v2'
})

// export const get = async (path, options = {}) => {
//   const response = await request.get(path, options)
//   return response.data
// }

// Xử lý call api lỗi
request.interceptors.response.use(
  response => response,
  error => {
    const { config, response, request, message } = error
    // Lỗi phản hồi từ server
    if (response && response.status === 500) {
      console.error('Error response:', response)
      // Thay đổi baseURL
      // config.baseURL = 'https://comics-api.vercel.app/v2'
      // Gọi lại yêu cầu với baseURL mới
      return axios.request(config)
    } else if (request) {
      // Không nhận được phản hồi từ server
      console.error('No response received:', request)
    } else {
      // Lỗi xảy ra trong quá trình xử lý yêu cầu
      console.error('Request error:', message)
      // Chuyển hướng
      // window.location.href = '/error_page'
    }
    return Promise.reject(error)
  }
)
