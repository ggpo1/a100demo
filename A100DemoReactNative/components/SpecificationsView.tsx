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

export default class SpecificationsView extends React.Component {

    // Такой синтаксис гарантирует, что `this` привязан к handleClick.
    // Предупреждение: это экспериментальный синтаксис
    handleClick = () => {
        AppState.State.Name = 'Jack';
        console.log('значение this:', AppState.State);
    }
    render() {

        const styles = StyleSheet.create({
            SpecViewWrapper: {
                flex: 1,
                borderRadius: 10,
            },
        });



        return (
            <React.Fragment>
                <View style={styles.SpecViewWrapper}>
                    
                </View>
            </React.Fragment>

        );
    }
}