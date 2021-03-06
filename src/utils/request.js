// eslint-disable-line
import axios from 'axios'

axios.defaults.retry = 4
axios.defaults.retryDelay = 1000
// 创建axios实例
const service = axios.create({
  baseURL: process.env.NODE_ENV === 'development' ? '/' : '/', // api的base_url
  timeout: 50000 // 请求超时时间
})
// request拦截器
service.interceptors.request.use(config => {
  return config
}, error => {
  // Do something with request error
  console.log(error) // for debug
  Promise.reject(error)
})
// respone拦截器
service.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    var config = error.config
    // If config does not exist or the retry option is not set, reject
    if (!config || !config.retry) return Promise.reject(error)
    // Set the variable for keeping track of the retry count
    config.__retryCount = config.__retryCount || 0
    // Check if we've maxed out the total number of retries
    if (config.__retryCount >= config.retry) {
      // Reject with the error
      return Promise.reject(error)
    }
    // Increase the retry count
    config.__retryCount += 1
    // Create new promise to handle exponential backoff
    var backoff = new Promise(function(resolve) {
      setTimeout(function() {
        resolve()
      }, config.retryDelay || 1)
    })
    // Return the promise in which recalls axios to retry the request
    return backoff.then(function() {
      return axios(config)
    })
    // return Promise.reject(error)
  }
)
export default service
