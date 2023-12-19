import { api } from './api';
const API_KEY = '38515523-41632b5b01bbc3a6f312fa248';

export const fetchImages = async (query, page) => {
  const { data } = await api(
    `?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );

  return data;
};
