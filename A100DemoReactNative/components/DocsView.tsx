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
    TouchableHighlight,
    // PermissionsAndroid
} from 'react-native';

import AppState from '../data/State';
import IChtoData from "../models/IChtoData";
import Colors from "../data/Colors";
import IDocData from "../models/IDocData";

// import Pdf from 'react-native-pdf';
import { WebView } from 'react-native-webview';
// import HTMLView from 'react-native-htmlview';
// import Pdf from 'react-native-pdf';
// import Video from 'react-native-video';

// import Obrushenie from '../assets/video1.mp4';
// import RNFetchBlob from 'rn-fetch-blob';
// const { config, fs } = RNFetchBlob;

// import Video from 'react-native-video';
//Import React Native Video to play video
import MediaControls, { PLAYER_STATES } from 'react-native-media-controls';
import * as Permissions from 'expo-permissions';

import { Video } from 'expo-av';

// import Video from 'react-native-af-video-player'


export async function requestLocationPermission() {
    try {
        const granted = await Permissions.askAsync(Permissions.CAMERA);
        const storage = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    } catch (err) {
        console.warn(err)
    }
}


type Props = { DocsData: Array<IDocData> };
type State = { Source: Array<IDocData>, browseModal: boolean, url: string };
export default class DocsView extends React.Component<Props, State> {
    videoPlayer;
    constructor(props) {
        super(props);

        this.state = {
            Source: this.props.DocsData,
            browseModal: false,
            url: '',
        }
    }



    async componentWillMount() {
        await requestLocationPermission()
    }

    render() {
        const resourceType = 'base64';

        // var content = await rnFs.readFile(Otchet,"utf-8");

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
                            this.setState({ ...this.state, ...{ browseModal: true, url: element.file } })
                        }}>
                        <Text style={{ fontSize: 11, marginLeft: 5 }}>{element.fileName}</Text>
                    </TouchableHighlight >
                    <View style={styles.headerCell}><Text style={{ fontSize: 11, }}>{element.fileSize}</Text></View>
                </View>

            );
            i++;
        });



        // const source = require('../assets/player.html');
        // console.log(source)
        // const url = ''
        // const source = {uri:'file:///sdcard/test.pdf'};
        // const source = require("../assets/otchet.html").default;
        // let _html = '' + Otchet
        // var fs = require('fs'); //Filesystem
        // console.log(Otchet);    
        // console.log(typeof(Otchet));
        // var content = fs.readFileSync(Otchet, "utf-8");
        // const content = require('file:///storage/emulated/0/A100Demo/index.html');
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

                    {/* <Image source={require('../assets/Close.png')} style={{ width: 20, height: 20, marginTop: 5, marginLeft: 5 }} /> */}

                    {/* <WebView source={{ uri: this.state.url }} /> */}
                    {/* <WebView source={{ html: '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta http-equiv="X-UA-Compatible" content="ie=edge"><title>video</title></head><body><video width="100%" height="100%" fullscreen autoplay controls><source src="file:///storage/emulated/0/play/video1.mp4"></video></body></html>' }} /> */}
                    {/* <WebView source={{ html: source }}/> */}
                    {/* <WebView source={{ uri: 'file:///storage/emulated/0/play/videoTest.html' }}
                        originWhitelist={['*']} /> */}

                    {/* <WebView
                        originWhitelist={['*']}
                        source={source}
                    /> */}

                    {/* <WebView style={{ height: 200 }} source={{ html: "<video style=' height:180;width:500;' controls src='https://gcs-vimeo.akamaized.net/exp=1574084635~acl=%2A%2F652333414.mp4%2A~hmac=9f6fee2bf57bd7f9240f64c46afd30726db6f8bb4e9fd5d9f15bbd80c98b96b5/vimeo-prod-skyfire-std-us/01/3967/7/194837908/652333414.mp4'></video>" }} allowsInlineMediaPlayback={true} mediaPlaybackRequiresUserAction={true} /> */}
                    {/* <Video url={url} /> */}





                    <TouchableHighlight
                        style={{
                            flex: 1,
                            backgroundColor: 'black',
                        }}
                        onPress={() => {
                            this.setState({ ...this.state, ...{ browseModal: false } })
                        }}>
                        <Video
                            source={this.state.url}
                            rate={1.0}
                            volume={1.0}
                            isMuted={false}
                            resizeMode="cover"
                            shouldPlay
                            isLooping
                            style={{ width: '100%', height: '100%' }}
                        />
                    </TouchableHighlight>
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