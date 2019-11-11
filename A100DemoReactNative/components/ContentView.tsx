import React from "react";
import {
    StyleSheet,
    Button,
    View,
    SafeAreaView,
    Text,
    Alert,
    Image,
    TouchableHighlight
} from 'react-native';
import Map from './Map';
import AppState from '../data/State';

export default class ContentView extends React.Component {

    // Такой синтаксис гарантирует, что `this` привязан к handleClick.
    // Предупреждение: это экспериментальный синтаксис
    handleClick = () => {
        AppState.State.Name = 'Jack';
        console.log('значение this:', AppState.State);
    }
    render() {


        // contentMode 0 - map
        AppState.State.contentMode = 0;
        let content;

        if (AppState.State.contentMode === 0) {
            content = <React.Fragment>
                <View style={styles.app}>
                    <View style={styles.header}>

                    </View>
                    <View style={styles.content}>
                        <React.Fragment>
                            <View style={styles.content}>
                                <View style={styles.menuBar}>
                                    <React.Fragment>
                                        <View style={styles.menuBarItemsWrapper}>
                                            <View style={{...{marginTop: 30}, ...styles.menuBarItem}}>
                                                <TouchableHighlight onPress={() => alert("123")} underlayColor={'transparent'} >
                                                    <Image source={require('../assets/Object.png')} style={{ width: 19, height: 14, marginLeft: '32%' }} />
                                                </TouchableHighlight>
                                            </View>
                                            <View style={{...styles.menuBarItem,...styles.menuBarItemMarginTop}}>
                                                <TouchableHighlight onPress={() => alert("123")} underlayColor={'transparent'} >
                                                    <Image source={require('../assets/Project.png')} style={{ width: 19, height: 17, marginLeft: '32%' }} />
                                                </TouchableHighlight>
                                            </View>
                                            <View style={{...styles.menuBarItem,...styles.menuBarItemMarginTop}}>
                                                <TouchableHighlight onPress={() => alert("123")} underlayColor={'transparent'} >
                                                    <Image source={require('../assets/Journal.png')} style={{ width: 19, height: 21, marginLeft: '32%' }} />
                                                </TouchableHighlight>
                                            </View>
                                            <View style={{...styles.menuBarItem,...styles.menuBarItemMarginTop}}>
                                                <TouchableHighlight onPress={() => alert("123")} underlayColor={'transparent'} >
                                                    <Image source={require('../assets/Map.png')} style={{ width: 19, height: 21, marginLeft: '32%' }} />
                                                </TouchableHighlight>
                                            </View>
                                            <View style={{...styles.menuBarItem,...styles.menuBarItemMarginTop}}>
                                                <TouchableHighlight onPress={() => alert("123")} underlayColor={'transparent'} >
                                                    <Image source={require('../assets/PTO.png')} style={{ width: 19, height: 21, marginLeft: '32%' }} />
                                                </TouchableHighlight>
                                            </View>
                                        </View>
                                    </React.Fragment>
                                </View>
                                <View style={styles.contentFooter}>
                                    <React.Fragment>
                                        <View style={styles.contentFooterWrapper}>
                                            <View style={styles.contentContent}>
                                                <Map />
                                            </View>
                                            <View style={styles.contentFooterFooter}></View>
                                        </View>
                                    </React.Fragment>
                                </View>
                            </View>
                        </React.Fragment>
                    </View>
                </View>
            </React.Fragment>;
        } else {

        }

        return (
            content
        );
    }
}

const styles = StyleSheet.create({
    app: {
        flex: 1,
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        backgroundColor: '#E5E5E5',
        alignItems: 'stretch',
        justifyContent: 'space-between',
    },
    header: {
        flex: 0.2,
        backgroundColor: '#E5E5E5'
    },
    content: {
        flex: 1,
        backgroundColor: '#E5E5E5',
        flexDirection: 'row',
    },
    menuBar: {
        flex: 0.07,
        borderTopRightRadius: 10,
        backgroundColor: 'white',
    },
    menuBarItemsWrapper: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    menuBarItem: {
        width: '100%',
        height: '3%'
    },
    menuBarItemMarginTop: {
        marginTop: 30,
    },
    contentFooter: {
        flex: 1,
        backgroundColor: '#E5E5E5',
        overflow: 'visible'
    },
    contentFooterWrapper: {
        flex: 1,
        width: '90%',
        height: '90%',
        marginLeft: '5%',
        backgroundColor: '#E5E5E5',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    contentContent: {
        flex: 1,
        backgroundColor: 'white',
        borderRadius: 10,
    },
    contentFooterFooter: {
        flex: 0.05,
    }
});