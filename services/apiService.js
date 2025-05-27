import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:8080',
  // baseURL: 'http://165.22.55.16:8080/',
  withCredentials: true,    
  headers: {
    'Content-Type': 'application/json',
    'x-access-keY': 'X-ACCESS-KEY-VALUE-TEST',
  },
});

// ถ้ารูปเก็บบนโดเมนอื่น กำหนดแยก
const IMAGE_BASE_URL = 'https://azsunriseresort.com/images';

const apiService = {
  async get(url, params = {}) {
    const response = await apiClient.get(url, { params });
    return response.data;
  },
  async post(url, data = {}, config = {}) {
    const response = await apiClient.post(url, data, config);
    return response.data;
  },
  async put(url, data = {}) {
    const response = await apiClient.put(url, data);
    return response.data;
  },
  async delete(url) {
    const response = await apiClient.delete(url);
    return response.data;
  },

  getImageUrl(bannerPath, bannerName) {
    return `${IMAGE_BASE_URL}/${bannerPath}/${bannerName}`;
  }
};

export default apiService;
