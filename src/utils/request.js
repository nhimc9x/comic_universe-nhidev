import axios from 'axios'

export const request = axios.create({
  baseURL: 'https://comics-api.vercel.app'
})

export const requestV2 = axios.create({
  baseURL: 'https://comics-api.vercel.app/v2'
})

// export const get = async (path, options = {}) => {
//   const response = await request.get(path, options)
//   return response.data
// }
