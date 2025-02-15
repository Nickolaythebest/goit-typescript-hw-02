import axios, { AxiosResponse } from "axios";

// Определяем типы данных для ответа API
interface Photo {
  id: string;
  urls: {
    regular: string;
    small: string;
    thumb: string;
  };
  alt_description: string;
  user: {
    name: string;
    username: string;
  };
}

interface FetchArticlesResponse {
  results: Photo[];
  total_pages: number;
}

// Настроим базовый URL
axios.defaults.baseURL = "https://api.unsplash.com";

// Типизация функции fetchArticlesWithTopic
export const fetchArticlesWithTopic = async (
  topic: string,
  page: number
): Promise<FetchArticlesResponse> => {
  // Отправка запроса
  const response: AxiosResponse<FetchArticlesResponse> = await axios.get(
    `/search/photos`,
    {
      params: {
        query: topic,
        page: page,
        client_id: 'kX5ElCGlYF6yASvtERfxoQYSJBseoFbxAc8QqzvE-Ms',
      },
    }
  );

  // Возвращаем нужные данные
  return {
    results: response.data.results,
    total_pages: response.data.total_pages,
  };
};
