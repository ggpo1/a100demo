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

type MyProps = { row: number, cell: number, x: number, y: number, type: number, isVertical: boolean, color: StillageColors, };
type MyState = {};
export default class Stillage extends React.Component<MyProps, MyState> {

    vikClickByType = () => {
        alert(this.props.type);
    }

    render() {
        const styles = StyleSheet.create({
            stillage: {
                position: 'absolute',
                marginTop: this.props.y,
                marginLeft: this.props.x,
                width: this.props.isVertical ? 50 : 160,
                height: this.props.isVertical ? 160 : 50,
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
                width: this.props.isVertical ? 50 : 110,
                height: this.props.isVertical ? 110 : 50,
                backgroundColor: 'white',
                borderWidth: 3,
                borderStyle: 'solid',
                borderColor: this.props.color
            },
        });

        let stillage;

        // types
        // 1 - horizontal and vetical with 2 viks red->green
        // 2 - only vertical width 1 red vik 
        // 3 - only hor width 1 green vik
        // 4 - horizontal and vertical with 2 viks green-green

        if (this.props.type === 1) {
            stillage = <View style={styles.stillage}>
                <View style={styles.stillageVikWrapper}>
                    <Circle color={Colors.Red} />
                    <View style={{ height: '100%', alignItems: 'center' }}>
                        <Text>Р{this.props.row}</Text>
                        <Text>М{this.props.cell}</Text>
                    </View>
                    <Circle color={Colors.Green} />
                </View>
            </View>;
        } else if (this.props.type === 2) {
            stillage = <View style={styles.stillage}>
                <View style={styles.stillageVikWrapper}>
                    <Circle color={Colors.Red} />
                    <View style={{ height: '100%', alignItems: 'center' }}>
                        <Text>Р{this.props.row}</Text>
                        <Text>М{this.props.cell}</Text>
                    </View>
                    <Circle color={Colors.TRANS} />
                </View>
            </View>;
        } else if (this.props.type === 3) {
            stillage = <View style={styles.stillage}>
                <View style={styles.stillageVikWrapper}>
                    <Circle color={Colors.TRANS} />
                    <View style={{ height: '100%', alignItems: 'center' }}>
                        <Text>Р{this.props.row}</Text>
                        <Text>М{this.props.cell}</Text>
                    </View>
                    <Circle color={Colors.Green} />
                </View>
            </View>;
        } else if (this.props.type === 4) {
            stillage = <View style={styles.stillage}>
                <View style={styles.stillageVikWrapper}>
                    <Circle color={Colors.Green} />
                    <View style={{ height: '100%', alignItems: 'center' }}>
                        <Text>Р{this.props.row}</Text>
                        <Text>М{this.props.cell}</Text>
                    </View>
                    <Circle color={Colors.Green} />
                </View>
            </View>;
        } else if (this.props.type === 5) {
            stillage = <View style={styles.stillageSmall}>
                <View style={styles.stillageVikWrapper}>
                    <Circle color={Colors.TRANS} />
                    <View style={{ height: '100%', alignItems: 'center' }}>
                        <Text>Р{this.props.row}</Text>
                        <Text>М{this.props.cell}</Text>
                    </View>
                    <Circle color={Colors.TRANS} />
                </View>
            </View>;
        } else if (this.props.type === 6) {
            stillage = <View style={styles.stillage}>
                <View style={styles.stillageVikWrapper}>
                    <Circle color={Colors.Green} />
                    <View style={{ height: '100%', alignItems: 'center' }}>
                        <Text>Р{this.props.row}</Text>
                        <Text>М{this.props.cell}</Text>
                    </View>
                    <Circle color={Colors.TRANS} />
                </View>
            </View>;
        } else if (this.props.type === 7) {
            stillage = <View style={styles.stillage}>
                <View style={styles.stillageVikWrapper}>
                    <Circle color={Colors.TRANS} />
                    <View style={{ height: '100%', alignItems: 'center' }}>
                        <Text>Р{this.props.row}</Text>
                        <Text>М{this.props.cell}</Text>
                    </View>
                    <Circle color={Colors.TRANS} />
                </View>
            </View>;
        }
        return (
            stillage
        );
    }
}