import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';

import EventEmitter from 'EventEmitter';

type Props = { visible: boolean, eEmitter: EventEmitter };
type State = { eEmitter: EventEmitter, modalVisible: boolean };
export default class PhotoModal extends React.Component<Props, State> {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: this.props.visible,
            eEmitter: this.props.eEmitter,
        }
        this.onPressHandle = this.onPressHandle.bind(this);
    }

    onPressHandle() {
        // this.forceUpdate();
        // this.setState({ modalVisible: visible });
        this.state.eEmitter.emit('closePhotoModal', false);
        // this.props.visible = visible;
    }

    render() {
        

        if (!this.state.modalVisible) return null;

        return (
            <View style={styles.wrapper}>
                <TouchableHighlight style={{ flex: 1, borderRadius: 10, }} onPress={this.onPressHandle} underlayColor={'transparent'} >
                    <Image source={require('../node_modules/first.jpg')} style={{ borderRadius: 10, width: '100%', height: 300,  }} />
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        width: '100%',
        height: '100%',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        shadowOpacity: 0.75,
        shadowRadius: 10,
        shadowColor: 'black',
        shadowOffset: { height: 10, width: 10 },
        backgroundColor: 'white'
    }
});