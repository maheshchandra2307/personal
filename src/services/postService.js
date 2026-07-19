import api from './api';

/**
 * Sample API service using JSONPlaceholder.
 */
export const postService = {
  async getPosts(limit = 6) {
    const { data } = await api.get('/posts', {
      params: { _limit: limit },
    });
    return data;
  },

  async getPostById(id) {
    const { data } = await api.get(`/posts/${id}`);
    return data;
  },

  async createPost(payload) {
    const { data } = await api.post('/posts', payload);
    return data;
  },
};

export default postService;
