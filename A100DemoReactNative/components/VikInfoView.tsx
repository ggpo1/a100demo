import React from 'react';
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
import IVikData from "../models/IVikData";
import Colors from '../data/Colors';
import AppState from '../data/State';
import PhotoGallery from './PhotoGallery';


type MyProps = { eEmitter: EventEmitter, visible: boolean };
type MyState = { modalVisible: boolean, eEmitter: EventEmitter, vikInfo };
export default class VikInfoView extends React.Component<MyProps, MyState> {
    state = {
        modalVisible: false,
        eEmitter: null,
        vikInfo: null,
    };

    constructor(props) {
        super(props);
        // this.onChangeSpeed = this.onChangeSpeed.bind(this);
        this.state = {
            modalVisible: this.props.visible,
            eEmitter: this.props.eEmitter,
            vikInfo: AppState.State.vikInfo,
        };
        this.onPressHandle = this.onPressHandle.bind(this);
    }

    onPressHandle() {
        // this.forceUpdate();
        // this.setState({ modalVisible: visible });
        this.state.eEmitter.emit('closeModal', false);
        // this.props.visible = visible;
    }

    render() {
        // alert(this.state.modalVisible);
        // console.log(this.state.vikInfo)
        if (!this.state.modalVisible) return null;


        return (
            <View style={styles.vikInfoWrapper}>
                <View style={styles.vikInfoHeader}>
                    <View style={styles.headerLeft}>
                        <TouchableHighlight onPress={this.onPressHandle} underlayColor={'transparent'} >
                            <Image source={require('../assets/Close.png')} style={{ width: 20, height: 20 }} />
                        </TouchableHighlight>

                    </View>
                    <View style={styles.headerRight}><Text style={{ color: 'white' }}>Повреждение</Text></View>
                </View>
                <View style={styles.vikInfoContent}>
                    <View style={styles.vikInformation}>
                        <View style={styles.infoRow}>
                            <View style={styles.infoRowRowed}>
                                <Text style={styles.infoRowText}>Ряд</Text>
                                <Text style={styles.rowValue}>{this.state.vikInfo.vikData.row}</Text>
                            </View>
                            <View style={styles.infoRowRowed}>
                                <Text style={styles.infoRowText}>Место</Text>
                                <Text style={styles.rowValue}>{this.state.vikInfo.vikData.cell}</Text>
                            </View>
                            <View style={styles.infoRowRowed}>
                                <Text style={styles.infoRowText}>Уровень</Text>
                                <Text style={styles.rowValue}>{this.state.vikInfo.vikData.level}</Text>
                            </View>
                        </View>
                        <View style={styles.infoRow}>
                            <View style={styles.infoRowColumned}>
                                <Text style={styles.infoRowText}>Элемент</Text>
                                <Text style={styles.rowValueFont}>{this.state.vikInfo.vikData.elementName}</Text>
                            </View>
                            <View style={styles.infoRowColumned}>
                                <Text style={styles.infoRowText}>Размер</Text>
                                <Text style={styles.rowValueFont}>{this.state.vikInfo.vikData.size}</Text>
                            </View>
                            <View style={styles.infoRowColumned}>
                                <Text style={styles.infoRowText}>Уровень риска</Text>
                                <View style={{ width: 100, height: 25, backgroundColor: this.state.vikInfo.color, borderRadius: 10 }}>
                                    <Text style={{
                                        width: '100%',
                                        fontSize: 11,
                                        fontWeight: '100',
                                        lineHeight: 25,
                                        textAlign: 'center',
                                    }}>{this.state.vikInfo.color === '#0da50f' ? 'Зелёный' : 'Красный'}</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.infoRow}>
                            <View style={styles.infoRowColumned}>
                                <Text style={styles.infoRowText}>Тип дефекта</Text>
                                <Text style={styles.rowValueFont}>{this.state.vikInfo.vikData.defectType}</Text>
                            </View>
                            <View style={styles.infoRowColumned}>
                                <Text style={{ color: 'transparent' }}>Размер</Text>
                                <Text style={{ color: 'transparent' }}>100x70x5000</Text>
                            </View>
                            <View style={styles.infoRowColumned}>
                                <Text style={styles.infoRowText}>Производитель</Text>
                                <Text style={styles.rowValueFont}>{this.state.vikInfo.vikData.producer}</Text>
                            </View>
                        </View>
                        <View style={styles.infoRow}>
                            <View style={styles.infoRowColumned}>
                                <Text style={styles.infoRowText}>Дата обнаружения</Text>
                                <Text style={styles.rowValueFont}>{this.state.vikInfo.vikData.watchDate}</Text>
                            </View>
                            <View style={styles.infoRowColumned}>
                                <Text style={styles.infoRowText}>Элемент заменен</Text>
                                <Text style={styles.rowValueFont}>{this.state.vikInfo.vikData.repaired ? 'Да' : 'Нет'}</Text>
                            </View>
                            <View style={styles.infoRowColumned}>
                                <Text style={styles.infoRowText}>Дата замены</Text>
                                <Text style={styles.rowValueFont}>{this.state.vikInfo.vikData.repairDate}</Text>
                            </View>
                        </View>
                        <View style={styles.infoRow}>
                            <View style={styles.infoRowColumned}>
                                <Text style={styles.infoRowText}>Комментарий</Text>
                                <Text style={styles.rowValueFont}>{this.state.vikInfo.vikData.comment}</Text>
                            </View>
                        </View>
                        <View style={{
                            flex: 1,
                            flexDirection: 'row',
                            width: '100%',
                        }}>
                            <View style={{
                                flex: 1,
                            }}>
                                <Text style={styles.infoRowText}>Повреждение до ремонта</Text>
                                <PhotoGallery bigCollection={false} photos={this.state.vikInfo.vikData.photos} eEmitter={this.state.eEmitter} />
                            </View>
                            <View style={{
                                flex: 1,
                            }}>
                                <Text style={styles.infoRowText}>После ремонта</Text>
                                <PhotoGallery bigCollection={false} photos={this.state.vikInfo.vikData.repairPhotos} eEmitter={this.state.eEmitter} />
                            </View>
                        </View>
                    </View>
                    <View style={styles.vikInfoFooter}>
                        <View style={[{ width: "100%", height: '100%', borderRadius: 20, backgroundColor: "transparent" }]}>
                            <Button
                                onPress={() => { }}
                                title="Заменить поврежденный элемент"
                                color="#2D9CDB"
                            />
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    vikInfoWrapper: {
        flex: 1,
        width: '45%',
        height: '100%',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        shadowOpacity: 0.75,
        shadowRadius: 10,
        shadowColor: 'black',
        shadowOffset: { height: 10, width: 10 },
        backgroundColor: 'white'
    },
    vikInfoHeader: {
        flex: 0.105,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'space-between',
        borderTopLeftRadius: 10,
        backgroundColor: '#6B737C',
    },
    headerLeft: {
        flex: 0.5,
        flexDirection: 'row',
        color: 'white',
        // backgroundColor: 'red',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '500',
        paddingLeft: '2%',
        fontSize: 18,
        justifyContent: 'flex-start',
        width: '25%',
    },
    headerRight: {
        flex: 1,
        flexDirection: 'row',
        // backgroundColor: 'red',
        justifyContent: 'flex-start',
        paddingLeft: '5%',
        width: '50%',
    },
    vikInfoContent: {
        flex: 1,
        justifyContent: 'flex-start',
        padding: 10,
        // backgroundColor: 'red',
    },
    vikInformation: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        // backgroundColor: 'red',
    },
    vikInfoFooter: {
        flex: 0.1,
        // backgroundColor: 'blue',
    },
    button: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
    },
    infoRow: {
        // backgroundColor: 'red',
        // height: '10%',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    infoRowText: {
        color: '#6B737C',
        fontSize: 11,
    },
    infoRowRowed: {
        flex: 1,
        flexDirection: 'row',
    },
    infoRowColumned: {
        flex: 1,
    },
    rowValue: {
        marginLeft: '10%',
        fontSize: 11,
    },
    rowValueFont: {
        fontSize: 11,
    }
});