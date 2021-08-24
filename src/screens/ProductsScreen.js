import React, {useEffect, useState, useCallback} from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import {getProducts} from '../services/api';
import Product from '../components/Product';

const ProductsScreen = ({navigation}) => {
  const limit = 20;
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isEndOfList, setIsEndOfList] = useState(true);
  const [loadMoreLoader, setLoadMoreLoader] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (page === 1) {
      setIsLoading(true);
    }
    getProductsData();
  }, [page]);

  const getProductsData = async () => {
    const newProducts = await getProducts({
      _limit: limit,
      _page: page,
    });
    setProducts(page === 1 ? newProducts : [...products, ...newProducts]);
    setIsEndOfList(newProducts.length < limit);
    setIsLoading(false);
    setLoadMoreLoader(false);
  };

  const loadMore = () => {
    if (!isLoading && !isEndOfList && !loadMoreLoader) {
      setLoadMoreLoader(true);
      setPage(page => page + 1);
    }
  };

  const renderEmpty = () => {
    return isLoading ? (
      <ActivityIndicator />
    ) : (
      <View>
        <Text>No data found</Text>
      </View>
    );
  };

  const renderFooter = () => {
    if (loadMoreLoader) {
      return <ActivityIndicator />;
    } else if (isEndOfList) {
      return (
        <View>
          <Text>End of list</Text>
        </View>
      );
    }
    return null;
  };
  const keyExtractor = useCallback(item => `${item.id}`, []);

  return (
    <SafeAreaView style={styles.flex1}>
      <FlatList
        ListEmptyComponent={renderEmpty()}
        ListFooterComponent={renderFooter()}
        data={products}
        style={styles.flex1}
        contentContainerStyle={styles.flatlistContainer}
        keyExtractor={keyExtractor}
        renderItem={({item}) => <Product item={item} />}
        onEndReached={loadMore}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  flex1: {
    flex: 1,
  },
  note: {
    marginBottom: 16,
    fontSize: 18,
  },
  flatlistContainer: {
    paddingVertical: 8,
    flexGrow: 1,
  },
});

export default ProductsScreen;
