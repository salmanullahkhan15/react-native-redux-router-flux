
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text, StyleSheet, } from 'react-native';
import GlobalStyles from '../global/globalStyles';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

class AppButton extends Component {
    render() {
        const { text, onPress } = this.props;
        return (
            <TouchableOpacity style={styles.buttonStyle}
                onPress={() => onPress()}
            >
                <Text style={styles.textStyle}>{text}</Text>
            </TouchableOpacity>
        );
    }
}

AppButton.propTypes = {
    text: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 16,
        color: '#ffffff',
        textAlign: 'center',
        fontWeight: '700'
    },

    buttonStyle: {
        padding: hp('1.6%'),
        backgroundColor: GlobalStyles.BUTTON_COLOR,
        width: wp('90%'),
        marginTop: hp('1.5%')
    }
});

export default AppButton;