/**
 * Created by Murkrow on 5/26/2017.
 */

import {ListView, View} from "react-native";
import React, {Component, PropTypes} from "react";
import PurchaseItem from "./PurchaseItem";

export default class ListPurchase extends Component {

    static propTypes = {
        items: PropTypes.array.isRequired
    };

    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(this.props.items),
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) => renderRow(rowData)}
                />
            </View>
        );
    }
}

const renderRow = (rowData) => {
    return (<PurchaseItem data={rowData}/>)
};

const styles = {
    container: {
    }
};