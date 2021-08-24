import 'react-native-gesture-handler';

import * as React from 'react';

import RNBootSplash from 'react-native-bootsplash';
import AppNavigator from './src/navigation/AppNavigator';

const App = () => {
  React.useEffect(() => {
    RNBootSplash.hide({fade: true});
  }, []);

  return <AppNavigator />;
};

export default App;
