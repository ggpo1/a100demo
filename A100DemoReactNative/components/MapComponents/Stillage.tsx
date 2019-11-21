import React from "react";
import {
    StyleSheet,
    Button,
    View,
    SafeAreaView,
    Text,
    Alert,

} from 'react-native';

import StillageColors from "../../data/StillageColors";
import Circle from "./Circle";
import Colors from "../../data/Colors";
import EventEmitter from 'EventEmitter';
import vikData from "../../data/VikData";

type MyProps = { eEmitter: EventEmitter, modalVisible: boolean, row: number, cell: number, x: number, y: number, type: number, isVertical: boolean, color: StillageColors, };
type MyState = {};
export default class Stillage extends React.Component<MyProps, MyState> {

    state = {
        modalVisible: null,
        row: null,
        cell: null,
        x: null,
        y: null,
        type: null,
        isVertical: null,
        color: null,
        eEmitter: null,
    }

    constructor(props) {
        super(props);

        this.state = {
            modalVisible: this.props.modalVisible,
            row: this.props.row,
            cell: this.props.cell,
            x: this.props.x,
            y: this.props.y,
            type: this.props.type,
            isVertical: this.props.isVertical,
            color: this.props.color,
            eEmitter: this.props.eEmitter,
        }
    }

    vikClickByType = () => {
        alert(this.props.type);
    }



