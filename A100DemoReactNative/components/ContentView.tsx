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
import MapCanvas from './MapCanvas/Map';
import AppState from '../data/State';
import SpecificationsView from "./SpecificationsView";
import specData from "../data/SpecificationsData";
import VikTableView from "./VikTableView";
import vikData from "../data/VikData";
import ChtoView from "./ChtoView";
import ChtoData from "../data/ChtoData";
import DocsView from "./DocsView";
import DocsData from "../data/DocsData";
import PhotoGallery from "./PhotoGallery";
import Images from "../data/Photos";

export default class ContentView extends React.Component {

    state = {
        contentMode: 0,
    };

    constructor(props) {
        super(props);

        this.state = {
            contentMode: 1,
        }

        this.setContentMode = this.setContentMode.bind(this);
    }

    getThisState = () => {
        return this.state;
    }

    setContentMode(mode) {
        this.setState({
            contentMode: mode,
        })
    }

    // Такой синтаксис гарантирует, что `this` привязан к handleClick.
    // Предупреждение: это экспериментальный синтаксис
    handleClick = () => {
        AppState.State.Name = 'Jack';
        console.log('значение this:', AppState.State);
    }

    render() {

        // contentMode 0 - map
        let content;
        let contentContent;
        let title;

        if (this.state.contentMode === 0) {
            contentContent = <Map />;
            title = <Text>Схема</Text>;
        } else if (this.state.contentMode === 1) {
            title = <Text>Главная</Text>;
            contentContent = <SpecificationsView SpecData={specData} />;
        } else if (this.state.contentMode === -1) {
            title = <Text>Dev Mode</Text>;
            contentContent = <MapCanvas />
        } else if (this.state.contentMode === 2) {
            title = <Text>Ведомость дефектов</Text>;
            contentContent = <VikTableView VikData={vikData} />;
        } else if (this.state.contentMode === 3) {
            title = <Text>Еженедельный осмотр</Text>;
            contentContent = <ChtoView ChtoData={ChtoData} />;
        } else if (this.state.contentMode === 4) {
            title = <Text>Мои документы</Text>;
            contentContent = <DocsView DocsData={DocsData} />;
        } else if (this.state.contentMode == 5) {
            title = <Text>Фотогалерея</Text>;
            contentContent = <PhotoGallery bigCollection={true} photos={[
                Images.first,
                Images.second,
                Images.third,
                Images.vik1,
                Images.vik2,
                Images.vik3,
                Images.vik4,
                Images.vik5,
                Images.vik6,
            ]} eEmitter={null} />
        }

        content = <React.Fragment>
            <View style={styles.app}>
                <View style={styles.header}>
                    <View style={styles.headerLeft}>
                        <TouchableHighlight onPress={() => this.setContentMode(-1)} underlayColor={'transparent'} >
                            <Image source={require('../assets/Logo.png')} style={{ width: 35, height: 35, marginLeft: '6%', marginTop: '5%' }} />
                        </TouchableHighlight>
                        <Text style={{
                            color: '#4F4F4F',
                            marginLeft: '1.5%',
                            marginTop: '6%',
                            fontWeight: 'bold',
                        }}>A100</Text>
                        <Text style={{
                            marginTop: '6%',
                            marginLeft: '6%',
                            color: '#6B737C',
                            fontFamily: 'Roboto',
                            fontSize: 24,
                        }}>{title}</Text>
                    </View>
                </View>
                <View style={styles.content}>
                    <React.Fragment>
                        <View style={styles.content}>
                            <View style={styles.menuBar}>
                                <React.Fragment>
                                    <View style={styles.menuBarItemsWrapper}>
                                        <View style={{ ...{ marginTop: 30 }, ...styles.menuBarItem }}>
                                            <TouchableHighlight onPress={() => this.setContentMode(1)} underlayColor={'transparent'} >
                                                <Image source={require('../assets/Object.png')} style={{ width: 19, height: 14, marginLeft: '32%' }} />
                                            </TouchableHighlight>
                                        </View>
                                        <View style={{ ...styles.menuBarItem, ...styles.menuBarItemMarginTop }}>
                                            <TouchableHighlight onPress={() => this.setContentMode(2)} underlayColor={'transparent'} >
                                                <Image source={require('../assets/Journal.png')} style={{ width: 19, height: 21, marginLeft: '32%' }} />
                                            </TouchableHighlight>
                                        </View>
                                        <View style={{ ...styles.menuBarItem, ...styles.menuBarItemMarginTop }}>
                                            <TouchableHighlight onPress={() => this.setContentMode(0)} underlayColor={'transparent'} >
                                                <Image source={require('../assets/Map.png')} style={{ width: 19, height: 21, marginLeft: '32%' }} />
                                            </TouchableHighlight>
                                        </View>
                                        <View style={{ ...styles.menuBarItem, ...styles.menuBarItemMarginTop }}>
                                            <TouchableHighlight onPress={() => this.setContentMode(3)} underlayColor={'transparent'} >
                                                <Image source={require('../assets/CHTO.png')} style={{ width: 19, height: 21, marginLeft: '32%' }} />
                                            </TouchableHighlight>
                                        </View>
                                        <View style={{ ...styles.menuBarItem, ...styles.menuBarItemMarginTop }}>
                                            <TouchableHighlight onPress={() => this.setContentMode(5)} underlayColor={'transparent'} >
                                                <Image source={require('../assets/Gallery.png')} style={{ width: 19, height: 21, marginLeft: '32%' }} />
                                            </TouchableHighlight>
                                        </View>
                                        <View style={{ ...styles.menuBarItem, ...styles.menuBarItemMarginTop }}>
                                            <TouchableHighlight onPress={() => this.setContentMode(4)} underlayColor={'transparent'} >
                                                <Image source={require('../assets/Docs.png')} style={{ width: 19, height: 21, marginLeft: '32%' }} />
                                            </TouchableHighlight>
                                        </View>
                                    </View>
                                </React.Fragment>
                            </View>
                            <View style={styles.contentFooter}>
                                <React.Fragment>
                                    <View style={styles.contentFooterWrapper}>
                                        <View style={styles.contentContent}>
                                            {contentContent}
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
        backgroundColor: '#E5E5E5',
        flexDirection: 'row',
        alignItems: 'center',
        // paddingTop: '5%',
    },
    headerLeft: {
        flex: 0.3,
        width: '15%',
        // backgroundColor: 'red',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center'
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
        // padding: 5,
    },
    contentFooterFooter: {
        flex: 0.05,
    }
});