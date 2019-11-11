import React from "react";
import {
    StyleSheet,
    Button,
    View,
    SafeAreaView,
    Text,
    Alert,
  } from 'react-native';

  import AppState from '../data/State';

export default class ButtonBox extends React.Component {

    // Такой синтаксис гарантирует, что `this` привязан к handleClick.
    // Предупреждение: это экспериментальный синтаксис
    handleClick = () => {
        AppState.State.Name = 'Jack';
        console.log('значение this:', AppState.State);
    }
    render() {
        return (
            <View>
                <Button
                    title="Press me"
                    onPress={this.handleClick}
                />
            </View>
        );
    }
}