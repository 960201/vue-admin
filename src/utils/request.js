import axios from 'axios'
import { MessageBox, Message } from 'element-ui'

// 创建axios实例
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // 当跨域请求时发送cookie
  timeout: 5000 // 请求超时
})

// 添加请求拦截器
service.interceptors.request.use(
  config => {
    // 在发送请求之前做些什么
    return config
  },
  error => {
    // 对请求错误做些什么
    console.log('请求错误', error)
    return Promise.reject(error)
  }
)

// 添加响应拦截器
service.interceptors.response.use(
  response => {
    // 对响应数据做点什么
    const { data: res } = response
    if (res.code == 422) {
      Message({
        message: res.msg,
        type: 'error',
        duration: 1 * 1000
      })
    }
    return response
  },
  error => {
    // 对响应错误做点什么
    Message({
      message: error.response.data.msg,
      type: 'error',
      duration: 5 * 100
    })
    return Promise.reject(error)
  }
)

export default service
