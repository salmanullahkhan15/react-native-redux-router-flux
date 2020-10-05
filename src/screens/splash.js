
import React from 'react';
import {
    StyleSheet,
    View,
    Image,
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


import { Actions } from "react-native-router-flux";
import RouteKey from "../route/routeKeys";



class Splash extends React.Component {
    state = {

        isLoading: false,

    };

    componentDidMount() {

        setTimeout(() => {
            Actions.replace(RouteKey.LOGIN)
        }, 3000);

    }

    render() {
        console.disableYellowBox = true;

        const { isLoading } = this.state;
        return (
            <View style={styles.mainView}>
                <Image style={styles.backgroungImg} source={require('../assets/splash/splash-logo.png')}
                />
            </View>
        );
    }

}

// const firstScreen = () => {



// };

const styles = StyleSheet.create({

    mainView: {
        flex: 1,
        paddingTop: hp('5%'),
        height: hp("100%"),
        width: wp("100%"),
        textAlign: 'center'
    },
    backgroungImg: {
        width: wp("70%"),
        height: hp("10%"),
        resizeMode: 'contain',
        // position: 'absolute',
        alignSelf: 'center',
        marginTop: hp('30%')

    },

});



export default Splash;
