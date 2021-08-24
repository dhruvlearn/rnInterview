import React from 'react';
import {Button, View, SafeAreaView} from 'react-native';

const FavoriteProductsScreen = ({navigation}) => {
  return (
    <SafeAreaView>
      <View>
        <Button
          onPress={() => navigation.navigate('ExploreScreenStack')}
          title="Go to Setting Screen"
        />
      </View>
    </SafeAreaView>
  );
};

export default FavoriteProductsScreen;
