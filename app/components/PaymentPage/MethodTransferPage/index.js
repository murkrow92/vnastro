/**
 * Created by murkrow on 6/10/17.
 */

import PageWrapper from "../../Commons/Wrapper";
import React, {Component} from "react";
import TopNavigationBar from "../../Commons/TopNavigationBar/index";
import {Text, View, StyleSheet} from "react-native";
import fonts from "../../../styles/fonts";
import {APP_MARGIN} from "../../../styles/dimens";
import colors from "../../../styles/colors";
import ListBankAccount from "./ListBankAccount";

export default class MethodTransferPage extends Component {
    render() {
        const {navigate} = this.props.navigation;
        let item1 = {
            icon: 'truck',
            bank: 'VIB',
            accountName: 'Đoàn Phúc Bảo',
            accountNumber: "1234567"
        };
        let item2 = {
            icon: 'truck',
            bank: 'VIB',
            accountName: 'Đoàn Phúc Bảo',
            accountNumber: "1234567"
        };

        let items = [item1, item2];
        return (

            <PageWrapper>
                <TopNavigationBar
                    title="Chuyển khoản"
                    onPress={() => navigate('DrawerOpen')}
                    rightButton={rightButton()}/>
                <Text style={styles.textPayMethod}> Bạn vui lòng điền mã sau vào nội dung chuyển khoản</Text>
                <View style={styles.pinCodeContainer}>
                    <Text style={styles.pinCode}>123456</Text>
                </View>
                <ListBankAccount items={items}/>
            </PageWrapper>
        );
    }
}

const rightButton = () => {
    return ({
        title: ''
    });
};

const styles = StyleSheet.create(
    {
        textPayMethod: {
            color: colors.BLACK,
            marginLeft: APP_MARGIN,
            marginTop: 30,
            marginBottom: 15,
            fontSize: 13,
            fontFamily: fonts.HELVETICA

        },
        pinCodeContainer: {
            alignItems: 'center',
            marginBottom: 30

        },
        pinCode: {
            color: colors.BLACK,
            fontSize: 20,
            fontFamily: fonts.HELVETICA,
            borderRadius: 5,
            backgroundColor: '#f2f2f2',
            width: 120,
            height: 40,
            textAlign: 'center',
            textAlignVertical: 'center'
        }
    }
);
