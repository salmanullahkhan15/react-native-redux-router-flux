/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Button,
    TouchableWithoutFeedback,
    Image,
    Keyboard,
    TouchableHighlight,
    TouchableOpacity
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


import { Actions } from "react-native-router-flux";
import RouteKey from "../route/routeKeys";
import GlobalStyles from '../global/globalStyles';
import Loader from "../components/Loader";
import AppButton from '../components/AppButton';


class Login extends React.Component {

    constructor(props) {

        super(props)

        this.state = {
            isLoading: false
        };

    }


    componentWillMount() {
        // GlobalFunction .getUserData(res).t
    }


    async onSingup() {
        console.log("asdf")
        Actions[RouteKey.SIGNUP]()
    }


    render() {
        console.disableYellowBox = true;

        const { isLoading } = this.state;
        return (


            <TouchableWithoutFeedback onPress={() => {
                Keyboard.dismiss();
                console.log('dismiss Keyboard')
            }}>
                <View style={styles.mainView}>

                    <Text>Heading</Text>
                    <Text>sub heading</Text>
                    <Text>sub sub heading</Text>
                    {/* <Loader
                        loading={isLoading} />
                    <View style={styles.topImgView}>
                        <Text style={styles.headingOne}>Welcome to</Text>
                        <Text style={styles.headingTwo}>Boiler Plate</Text>
                    </View>
                    <View style={styles.loginForm}>
                        <AppButton
                            text="GOTO SIGNUP"
                            style={styles.logBtn}
                            onPress={() => {
                                this.onSingup()
                            }}
                        />
                    </View>

                    <TouchableOpacity style={styles.forgetOp} onPress={() => { Actions[RouteKey.FORGET_PASSWORD]() }} >
                        <View>
                            <Text style={styles.forgetTxt}>Forgot Password?</Text>
                        </View>
                    </TouchableOpacity> */}
                </View>
            </TouchableWithoutFeedback>


        );
    }

}

// const firstScreen = () => {



// };

const styles = StyleSheet.create({

    mainView: {
        // paddingTop: hp('5%'),
        // width: wp("100%"),
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0

    },

    topImgView: {
        alignItems: 'center',
    },
    topImg: {
        aspectRatio: 0.5, // <-- this
        resizeMode: 'contain', //optional
    },
    headingOne: {
        // marginTop: hp("-12%"),
        fontWeight: '700',
        fontSize: 18
    },
    headingTwo: {
        color: GlobalStyles.SUB_HEADING_COLOR,
        fontWeight: '700',
        fontSize: 15

    },
    loginForm: {
        width: wp("90%"),
        alignSelf: 'center',
        marginTop: hp("5%")

    },
    logBtn: {
        marginTop: hp('20%')
    },
    forgetTxt: {
        width: wp('95%'),
        textAlign: 'right',
        marginTop: wp('5%'),
        height: hp('100%'),
        color: 'black'
    },

    forgetOp: {
        backgroundColor: 'transparent',
        width: wp('100%'),
        height: wp('10%'),
        marginTop: 10,
        // alignSelf: 'flex-end',
    },
});

export default Login
