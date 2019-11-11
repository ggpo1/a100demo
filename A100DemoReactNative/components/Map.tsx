import React from "react";
import {
    StyleSheet,
    Button,
    View,
    SafeAreaView,
    Text,
    Alert,
    ImageBackground,
    Image
} from 'react-native';

import Stillage from './MapComponents/Stillage';

import StillageColors from "../data/StillageColors";


export default class Map extends React.Component {

    getThisState = () => {
        return this.state;
    }

    render() {
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

            
            <ImageBackground source={require('../assets/map.jpg')} style={{ flex: 1, borderRadius: 10 }} imageStyle={{borderRadius: 10}}>
                <Stillage row={1} cell={1} x={100} y={50} type={1} isVertical={false} color={StillageColors.BLUE} />
                <Stillage row={1} cell={2} x={257} y={50} type={6} isVertical={false} color={StillageColors.BLUE} />
                <Stillage row={1} cell={3} x={414} y={50} type={5} isVertical={false} color={StillageColors.BLUE} />

                <Stillage row={5} cell={1} x={150} y={150} type={2} isVertical={false} color={StillageColors.CORAL} />
                <Stillage row={5} cell={2} x={307} y={150} type={5} isVertical={false} color={StillageColors.CORAL} />

                <Stillage row={6} cell={2} x={150} y={197} type={4} isVertical={false} color={StillageColors.CORAL} />
                <Stillage row={6} cell={3} x={307} y={197} type={5} isVertical={false} color={StillageColors.CORAL} />

                <Stillage row={5} cell={3} x={440} y={150} type={2} isVertical={false} color={StillageColors.CORAL} />
                <Stillage row={6} cell={4} x={440} y={197} type={1} isVertical={false} color={StillageColors.CORAL} />
                
                <Stillage row={5} cell={4} x={620} y={150} type={2} isVertical={false} color={StillageColors.CORAL} />
                <Stillage row={6} cell={5} x={620} y={197} type={1} isVertical={false} color={StillageColors.CORAL} />

                <Stillage row={3} cell={1} x={50} y={100} type={2} isVertical={true} color={StillageColors.BLUE} /> 
                <Stillage row={3} cell={2} x={50} y={265} type={7} isVertical={true} color={StillageColors.BLUE} />
            </ImageBackground>


        );
    }
}