    render() {
        const styles = StyleSheet.create({
            stillage: {
                position: 'absolute',
                marginTop: this.props.y,
                marginLeft: this.props.x,
                width: this.props.isVertical ? 35 : 130,
                height: this.props.isVertical ? 110 : 35,
                backgroundColor: 'white',
                borderWidth: 3,
                borderStyle: 'solid',
                borderColor: this.props.color
            },
            stillageVikWrapper: {
                flex: 1,
                flexDirection: this.props.isVertical ? 'column' : 'row',
                justifyContent: 'space-between',
                width: '100%',
                height: '100%',
            },
            stillageSmall: {
                position: 'absolute',
                marginTop: this.props.y,
                marginLeft: this.props.x,
                width: this.props.isVertical ? 35 : 80,
                height: this.props.isVertical ? 80 : 35,
                backgroundColor: 'white',
                borderWidth: 3,
                borderStyle: 'solid',
                borderColor: this.props.color
            },
            Text: {
                fontSize: 9,
            }
        });

        let stillage;
        let viks = vikData;
        // types
        // 1 - horizontal and vetical with 2 viks red->green
        // 2 - only vertical width 1 red vik 
        // 3 - only hor width 1 green vik
        // 4 - horizontal and vertical with 2 viks green-green

        if (this.props.type === 1) {
            stillage = <View style={styles.stillage}>
                <View style={styles.stillageVikWrapper}>
                    <Circle eEmitter={this.state.eEmitter} modalVisible={this.state.modalVisible} vikData={viks[0]} color={Colors.Red} />
                    <View style={{ height: '100%', alignItems: 'center' }}>
                        <Text style={styles.Text}>Р{this.props.row}</Text>
                        <Text style={styles.Text}>М{this.props.cell}</Text>
                    </View>
                    <Circle eEmitter={this.state.eEmitter} modalVisible={this.state.modalVisible} vikData={viks[2]} color={Colors.Green} />
                </View>
            </View>;
        } else if (this.props.type === 2) {
            stillage = <View style={styles.stillage}>
                <View style={styles.stillageVikWrapper}>
                    <Circle eEmitter={this.state.eEmitter} modalVisible={this.state.modalVisible} vikData={viks[1]} color={Colors.Red} />
                    <View style={{ height: '100%', alignItems: 'center' }}>
                        <Text style={styles.Text}>Р{this.props.row}</Text>
                        <Text style={styles.Text}>М{this.props.cell}</Text>
                    </View>
                    <Circle eEmitter={this.state.eEmitter} modalVisible={this.state.modalVisible} vikData={viks[0]} color={Colors.TRANS} />
                </View>
            </View>;
        } else if (this.props.type === 3) {
            stillage = <View style={styles.stillage}>
                <View style={styles.stillageVikWrapper}>
                    <Circle eEmitter={this.state.eEmitter} modalVisible={this.state.modalVisible} vikData={viks[3]} color={Colors.TRANS} />
                    <View style={{ height: '100%', alignItems: 'center' }}>
                        <Text style={styles.Text}>Р{this.props.row}</Text>
                        <Text style={styles.Text}>М{this.props.cell}</Text>
                    </View>
                    <Circle eEmitter={this.state.eEmitter} modalVisible={this.state.modalVisible} vikData={viks[3]} color={Colors.Green} />
                </View>
            </View>;
        } else if (this.props.type === 4) {
            stillage = <View style={styles.stillage}>
                <View style={styles.stillageVikWrapper}>
                    <Circle eEmitter={this.state.eEmitter} modalVisible={this.state.modalVisible} vikData={viks[5]} color={Colors.Green} />
                    <View style={{ height: '100%', alignItems: 'center' }}>
                        <Text style={styles.Text}>Р{this.props.row}</Text>
                        <Text style={styles.Text}>М{this.props.cell}</Text>
                    </View>
                    <Circle eEmitter={this.state.eEmitter} modalVisible={this.state.modalVisible} vikData={viks[6]} color={Colors.Green} />
                </View>
            </View>;
        } else if (this.props.type === 5) {
            stillage = <View style={styles.stillageSmall}>
                <View style={styles.stillageVikWrapper}>
                    <Circle eEmitter={this.state.eEmitter} modalVisible={this.state.modalVisible} vikData={viks[0]} color={Colors.TRANS} />
                    <View style={{ height: '100%', alignItems: 'center' }}>
                        <Text style={styles.Text}>Р{this.props.row}</Text>
                        <Text style={styles.Text}>М{this.props.cell}</Text>
                    </View>
                    <Circle eEmitter={this.state.eEmitter} modalVisible={this.state.modalVisible} vikData={viks[7]} color={Colors.Yellow} />
                </View>
            </View>;
        } else if (this.props.type === 6) {
            stillage = <View style={styles.stillage}>
                <View style={styles.stillageVikWrapper}>
                    <Circle eEmitter={this.state.eEmitter} modalVisible={this.state.modalVisible} vikData={viks[3]} color={Colors.Green} />
                    <View style={{ height: '100%', alignItems: 'center' }}>
                        <Text style={styles.Text}>Р{this.props.row}</Text>
                        <Text style={styles.Text}>М{this.props.cell}</Text>
                    </View>
                    <Circle eEmitter={this.state.eEmitter} modalVisible={this.state.modalVisible} vikData={viks[3]} color={Colors.TRANS} />
                </View>
            </View>;
        } else if (this.props.type === 7) {
            stillage = <View style={styles.stillage}>
                <View style={styles.stillageVikWrapper}>
                    <Circle eEmitter={this.state.eEmitter} modalVisible={this.state.modalVisible} vikData={viks[0]} color={Colors.TRANS} />
                    <View style={{ height: '100%', alignItems: 'center' }}>
                        <Text style={styles.Text}>Р{this.props.row}</Text>
                        <Text style={styles.Text}>М{this.props.cell}</Text>
                    </View>
                    <Circle eEmitter={this.state.eEmitter} modalVisible={this.state.modalVisible} vikData={viks[0]} color={Colors.TRANS} />
                </View>
            </View>;
        } else if (this.props.type === 8) {
            stillage = <View style={styles.stillage}>
                <View style={styles.stillageVikWrapper}>
                    <Circle eEmitter={this.state.eEmitter} modalVisible={this.state.modalVisible} vikData={viks[4]} color={Colors.Red} />
                    <View style={{ height: '100%', alignItems: 'center' }}>
                        <Text style={styles.Text}>Р{this.props.row}</Text>
                        <Text style={styles.Text}>М{this.props.cell}</Text>
                    </View>
                    <Circle eEmitter={this.state.eEmitter} modalVisible={this.state.modalVisible} vikData={viks[0]} color={Colors.TRANS} />
                </View>
            </View>;
        } else if (this.props.type === 9) {
            stillage = <View style={{
                position: 'absolute',
                marginTop: this.props.y,
                marginLeft: this.props.x,
                width: this.props.isVertical ? 35 : 130,
                height: this.props.isVertical ? 110 : 35,
                backgroundColor: 'white',
                borderWidth: 3,
                borderStyle: 'solid',
                borderLeftColor: this.props.color,
                borderTopColor: this.props.color,
                borderBottomColor: this.props.color,
                borderRightColor: 'red',
            }}>
                <View style={styles.stillageVikWrapper}>
                    <Circle eEmitter={this.state.eEmitter} modalVisible={this.state.modalVisible} vikData={viks[4]} color={Colors.Red} />
                    <View style={{ height: '100%', alignItems: 'center' }}>
                        <Text style={styles.Text}>Р{this.props.row}</Text>
                        <Text style={styles.Text}>М{this.props.cell}</Text>
                    </View>
                    <Circle eEmitter={this.state.eEmitter} modalVisible={this.state.modalVisible} vikData={viks[0]} color={Colors.TRANS} />
                </View>
            </View>;
        } else if (this.props.type === 10) {
            stillage = <View style={{
                position: 'absolute',
                marginTop: this.props.y,
                marginLeft: this.props.x,
                width: this.props.isVertical ? 35 : 80,
                height: this.props.isVertical ? 80 : 35,
                backgroundColor: 'white',
                borderWidth: 3,
                borderStyle: 'solid',
                borderLeftColor: this.props.color,
                borderTopColor: this.props.color,
                borderBottomColor: this.props.color,
                borderRightColor: 'red',
            }}>
                <View style={styles.stillageVikWrapper}>
                    <Circle eEmitter={this.state.eEmitter} modalVisible={this.state.modalVisible} vikData={viks[0]} color={Colors.TRANS} />
                    <View style={{ height: '100%', alignItems: 'center' }}>
                        <Text style={styles.Text}>Р{this.props.row}</Text>
                        <Text style={styles.Text}>М{this.props.cell}</Text>
                    </View>
                    <Circle eEmitter={this.state.eEmitter} modalVisible={this.state.modalVisible} vikData={viks[0]} color={Colors.Yellow} />
                </View>
            </View>;
        } else if (this.props.type === 11) {
            stillage = <View style={{
                position: 'absolute',
                marginTop: this.props.y,
                marginLeft: this.props.x,
                width: this.props.isVertical ? 35 : 130,
                height: this.props.isVertical ? 110 : 35,
                backgroundColor: 'white',
                borderWidth: 3,
                borderStyle: 'solid',
                borderLeftColor: this.props.color,
                borderTopColor: this.props.color,
                borderRightColor: this.props.color,
                borderBottomColor: 'red',
            }}>
                <View style={styles.stillageVikWrapper}>
                    <Circle eEmitter={this.state.eEmitter} modalVisible={this.state.modalVisible} vikData={viks[1]} color={Colors.Red} />
                    <View style={{ height: '100%', alignItems: 'center' }}>
                        <Text style={styles.Text}>Р{this.props.row}</Text>
                        <Text style={styles.Text}>М{this.props.cell}</Text>
                    </View>
                    <Circle eEmitter={this.state.eEmitter} modalVisible={this.state.modalVisible} vikData={viks[0]} color={Colors.TRANS} />
                </View>
            </View>;
        } else if (this.props.type === 12) {
            stillage = <View style={{
                position: 'absolute',
                marginTop: this.props.y,
                marginLeft: this.props.x,
                width: this.props.isVertical ? 35 : 130,
                height: this.props.isVertical ? 110 : 35,
                backgroundColor: 'white',
                borderWidth: 3,
                borderStyle: 'solid',
                borderLeftColor: this.props.color,
                borderTopColor: this.props.color,
                borderBottomColor: this.props.color,
                borderRightColor: 'red',
            }}>
                <View style={styles.stillageVikWrapper}>
                    <Circle eEmitter={this.state.eEmitter} modalVisible={this.state.modalVisible} vikData={viks[0]} color={Colors.TRANS} />
                    <View style={{ height: '100%', alignItems: 'center' }}>
                        <Text style={styles.Text}>Р{this.props.row}</Text>
                        <Text style={styles.Text}>М{this.props.cell}</Text>
                    </View>
                    <Circle eEmitter={this.state.eEmitter} modalVisible={this.state.modalVisible} vikData={viks[0]} color={Colors.TRANS} />
                </View>
            </View>;
        }
        return (
            stillage
        );
    }
}