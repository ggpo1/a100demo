import React from "react";
import {
    StyleSheet,
    Button,
    View,
    SafeAreaView,
    Text,
    Alert,
    Image,
    ScrollView,
    TouchableHighlight
} from 'react-native';

import AppState from '../data/State';
import IVikData from "../models/IVikData";
import Colors from "../data/Colors";
import VikInfoView from "./VikInfoView";
import PhotoModal from "./PhotoModal";
import EventEmitter from 'EventEmitter';

type Props = { VikData: Array<IVikData> };
type State = { VikData: Array<IVikData>, isRed: boolean, modalVisible: boolean, browsePhotoModalVisible: boolean };
export default class VikTableView extends React.Component<Props, State> {

    public button: any = {};

    constructor(props) {
        super(props);

        this.button = <Button onPress={this.showOnlyRedViks} title={'Показать опасные повреждения'}></Button>;

        this.state = {
            VikData: this.props.VikData,
            isRed: false,
            modalVisible: false,
            browsePhotoModalVisible: false,
        }
        this.showOnlyRedViks = this.showOnlyRedViks.bind(this);
        this.onPressHandle = this.onPressHandle.bind(this);
        this.modalReducer = this.modalReducer.bind(this);
    }

    onPressHandle(num) {
        // this.state.eEmitter.emit('openModal', true);
        console.log(num);
        console.log(this.state.VikData[num]);
        AppState.State.vikInfo = { vikData: this.state.VikData[num], color: this.state.VikData[num].color }
        this.setState({ ...this.state, ...{ modalVisible: true } });
    }

    showOnlyRedViks() {
        this.setState({ ...this.state, ...{ isRed: !(this.state.isRed) } });
    }

    modalReducer(visible) {
        let _visible = this.state.browsePhotoModalVisible;
        this.setState({
            ...this.state, ...{
                modalVisible: visible,
                browsePhotoModalVisible: _visible,
            }
        })
    }

