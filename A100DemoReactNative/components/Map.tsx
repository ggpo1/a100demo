import React from "react";
import {
    StyleSheet,
    Button,
    View,
    SafeAreaView,
    Text,
    Alert,
    ImageBackground,
    Image,
    TouchableHighlight
} from 'react-native';
import EventEmitter from 'EventEmitter';

import Stillage from './MapComponents/Stillage';

import StillageColors from "../data/StillageColors";
import VikInfoView from "./VikInfoView";
import AppState from "../data/State";
import PhotoModal from "./PhotoModal";


export default class Map extends React.Component {

    state = {
        modalVisible: false,
        browsePhotoModalVisible: false,
    };

    constructor(props) {
        super(props);
        this.modalReducer = this.modalReducer.bind(this);
        this.photoModalReducer = this.photoModalReducer.bind(this);
        // this.openModalHandler = this.openModalHandler.bind(this);
        // this.closeModalHandler = this.closeModalHandler.bind(this);
    }


    getThisState = () => {
        return this.state;
    }

    modalReducer(visible) {
        let _visible = this.state.browsePhotoModalVisible;
        this.setState({
            modalVisible: visible,
            browsePhotoModalVisible: _visible,
        })
    }

    photoModalReducer(visible) {
        let _visible = this.state.modalVisible;
        this.setState({
            modalVisible: !_visible,
            browsePhotoModalVisible: visible,
        });
    }

    // openModalHandler() {
    //     // console.log(this.state);
    //     this.setState({ modalVisible: true })
    // }

    // closeModalHandler() {
    //     // alert("alert from emit");
    //     this.setState({ modalVisible: false })
    // }


