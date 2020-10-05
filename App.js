import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import RouterFlux from "./src/route/routeIndex";

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }


class App extends React.Component {

  constructor() {
    super();
    if (Text.defaultProps == null) Text.defaultProps = {};
    Text.defaultProps.allowFontScaling = false;
  }

  render() {
    return (

      <View style={styles.mainView}>
        <SafeAreaView style={styles.mainViewSafe}>

          <StatusBar barStyle="light-content" backgroundColor="#3E103F" />

          < RouterFlux />
        </SafeAreaView>

      </View>

    )
  }


};

const styles = StyleSheet.create({
  mainView: {
    width: wp('100%'),
    height: hp('100%'),
  },
  mainViewSafe: {
    width: wp('100%'),
    height: hp('100%'),
    backgroundColor: '#3E103F',
    flex: 1,
  }
});

export default App;
