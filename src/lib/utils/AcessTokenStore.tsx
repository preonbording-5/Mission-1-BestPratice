const ACCESS_TOKEN = 'access_token';

export const getAccessToken = () => {
  try {
    return JSON.parse(localStorage.getItem(ACCESS_TOKEN) || '');
  } catch (e) {
    console.error(e);
    return;
  }
};

export const setAccessToken = (accessToken: string) =>
  localStorage.setItem(ACCESS_TOKEN, JSON.stringify(accessToken));

export const clearAccessToken = () => localStorage.removeItem(ACCESS_TOKEN);
