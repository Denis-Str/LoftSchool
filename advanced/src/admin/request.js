import axios from 'axios';

const token = localStorage.getItem('token');
if (!token) console.warn("отсутствует токен")

const request = axios.create({
  baseURL: "https://webdev-api.loftschool.com",
  headers: {
    'Authorization': `Bearer ${token}`,
  }
  
});

request.interceptors.response.use(
  response => response,
  async error => {
    const originRequest = error.config;
    if (error.response.status === 401) {
      const response = await request.post("/refreshToken");
      const token = response.data.token;
      
      localStorage.setItem("token", token);
      request.defaults.headers["Authorization"] = `Bearer ${token}`;
      originRequest.headers["Authorization"] = `Bearer ${token}`;
      
      return  axios(originRequest);
    }
    return Promise.reject(error)
  }
);

export default request;