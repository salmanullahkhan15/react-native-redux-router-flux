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
    Alert
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


import { Actions } from "react-native-router-flux";
// import RouteKey from "../route/constantKey";
import GlobalStyles from '../global/globalStyles';
// import GlobalPath from '../global/globalPath';

import Loader from "../components/Loader";
// import AppInput from '../components/AppInput';
import AppButton from '../components/AppButton';

// import GlobalFunction from '../global/globalFunctions';



class ForgetPassword extends React.Component {
    state = {
        email: '',
        password: '',
        isAuthenticationError: false,
        isEmpty: false,
        isLoading: false,
        successMsg: false,
        isEmail: false
    };

    onBtnClick = function () {
        // Actions[RouteKey.SIDEMENU]()


    }
    render() {
        console.disableYellowBox = true;

        const { email, isAuthenticationError, isEmpty, isLoading, successMsg, isEmail } = this.state;
        return (

            <View style={styles.mainView}>

                <TouchableWithoutFeedback onPress={() => {
                    Keyboard.dismiss();
                    console.log('dismiss Keyboard')
                }}>
                    <KeyboardAwareScrollView style={styles.mainView}>

                        <Loader
                            loading={this.state.isLoading} />



                        <View style={styles.topImgView}>

                            <Text style={styles.headingTwo}>Enter your email address below and we'll send you instruction on how to change your password!</Text>
                        </View>


                        <View style={styles.loginForm}>

                            {/* <AppInput
                                value={email}
                                secureTextEntry={false}
                                placeholder="Please enter email address"
                                iconImgSrc={GlobalPath.IMAGES.LOGIN_INPUT_EMAIL}
                                keyboardType="email-address"
                                onChange={input => this.setState({ email: input })}
                            /> */}



                            {/* <AppButton
                                text="RESET PASSWORD"
                                style={styles.logBtn}
                                onPress={() => {
                                    this.onBtnClick()
                                }}
                            /> */}


                            {
                                isEmpty &&
                                <Text style={styles.errorMsg}>Email address must not be empty</Text>
                            }


                            {
                                isAuthenticationError &&
                                <Text style={styles.errorMsg}>User does not exist</Text>
                            }

                            {
                                isEmail &&
                                <Text style={styles.errorMsg}>Please enter correct email address</Text>
                            }

                            {
                                successMsg &&
                                <Text style={styles.successMsg}>Change password link has been sent you email.</Text>
                            }





                        </View>

                    </KeyboardAwareScrollView>


                </TouchableWithoutFeedback>


                <View style={styles.btnParent}>
                    <AppButton
                        text="RESET PASSWORD"
                        style={styles.logBtn}
                        onPress={() => {
                            this.onBtnClick()
                        }}
                    />
                </View>
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
    },
    backgroungImg: {
        width: wp("100%"),
        height: hp("95%"),
        resizeMode: 'stretch',
        position: 'absolute'
    },
    topImgView: {
        alignItems: 'center',
    },
    topImg: {
        aspectRatio: 0.5, // <-- this
        resizeMode: 'contain', //optional
        marginTop: hp('-10%')

    },
    headingOne: {
        marginTop: hp("-12%"),
        fontWeight: '700',
        fontSize: 18
    },
    headingTwo: {
        color: GlobalStyles.SUB_HEADING_COLOR,
        width: wp('90%')
    },
    loginForm: {
        width: wp("90%"),
        alignSelf: 'center',
        marginTop: hp("5%")
    },
    logBtn: {
        marginTop: hp('2%')
    },
    forgetTxt: {
        width: wp('90%'),
        textAlign: 'right',
        marginTop: wp('5%'),
        height: hp('100%')
    },
    errorMsg: {
        color: 'red',
        textAlign: 'center',
        marginTop: hp('1%')
    },
    successMsg: {
        color: 'green',
        textAlign: 'center',
        marginTop: hp('2%')
    },
    btnParent: {
        width: wp("90%"),
        alignSelf: 'center',
        position: 'absolute',
        top: hp('40%')
    },

});



export default ForgetPassword;
