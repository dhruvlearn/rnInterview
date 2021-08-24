import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';

const {width} = Dimensions.get('window');
const Product = ({item}) => {
  return (
    <View style={styles.productContainer}>
      <TouchableOpacity style={styles.heartContainer}>
        <Ionicons name="ios-heart-outline" size={30} style={styles.heartIcon} />
      </TouchableOpacity>
      <Image
        style={styles.imageContainer}
        source={{
          uri: item.url,
        }}
      />
      <Text>{item.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: width - 64,
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  productContainer: {
    borderRadius: 10,
    padding: 16,
    marginHorizontal: 16,
    marginVertical: 8,
    backgroundColor: 'white',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 2.62,
    elevation: 4,
    position: 'relative',
  },
  heartContainer: {
    position: 'absolute',
    padding: 5,
    borderRadius: 100,
    height: 40,
    width: 40,
    zIndex: 2,
    backgroundColor: 'white',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 2.62,
    elevation: 4,
    right: 20,
    top: 20,
  },
  heartIcon: {},
});
export default Product;
