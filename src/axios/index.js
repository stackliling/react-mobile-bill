import axios from 'axios';

const axiosIns = axios.create({
  baseURL: "http://localhost:1024/",
  timeout: 6 * 1000,
  headers: {
    // 'X-Custom-Header': 'Stack'
  }
})

export default axiosIns

