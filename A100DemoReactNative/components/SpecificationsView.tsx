import React from "react";
import {
    StyleSheet,
    Button,
    View,
    SafeAreaView,
    Text,
    Alert,
    Image,
    ScrollView
} from 'react-native';

import AppState from '../data/State';
import ISpecificationData from "../models/ISpecificationData";

type Props = { SpecData: Array<ISpecificationData> };
type State = { SpecData: Array<ISpecificationData> };
export default class SpecificationsView extends React.Component<Props, State> {

    constructor(props) {
        super(props);

        this.state = {
            SpecData: this.props.SpecData,
        }
    }

    render() {
        // let data = ;
        // console.log(specData);

        let specs = [];

        for (let i = 0; i < this.state.SpecData.length; i++) {
            specs.push(
                <View key={i} style={{...styles.speElemRow, ...{marginTop: (i !== 0 ? 5 : 0),}}}>
                    <Image style={{ width: 280, height: 280, }} source={this.state.SpecData[i].photo} />
                    <View style={styles.elemInfoRow}>
                        <View style={styles.infoCell}>
                            <View style={styles.infoCellItem}>
                                <View><Text>Элемент:</Text></View>
                                <View><Text>{this.state.SpecData[i].elementName}</Text></View>
                            </View>
                            <View style={styles.infoCellItem}>
                                <View><Text>Размер:</Text></View>
                                <View><Text>{this.state.SpecData[i].elementSize}</Text></View>
                            </View>
                        </View>
                        <View style={styles.infoCell}>
                            <View style={styles.infoCellItem}>
                                <View><Text>H:</Text></View>
                                <View><Text>{this.state.SpecData[i].H.toFixed(2).toString()}</Text></View>
                            </View>
                            <View style={styles.infoCellItem}>
                                <View><Text>B:</Text></View>
                                <View><Text>{this.state.SpecData[i].B.toFixed(2).toString()}</Text></View>
                            </View>
                            <View style={styles.infoCellItem}>
                                <View><Text>L (длина):</Text></View>
                                <View><Text>{this.state.SpecData[i].L.toFixed(2).toString()}</Text></View>
                            </View>
                        </View>
                    </View>
                </View>
            );
        }
        // {this.state.SpecData[0].H.toFixed(2).toString()}
        return (
            <React.Fragment>
                <ScrollView style={styles.SpecViewWrapper}>
                    <View style={styles.specElem}>
                        {specs}
                    </View>
                </ScrollView>
            </React.Fragment>

        );
    }
}

const styles = StyleSheet.create({
    SpecViewWrapper: {
        flex: 1,
        padding: 10,
        borderRadius: 10,

    },
    specElem: {
        flex: 1,

        padding: 5,
        backgroundColor: '#e6e6e6',
    },
    speElemRow: {
        flex: 1,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
    },
    elemInfoRow: {
        flex: 1,
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    infoCell: {
        flex: 0.5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    infoCellItem: {
        flex: 1,
        alignItems: 'center'
    }
});