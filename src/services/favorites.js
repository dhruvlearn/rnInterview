import AsyncStorage from '@react-native-async-storage/async-storage';

export const getFavorites = async () => {
  return JSON.parse(await AsyncStorage.getItem('favorites', value)) || [];
};

export const addToFavorite = async productId => {
  try {
    const favorites = await getFavorites();
    favorites.push(productId);
    await AsyncStorage.setItem('favorites', JSON.stringify(favorites));
    return favorites;
  } catch (error) {
    console.log('error,', error);
    return error;
  }
};

export const removeFromFavorite = async productId => {
  try {
    const favorites = await getFavorites();
    const newFavorites = favorites.filter(favorite => favorite !== productId);
    console.log({
      newFavorites,
      favorites,
    });
    await AsyncStorage.setItem('favorites', JSON.stringify(newFavorites));
    return newFavorites;
  } catch (error) {
    console.log('error,', error);
    return error;
  }
};
