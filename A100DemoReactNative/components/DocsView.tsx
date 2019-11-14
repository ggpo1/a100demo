import React from "react";
import {
    StyleSheet,
    Button,
    View,
    SafeAreaView,
    Text,
    Alert,
    Modal,
    Image,
    TouchableHighlight
} from 'react-native';

import AppState from '../data/State';
import IChtoData from "../models/IChtoData";
import Colors from "../data/Colors";
import IDocData from "../models/IDocData";
// import Pdf from 'react-native-pdf';
import { WebView } from 'react-native-webview';
import HTMLView from 'react-native-htmlview';


import Pdf from 'react-native-pdf';


type Props = { DocsData: Array<IDocData> };
type State = { Source: Array<IDocData>, browseModal: boolean, url: string };
export default class DocsView extends React.Component<Props, State> {

    constructor(props) {
        super(props);

        this.state = {
            Source: this.props.DocsData,
            browseModal: false,
            url: ''
        }
    }

    render() {
        const resourceType = 'base64';


        let headers = [
            'Имя файла',
            'Размер',
        ]

        let _headers = [];

        let i = 0;
        headers.forEach(element => {
            _headers.push(
                <View style={styles.headerCell} key={'header_' + i}><Text style={{ fontSize: 13, fontWeight: 'bold' }}>{element}</Text></View>
            );
            i++;
        });

        i = 0;
        let _contentRows = [];
        this.state.Source.forEach(element => {
            _contentRows.push(

                <View key={'contentRow' + i} style={{ ...styles.contentRow, ...{ backgroundColor: 'white' } }}>
                    <TouchableHighlight
                        style={styles.cellCell}
                        underlayColor={'transparent'}
                        onPress={() => {
                            this.setState({ ...this.state, ...{ browseModal: true, url: element.url } })
                        }}>
                        <Text style={{ fontSize: 11, marginLeft: 5 }}>{element.fileName}</Text>
                    </TouchableHighlight >
                    <View style={styles.headerCell}><Text style={{ fontSize: 11, }}>{element.fileSize}</Text></View>
                </View>

            );
            i++;
        });

        // const source = {uri:'file:///sdcard/test.pdf'};
        // const source = require("../assets/otchet.html").default;

        return (
            <React.Fragment>
                <View style={styles.VikTableWrapper}>
                    <View style={styles.vikTable}>
                        <View style={styles.vikTableHeader}>
                            {_headers}
                        </View>
                        <View style={styles.vikTableContent}>
                            {_contentRows}
                        </View>
                    </View>
                </View>
                <Modal visible={this.state.browseModal} transparent={true}>
                    <TouchableHighlight
                        style={{
                            flex: 0.08,
                            backgroundColor: 'black',
                        }}
                        onPress={() => {
                            this.setState({ ...this.state, ...{ browseModal: false } })
                        }}>
                        <Image source={require('../assets/Close.png')} style={{ width: 20, height: 20, marginTop: 5, marginLeft: 5 }} />
                    </TouchableHighlight>
                    <WebView source={{ uri: this.state.url }} />
                    {/* <WebView source={require('../assets/vik1.jpg')} /> */}

                    


                </Modal>
            </React.Fragment>

        );
    }
}

const styles = StyleSheet.create({
    VikTableWrapper: {
        flex: 1,
        width: '100%',
        height: '100%',
        padding: 10,
        borderRadius: 10,
    },
    vikTable: {
        borderRadius: 5,
        flex: 1,
        width: '100%',
        height: '100%',
        borderColor: '#dfdfdf',
        borderWidth: 1,
        // backgroundColor: 'coral'
    },
    vikTableHeader: {
        flex: 0.1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderColor: '#dfdfdf',
        borderWidth: 1,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
    },
    vikTableContent: {
        flex: 1,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        backgroundColor: '#f4f4f4'
    },
    headerCell: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderLeftColor: '#dfdfdf',
        borderLeftWidth: 1,
        // backgroundColor: 'yellow',

    },
    cellCell: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        borderLeftColor: '#dfdfdf',
        borderLeftWidth: 1,
        // backgroundColor: 'yellow',

    },
    contentRow: {
        flex: 0.15,
        flexDirection: 'row',
        borderBottomColor: '#dfdfdf',
        borderBottomWidth: 1,
    },
});