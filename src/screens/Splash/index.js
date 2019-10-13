import React from 'react';
import {
    View,
} from 'react-native';

import Control from "./control";
import connectRedux from '../../redux/connectRedux';
import styles from "./style";

class Splash extends Control {

    componentDidMount() {
        this.props.actions.app.testSaga();
    }

    render() {
        return (
            <View style={styles.container} >

            </View>
        );
    }

}

const mapStateToProps = state => ({

})

export default connectRedux(mapStateToProps, Splash);
