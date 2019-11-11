import React from "react";
import {
    StyleSheet,
    Button,
    View,
    SafeAreaView,
    Text,
    Alert,

} from 'react-native';

import MapView from 'react-native-maps';
import Colors from "../../data/Colors";

type MyProps = { color: Colors };
type MyState = {};
export default class Circle extends React.Component<MyProps, MyState> {

    render() {
        const styles = StyleSheet.create({
            circle: {
                width: 45,
                height: 45,
                borderRadius: 100 / 2,
                borderWidth: 2,
                borderStyle: 'solid',
                borderColor: this.props.color
            }
        });
        return (
            <View style={styles.circle} />
        );
    }
}