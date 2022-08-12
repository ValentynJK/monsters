// func receives type T, type T is received as return inside of a promise

export const getData = async <T>(path: string): Promise<T> => {
  const response = await fetch(path);
  return await response.json();
}