import React from "react";
import {
    StyleSheet,
    View,
    TouchableHighlight
} from 'react-native';
import Colors from "../../data/Colors";
import IVikData from "../../models/IVikData";
import AppState from "../../data/State";
import EventEmitter from 'EventEmitter';

type MyProps = { eEmitter: EventEmitter, modalVisible: boolean, vikData: IVikData, color: Colors };
export default class Circle extends React.Component<MyProps> {

    state = {
        modalVisible: null,
        vikData: null,
        color: null,
        eEmitter: null,
    }

    constructor(props) {
        super(props);

        this.state = { 
            modalVisible: this.props.modalVisible,
            vikData: this.props.vikData,
            color: this.props.color,
            eEmitter: this.props.eEmitter,
        }
    }

    onPressHandle() {
        this.state.eEmitter.emit('openModal', true);
        AppState.State.vikInfo = {vikData: this.state.vikData, color: this.state.color}
    }

    render() {
        // alert(this.state.modalVisible)
        const styles = StyleSheet.create({
            circle: {
                width: 30,
                height: 30,
                borderRadius: 100 / 2,
                borderWidth: 2,
                borderStyle: 'solid',
                borderColor: this.props.color
            }
        });
        return (
            <TouchableHighlight onPress={() => this.onPressHandle()} underlayColor={'transparent'} >
                <View style={styles.circle} />
            </TouchableHighlight>
        );
    }
}