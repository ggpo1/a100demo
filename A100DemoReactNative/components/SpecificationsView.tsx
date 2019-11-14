import React from "react";
import {
    StyleSheet,
    Button,
    View,
    SafeAreaView,
    Text,
    Alert,
    ScrollView
} from 'react-native';

import AppState from '../data/State';

export default class SpecificationsView extends React.Component {

    
    render() {

        const styles = StyleSheet.create({
            SpecViewWrapper: {
                flex: 1,
                borderRadius: 10,
            },
        });

        return (
            <React.Fragment>
                <ScrollView style={styles.SpecViewWrapper}>
                    <Text>Реестр элементов</Text>
                </ScrollView>
            </React.Fragment>

        );
    }
}