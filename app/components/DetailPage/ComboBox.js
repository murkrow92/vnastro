/**
 * Created by murkrow on 6/12/17.
 */

import React, {Component} from 'react';
import {View, StyleSheet, Text, Image} from "react-native";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";
import Sun from "../../styles/images/planet/Sun.png";
import Aries from "../../styles/images/signs/1.png";

export default class ComboBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comboDegree: '22 ',
            comboName: 'Mặt trời Bạch Dương'
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.comboBox}>
                    <Image source={Sun} style={styles.combo1}/>
                    <Image source={Aries} style={styles.combo2}/>
                </View>
                <Text style={styles.comboName}>{this.state.comboName}</Text>
                <Text style={styles.comboDegree}>{this.state.comboDegree}</Text>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flexDirection: 'column'
    },
    comboBox: {
        marginTop: 15,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center'
    },
    combo1: {
        width: 50,
        height: 50,
        marginRight: 15
    },
    combo2: {
        width: 50,
        height: 50
    },
    comboName: {
        marginTop: 10,
        color: colors.BLACK,
        fontSize: 13,
        fontFamily: fonts.OPEN_SAN

    },
    comboDegree: {
        marginTop: 10,
        color: colors.LABEL,
        fontSize: 13,
        fontFamily: fonts.OPEN_SAN
    }
});