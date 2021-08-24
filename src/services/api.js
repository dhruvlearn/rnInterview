export const getProducts = async params => {
  try {
    return await fetch(
      `https://jsonplaceholder.typicode.com/photos?${new URLSearchParams(
        params,
      )}}`,
    ).then(response => response.json());
  } catch (error) {
    console.log('error,', error);
    return error;
  }
};