    render() {
        // console.log("rerender main: " + this.state.modalVisible)
        let eEmitter = new EventEmitter();



        // 
        eEmitter.addListener('openModal', this.modalReducer);
        eEmitter.addListener('closeModal', this.modalReducer);
        eEmitter.addListener('openPhotoModal', this.photoModalReducer);
        eEmitter.addListener('closePhotoModal', this.photoModalReducer);
        // set in child component closePhotoModal
        // x.emit('event-name', { es6rules: true, mixinsAreLame: true });



        // this.state.modalVisible = AppState.State.isVikModal;
        let MapContent;
        let vikInfo;
        let photoModal;

        // let vikModal = <VikInfoView />;
        // console.log(this.state);
        if (this.state.modalVisible) {
            vikInfo = <VikInfoView eEmitter={eEmitter} visible={this.state.modalVisible} />;
        }

        if (this.state.browsePhotoModalVisible) {
            photoModal = <PhotoModal eEmitter={eEmitter} visible={this.state.browsePhotoModalVisible} />
        }

        let button =
            <TouchableHighlight style={{
                flex: 0.1,
                width: '100%',
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#2196f3',
                marginBottom: 5,
            }}
                onPress={() => {}} underlayColor={'transparent'} >
                <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'white' }} >ПОКАЗАТЬ СКЛАД ПОЛНОСТЬЮ</Text>
            </TouchableHighlight>;

        MapContent =

            <ImageBackground source={require('../node_modules/map.jpg')} style={{ flex: 1, borderRadius: 10, }} imageStyle={{ borderRadius: 10, }}>
                {/* {button} */}
                
                
                <Stillage eEmitter={eEmitter} modalVisible={this.state.modalVisible} row={1} cell={1} x={20} y={15} type={1} isVertical={false} color={StillageColors.BLUE} />
                <Stillage eEmitter={eEmitter} modalVisible={this.state.modalVisible} row={1} cell={2} x={147} y={15} type={6} isVertical={false} color={StillageColors.BLUE} />
                <Stillage eEmitter={eEmitter} modalVisible={this.state.modalVisible} row={1} cell={3} x={274} y={15} type={5} isVertical={false} color={StillageColors.BLUE} />
                
                <Stillage eEmitter={eEmitter} modalVisible={this.state.modalVisible} row={5} cell={2} x={197} y={65} type={5} isVertical={false} color={StillageColors.CORAL} />
                <Stillage eEmitter={eEmitter} modalVisible={this.state.modalVisible} row={5} cell={1} x={70} y={65} type={9} isVertical={false} color={StillageColors.CORAL} />
                <Stillage eEmitter={eEmitter} modalVisible={this.state.modalVisible} row={6} cell={4} x={274} y={98} type={7} isVertical={false} color={StillageColors.CORAL} />

                <Stillage eEmitter={eEmitter} modalVisible={this.state.modalVisible} row={6} cell={2} x={70} y={98} type={4} isVertical={false} color={StillageColors.CORAL} />
                <Stillage eEmitter={eEmitter} modalVisible={this.state.modalVisible} row={6} cell={3} x={197} y={98} type={10} isVertical={false} color={StillageColors.CORAL} />

                <Stillage eEmitter={eEmitter} modalVisible={this.state.modalVisible} row={5} cell={3} x={274} y={65} type={7} isVertical={false} color={StillageColors.CORAL} />
                
                <Stillage eEmitter={eEmitter} modalVisible={this.state.modalVisible} row={5} cell={4} x={401} y={65} type={7} isVertical={false} color={StillageColors.CORAL} />
                <Stillage eEmitter={eEmitter} modalVisible={this.state.modalVisible} row={6} cell={5} x={401} y={97} type={7} isVertical={false} color={StillageColors.CORAL} />
                <Stillage eEmitter={eEmitter} modalVisible={this.state.modalVisible} row={7} cell={2} x={197} y={140} type={7} isVertical={false} color={StillageColors.ORANGE} />
                
                <Stillage eEmitter={eEmitter} modalVisible={this.state.modalVisible} row={7} cell={1} x={70} y={140} type={12} isVertical={false} color={StillageColors.ORANGE} />
                <Stillage eEmitter={eEmitter} modalVisible={this.state.modalVisible} row={8} cell={2} x={70} y={172} type={7} isVertical={false} color={StillageColors.ORANGE} />

                <Stillage eEmitter={eEmitter} modalVisible={this.state.modalVisible} row={8} cell={3} x={197} y={172} type={7} isVertical={false} color={StillageColors.ORANGE} />

                <Stillage eEmitter={eEmitter} modalVisible={this.state.modalVisible} row={7} cell={3} x={324} y={140} type={7} isVertical={false} color={StillageColors.ORANGE} />
                <Stillage eEmitter={eEmitter} modalVisible={this.state.modalVisible} row={8} cell={4} x={324} y={172} type={7} isVertical={false} color={StillageColors.ORANGE} />

                <Stillage eEmitter={eEmitter} modalVisible={this.state.modalVisible} row={7} cell={5} x={451} y={140} type={5} isVertical={false} color={StillageColors.ORANGE} />
                <Stillage eEmitter={eEmitter} modalVisible={this.state.modalVisible} row={8} cell={6} x={451} y={172} type={5} isVertical={false} color={StillageColors.ORANGE} />

                <Stillage eEmitter={eEmitter} modalVisible={this.state.modalVisible} row={3} cell={2} x={10} y={169} type={7} isVertical={true} color={StillageColors.BLUE} />
                <Stillage eEmitter={eEmitter} modalVisible={this.state.modalVisible} row={3} cell={1} x={10} y={62} type={11} isVertical={true} color={StillageColors.BLUE} />
                              
                {vikInfo}
                {photoModal}
            </ImageBackground>




        return (

            // <MapView
            //         style={styles.map}
            //         initialRegion={{
            //             latitude: 37.78825,
            //             longitude: -122.4324,
            //             latitudeDelta: 0.0922,
            //             longitudeDelta: 0.0421,
            //         }}
            //     />
            MapContent





        );
    }
}

const styles = StyleSheet.create({
    mapWrapper: {
        position: 'relative',
        flex: 1,
        borderRadius: 10,
        overflow: 'visible'
    },
    map: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        position: 'absolute',
    },
    backgroundImage: {
        width: 320,
        height: 480,
    },
});
