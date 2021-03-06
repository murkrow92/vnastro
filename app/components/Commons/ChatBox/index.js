/**
 * Created by Murkrow on 5/27/2017.
 */

import {Text, TouchableHighlight, View, StyleSheet} from "react-native";
import {AutoGrowingTextInput} from 'react-native-autogrow-textinput';
import React, {Component} from "react";
import colors from "../../../styles/colors";

const CONTAINER_MIN_HEIGHT = 56;
const CHATBOX_MIN_HEIGHT = 40;

export default class ChatBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: '',
        };
    }

    render() {
        return (
            <View style={[styles.container, {height: this.props.height}]}>
                <AutoGrowingTextInput
                    underlineColorAndroid='transparent'
                    autoCorrect={false}
                    multiline={true}
                    placeholderTextColor={colors.BORDER_GREY}
                    placeholder="Đặt câu hỏi"
                    style={[styles.chatbox, {height: this.props.height}]}
                    value={this.state.message}
                    onChangeText={(text) => this.setState({
                        message: text
                    })}
                    onSubmitEditing={() => {
                        this.props.onSubmit(this.state.message);
                    }}
                    onChange={(event) =>
                        this.props.onHeightChanged(event.nativeEvent.contentSize.height - CHATBOX_MIN_HEIGHT)
                    }
                />
                <TouchableHighlight
                    onPress={() => this.props.onSubmit(this.state.message)}
                    underlayColor="white">
                    <View style={styles.buttonContainer}>
                        <Text style={styles.sendLabel}>Gửi</Text>
                    </View>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = {
    container: {
        paddingLeft: 8,
        paddingRight: 8,
        flexDirection: 'row',
        alignItems: 'center',
        height: CONTAINER_MIN_HEIGHT
    },
    chatbox: {
        flex: 1,
        marginRight: 8,
        justifyContent: 'center',
        color: '#555555',
        paddingRight: 8,
        paddingLeft: 8,
        height: CHATBOX_MIN_HEIGHT,
        borderColor: 'lightgrey',
        borderWidth: 1,
        borderRadius: 10,
        alignSelf: 'center',
        backgroundColor: '#ffffff'
    },
    buttonContainer: {
        paddingTop: 6,
        paddingBottom: 6,
        paddingRight: 10,
        paddingLeft: 10,
        borderRadius: 10,
        backgroundColor: colors.DARKER_GREY
    },
    sendLabel: {
        color: colors.BLACK,
        fontSize: 15
    }
};