    render() {
        let vikInfo;
        let photoModal;
        let eEmitter = new EventEmitter();

        eEmitter.addListener('closeModal', this.modalReducer);

        if (this.state.modalVisible) {
            vikInfo = <VikInfoView isChild={true} eEmitter={eEmitter} visible={this.state.modalVisible} />;
        }

        if (this.state.browsePhotoModalVisible) {
            photoModal = <PhotoModal eEmitter={eEmitter} visible={this.state.browsePhotoModalVisible} />
        }

        let headers = [
            'Ряд',
            'Место',
            'Уровень',
            'Элемент конструкции',
            'Размер',
            'Тип дефекта',
            'Комментарий',
            'Дата обнаружения',
            'Исправлен',
        ]

        this.button =
            <TouchableHighlight style={{
                flex: 0.1,
                width: '100%',
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#2196f3'
            }}
                onPress={this.showOnlyRedViks} underlayColor={'transparent'} >
                <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'white' }} >{'ПОКАЗАТЬ ' + (this.state.isRed ? 'ВСЕ' : 'ОПАСНЫЕ') + ' ПОВРЕЖДЕНИЯ'}</Text>
            </TouchableHighlight>;

        let _headers = [];

        let i = 0;
        headers.forEach(element => {
            _headers.push(
                <View style={styles.headerCell} key={'header_' + i}><Text style={{ fontSize: 9, fontWeight: 'bold' }}>{element}</Text></View>
            );
            i++;
        });

        let _contentRows = [];

        if (this.state.isRed) {
            i = 0;
            // this.state.VikData.forEach(element => {
            _contentRows.push(
                <View key={'contentRow' + 0} style={{ ...styles.contentRow, ...{ backgroundColor: this.state.VikData[0].color } }}>
                    <TouchableHighlight style={styles.headerCell} onPress={() => this.onPressHandle(0)} underlayColor={'transparent'} >
                        <Text style={{ fontSize: 12, }}>{this.state.VikData[0].row}</Text>
                    </TouchableHighlight>
                    <View style={styles.headerCell}><Text style={{ fontSize: 9, }}>{this.state.VikData[0].cell}</Text></View>
                    <View style={styles.headerCell}><Text style={{ fontSize: 9, }}>{this.state.VikData[0].level}</Text></View>
                    <View style={styles.headerCell}><Text style={{ fontSize: 9, }}>{this.state.VikData[0].elementName}</Text></View>
                    <View style={styles.headerCell}><Text style={{ fontSize: 9, }}>{this.state.VikData[0].size}</Text></View>
                    <View style={styles.headerCell}><Text style={{ fontSize: 9, }}>{this.state.VikData[0].defectType}</Text></View>
                    <View style={styles.headerCell}><Text style={{ fontSize: 9, }}>{this.state.VikData[0].comment}</Text></View>
                    <View style={styles.headerCell}><Text style={{ fontSize: 9, }}>{this.state.VikData[0].watchDate}</Text></View>
                    <View style={styles.headerCell}><Text style={{ fontSize: 9, }}>{this.state.VikData[0].repaired ? 'Да' : 'Нет'}</Text></View>
                </View>
            );
            _contentRows.push(
                <View key={'contentRow' + 1} style={{ ...styles.contentRow, ...{ backgroundColor: this.state.VikData[1].color } }}>
                    <TouchableHighlight style={styles.headerCell} onPress={() => this.onPressHandle(1)} underlayColor={'transparent'} >
                        <Text style={{ fontSize: 12, }}>{this.state.VikData[1].row}</Text>
                    </TouchableHighlight>
                    <View style={styles.headerCell}><Text style={{ fontSize: 9, }}>{this.state.VikData[1].cell}</Text></View>
                    <View style={styles.headerCell}><Text style={{ fontSize: 9, }}>{this.state.VikData[1].level}</Text></View>
                    <View style={styles.headerCell}><Text style={{ fontSize: 9, }}>{this.state.VikData[1].elementName}</Text></View>
                    <View style={styles.headerCell}><Text style={{ fontSize: 9, }}>{this.state.VikData[1].size}</Text></View>
                    <View style={styles.headerCell}><Text style={{ fontSize: 9, }}>{this.state.VikData[1].defectType}</Text></View>
                    <View style={styles.headerCell}><Text style={{ fontSize: 9, }}>{this.state.VikData[1].comment}</Text></View>
                    <View style={styles.headerCell}><Text style={{ fontSize: 9, }}>{this.state.VikData[1].watchDate}</Text></View>
                    <View style={styles.headerCell}><Text style={{ fontSize: 9, }}>{this.state.VikData[1].repaired ? 'Да' : 'Нет'}</Text></View>
                </View>
            );
            _contentRows.push(
                <View key={'contentRow' + 4} style={{ ...styles.contentRow, ...{ backgroundColor: this.state.VikData[4].color } }}>
                    <TouchableHighlight style={styles.headerCell} onPress={() => this.onPressHandle(4)} underlayColor={'transparent'} >
                        <Text style={{ fontSize: 12, }}>{this.state.VikData[4].row}</Text>
                    </TouchableHighlight>
                    <View style={styles.headerCell}><Text style={{ fontSize: 9, }}>{this.state.VikData[4].cell}</Text></View>
                    <View style={styles.headerCell}><Text style={{ fontSize: 9, }}>{this.state.VikData[4].level}</Text></View>
                    <View style={styles.headerCell}><Text style={{ fontSize: 9, }}>{this.state.VikData[4].elementName}</Text></View>
                    <View style={styles.headerCell}><Text style={{ fontSize: 9, }}>{this.state.VikData[4].size}</Text></View>
                    <View style={styles.headerCell}><Text style={{ fontSize: 9, }}>{this.state.VikData[4].defectType}</Text></View>
                    <View style={styles.headerCell}><Text style={{ fontSize: 9, }}>{this.state.VikData[4].comment}</Text></View>
                    <View style={styles.headerCell}><Text style={{ fontSize: 9, }}>{this.state.VikData[4].watchDate}</Text></View>
                    <View style={styles.headerCell}><Text style={{ fontSize: 9, }}>{this.state.VikData[4].repaired ? 'Да' : 'Нет'}</Text></View>
                </View>
            );
            i++;
            // });
        } else {
            i = 0;
            // this.state.VikData.forEach(element => {
            _contentRows.push(
                <View key={'contentRow' + 0} style={{ ...styles.contentRow, ...{ backgroundColor: this.state.VikData[0].color } }}>
                    <TouchableHighlight style={styles.headerCell} onPress={() => this.onPressHandle(0)} underlayColor={'transparent'} >
                        <Text style={{ fontSize: 12, }}>{this.state.VikData[0].row}</Text>
                    </TouchableHighlight>
                    <View style={styles.headerCell}><Text style={{ fontSize: 9, }}>{this.state.VikData[0].cell}</Text></View>
                    <View style={styles.headerCell}><Text style={{ fontSize: 9, }}>{this.state.VikData[0].level}</Text></View>
                    <View style={styles.headerCell}><Text style={{ fontSize: 9, }}>{this.state.VikData[0].elementName}</Text></View>
                    <View style={styles.headerCell}><Text style={{ fontSize: 9, }}>{this.state.VikData[0].size}</Text></View>
                    <View style={styles.headerCell}><Text style={{ fontSize: 9, }}>{this.state.VikData[0].defectType}</Text></View>
                    <View style={styles.headerCell}><Text style={{ fontSize: 9, }}>{this.state.VikData[0].comment}</Text></View>
                    <View style={styles.headerCell}><Text style={{ fontSize: 9, }}>{this.state.VikData[0].watchDate}</Text></View>
                    <View style={styles.headerCell}><Text style={{ fontSize: 9, }}>{this.state.VikData[0].repaired ? 'Да' : 'Нет'}</Text></View>
                </View>
            );
            _contentRows.push(
                <View key={'contentRow' + 1} style={{ ...styles.contentRow, ...{ backgroundColor: this.state.VikData[1].color } }}>
                    <TouchableHighlight style={styles.headerCell} onPress={() => this.onPressHandle(1)} underlayColor={'transparent'} >
                        <Text style={{ fontSize: 12, }}>{this.state.VikData[1].row}</Text>
                    </TouchableHighlight>
                    <View style={styles.headerCell}><Text style={{ fontSize: 9, }}>{this.state.VikData[1].cell}</Text></View>
                    <View style={styles.headerCell}><Text style={{ fontSize: 9, }}>{this.state.VikData[1].level}</Text></View>
                    <View style={styles.headerCell}><Text style={{ fontSize: 9, }}>{this.state.VikData[1].elementName}</Text></View>
                    <View style={styles.headerCell}><Text style={{ fontSize: 9, }}>{this.state.VikData[1].size}</Text></View>
                    <View style={styles.headerCell}><Text style={{ fontSize: 9, }}>{this.state.VikData[1].defectType}</Text></View>
                    <View style={styles.headerCell}><Text style={{ fontSize: 9, }}>{this.state.VikData[1].comment}</Text></View>
                    <View style={styles.headerCell}><Text style={{ fontSize: 9, }}>{this.state.VikData[1].watchDate}</Text></View>
                    <View style={styles.headerCell}><Text style={{ fontSize: 9, }}>{this.state.VikData[1].repaired ? 'Да' : 'Нет'}</Text></View>
                </View>
            );
            _contentRows.push(
                <View key={'contentRow' + 2} style={{ ...styles.contentRow, ...{ backgroundColor: this.state.VikData[2].color } }}>
                    <TouchableHighlight style={styles.headerCell} onPress={() => this.onPressHandle(2)} underlayColor={'transparent'} >
                        <Text style={{ fontSize: 12, }}>{this.state.VikData[2].row}</Text>
                    </TouchableHighlight>
                    <View style={styles.headerCell}><Text style={{ fontSize: 9, }}>{this.state.VikData[2].cell}</Text></View>
                    <View style={styles.headerCell}><Text style={{ fontSize: 9, }}>{this.state.VikData[2].level}</Text></View>
                    <View style={styles.headerCell}><Text style={{ fontSize: 9, }}>{this.state.VikData[2].elementName}</Text></View>
                    <View style={styles.headerCell}><Text style={{ fontSize: 9, }}>{this.state.VikData[2].size}</Text></View>
                    <View style={styles.headerCell}><Text style={{ fontSize: 9, }}>{this.state.VikData[2].defectType}</Text></View>
                    <View style={styles.headerCell}><Text style={{ fontSize: 9, }}>{this.state.VikData[2].comment}</Text></View>
                    <View style={styles.headerCell}><Text style={{ fontSize: 9, }}>{this.state.VikData[2].watchDate}</Text></View>
                    <View style={styles.headerCell}><Text style={{ fontSize: 9, }}>{this.state.VikData[2].repaired ? 'Да' : 'Нет'}</Text></View>
                </View>
            );
            _contentRows.push(
                <View key={'contentRow' + 3} style={{ ...styles.contentRow, ...{ backgroundColor: this.state.VikData[3].color } }}>
                    <TouchableHighlight style={styles.headerCell} onPress={() => this.onPressHandle(3)} underlayColor={'transparent'} >
                        <Text style={{ fontSize: 12, }}>{this.state.VikData[3].row}</Text>
                    </TouchableHighlight>
                    <View style={styles.headerCell}><Text style={{ fontSize: 9, }}>{this.state.VikData[3].cell}</Text></View>
                    <View style={styles.headerCell}><Text style={{ fontSize: 9, }}>{this.state.VikData[3].level}</Text></View>
                    <View style={styles.headerCell}><Text style={{ fontSize: 9, }}>{this.state.VikData[3].elementName}</Text></View>
                    <View style={styles.headerCell}><Text style={{ fontSize: 9, }}>{this.state.VikData[3].size}</Text></View>
                    <View style={styles.headerCell}><Text style={{ fontSize: 9, }}>{this.state.VikData[3].defectType}</Text></View>
                    <View style={styles.headerCell}><Text style={{ fontSize: 9, }}>{this.state.VikData[3].comment}</Text></View>
                    <View style={styles.headerCell}><Text style={{ fontSize: 9, }}>{this.state.VikData[3].watchDate}</Text></View>
                    <View style={styles.headerCell}><Text style={{ fontSize: 9, }}>{this.state.VikData[3].repaired ? 'Да' : 'Нет'}</Text></View>
                </View>
            );
            _contentRows.push(
                <View key={'contentRow' + 4} style={{ ...styles.contentRow, ...{ backgroundColor: this.state.VikData[4].color } }}>
                    <TouchableHighlight style={styles.headerCell} onPress={() => this.onPressHandle(4)} underlayColor={'transparent'} >
                        <Text style={{ fontSize: 12, }}>{this.state.VikData[3].row}</Text>
                    </TouchableHighlight>
                    <View style={styles.headerCell}><Text style={{ fontSize: 9, }}>{this.state.VikData[4].cell}</Text></View>
                    <View style={styles.headerCell}><Text style={{ fontSize: 9, }}>{this.state.VikData[4].level}</Text></View>
                    <View style={styles.headerCell}><Text style={{ fontSize: 9, }}>{this.state.VikData[4].elementName}</Text></View>
                    <View style={styles.headerCell}><Text style={{ fontSize: 9, }}>{this.state.VikData[4].size}</Text></View>
                    <View style={styles.headerCell}><Text style={{ fontSize: 9, }}>{this.state.VikData[4].defectType}</Text></View>
                    <View style={styles.headerCell}><Text style={{ fontSize: 9, }}>{this.state.VikData[4].comment}</Text></View>
                    <View style={styles.headerCell}><Text style={{ fontSize: 9, }}>{this.state.VikData[4].watchDate}</Text></View>
                    <View style={styles.headerCell}><Text style={{ fontSize: 9, }}>{this.state.VikData[4].repaired ? 'Да' : 'Нет'}</Text></View>
                </View>
            );
            _contentRows.push(
                <View key={'contentRow' + 5} style={{ ...styles.contentRow, ...{ backgroundColor: this.state.VikData[5].color } }}>
                    <TouchableHighlight style={styles.headerCell} onPress={() => this.onPressHandle(5)} underlayColor={'transparent'} >
                        <Text style={{ fontSize: 12, }}>{this.state.VikData[5].row}</Text>
                    </TouchableHighlight>
                    <View style={styles.headerCell}><Text style={{ fontSize: 9, }}>{this.state.VikData[5].cell}</Text></View>
                    <View style={styles.headerCell}><Text style={{ fontSize: 9, }}>{this.state.VikData[5].level}</Text></View>
                    <View style={styles.headerCell}><Text style={{ fontSize: 9, }}>{this.state.VikData[5].elementName}</Text></View>
                    <View style={styles.headerCell}><Text style={{ fontSize: 9, }}>{this.state.VikData[5].size}</Text></View>
                    <View style={styles.headerCell}><Text style={{ fontSize: 9, }}>{this.state.VikData[5].defectType}</Text></View>
                    <View style={styles.headerCell}><Text style={{ fontSize: 9, }}>{this.state.VikData[5].comment}</Text></View>
                    <View style={styles.headerCell}><Text style={{ fontSize: 9, }}>{this.state.VikData[5].watchDate}</Text></View>
                    <View style={styles.headerCell}><Text style={{ fontSize: 9, }}>{this.state.VikData[5].repaired ? 'Да' : 'Нет'}</Text></View>
                </View>
            );
            _contentRows.push(
                <View key={'contentRow' + 6} style={{ ...styles.contentRow, ...{ backgroundColor: this.state.VikData[6].color } }}>
                    <TouchableHighlight style={styles.headerCell} onPress={() => this.onPressHandle(6)} underlayColor={'transparent'} >
                        <Text style={{ fontSize: 12, }}>{this.state.VikData[6].row}</Text>
                    </TouchableHighlight>
                    <View style={styles.headerCell}><Text style={{ fontSize: 9, }}>{this.state.VikData[6].cell}</Text></View>
                    <View style={styles.headerCell}><Text style={{ fontSize: 9, }}>{this.state.VikData[6].level}</Text></View>
                    <View style={styles.headerCell}><Text style={{ fontSize: 9, }}>{this.state.VikData[6].elementName}</Text></View>
                    <View style={styles.headerCell}><Text style={{ fontSize: 9, }}>{this.state.VikData[6].size}</Text></View>
                    <View style={styles.headerCell}><Text style={{ fontSize: 9, }}>{this.state.VikData[6].defectType}</Text></View>
                    <View style={styles.headerCell}><Text style={{ fontSize: 9, }}>{this.state.VikData[6].comment}</Text></View>
                    <View style={styles.headerCell}><Text style={{ fontSize: 9, }}>{this.state.VikData[6].watchDate}</Text></View>
                    <View style={styles.headerCell}><Text style={{ fontSize: 9, }}>{this.state.VikData[6].repaired ? 'Да' : 'Нет'}</Text></View>
                </View>
            );
            _contentRows.push(
                <View key={'contentRow' + 7} style={{ ...styles.contentRow, ...{ backgroundColor: this.state.VikData[7].color } }}>
                    <TouchableHighlight style={styles.headerCell} onPress={() => this.onPressHandle(7)} underlayColor={'transparent'} >
                        <Text style={{ fontSize: 12, }}>{this.state.VikData[7].row}</Text>
                    </TouchableHighlight>
                    <View style={styles.headerCell}><Text style={{ fontSize: 9, }}>{this.state.VikData[7].cell}</Text></View>
                    <View style={styles.headerCell}><Text style={{ fontSize: 9, }}>{this.state.VikData[7].level}</Text></View>
                    <View style={styles.headerCell}><Text style={{ fontSize: 9, }}>{this.state.VikData[7].elementName}</Text></View>
                    <View style={styles.headerCell}><Text style={{ fontSize: 9, }}>{this.state.VikData[7].size}</Text></View>
                    <View style={styles.headerCell}><Text style={{ fontSize: 9, }}>{this.state.VikData[7].defectType}</Text></View>
                    <View style={styles.headerCell}><Text style={{ fontSize: 9, }}>{this.state.VikData[7].comment}</Text></View>
                    <View style={styles.headerCell}><Text style={{ fontSize: 9, }}>{this.state.VikData[7].watchDate}</Text></View>
                    <View style={styles.headerCell}><Text style={{ fontSize: 9, }}>{this.state.VikData[7].repaired ? 'Да' : 'Нет'}</Text></View>
                </View>
            );
            i++;
            // });
        }

        // let data = ;
        // console.log(specData);

        // let specs = [];

        // for (let i = 0; i < this.state.SpecData.length; i++) {
        //     specs.push(

        //     );
        // }
        // {this.state.SpecData[0].H.toFixed(2).toString()}
        return (
            <React.Fragment>
                <View style={styles.VikTableWrapper}>
                    {this.button}
                    <View style={styles.vikTable}>
                        <View style={styles.vikTableHeader}>
                            {_headers}
                        </View>
                        <View style={styles.vikTableContent}>
                            {_contentRows}
                        </View>
                    </View>
                </View>
                <View style={{
                    position: 'absolute', width: '100%',
                    height: '100%',
                }}>
                    {vikInfo}
                </View>
            </React.Fragment>

        );
    }
}

const styles = StyleSheet.create({
    VikTableWrapper: {
        position: 'absolute',
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
    contentRow: {
        flex: 0.15,
        flexDirection: 'row',
        borderBottomColor: '#dfdfdf',
        borderBottomWidth: 1,
    }
});