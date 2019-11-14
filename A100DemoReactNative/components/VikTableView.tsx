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
import IVikData from "../models/IVikData";
import Colors from "../data/Colors";

type Props = { VikData: Array<IVikData> };
type State = { VikData: Array<IVikData>, isRed: boolean };
export default class VikTableView extends React.Component<Props, State> {

    public button: any = {};

    constructor(props) {
        super(props);

        this.button = <Button onPress={this.showOnlyRedViks} title={'Показать опасные повреждения'}></Button>;

        this.state = {
            VikData: this.props.VikData,
            isRed: false,
        }
        this.showOnlyRedViks = this.showOnlyRedViks.bind(this);
    }

    showOnlyRedViks() {
        this.setState({ ...this.state, ...{ isRed: !(this.state.isRed) } });
    }

    render() {
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

        this.button = <Button onPress={this.showOnlyRedViks} title={'Показать ' + (this.state.isRed ? 'все' : 'опасные') + ' повреждения'}></Button>;

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
            this.state.VikData.forEach(element => {
                if (element.color === Colors.Red) {
                    _contentRows.push(
                        <View key={'contentRow' + i} style={{ ...styles.contentRow, ...{ backgroundColor: element.color } }}>
                            <View style={styles.headerCell}><Text style={{ fontSize: 9, }}>{element.row}</Text></View>
                            <View style={styles.headerCell}><Text style={{ fontSize: 9, }}>{element.cell}</Text></View>
                            <View style={styles.headerCell}><Text style={{ fontSize: 9, }}>{element.level}</Text></View>
                            <View style={styles.headerCell}><Text style={{ fontSize: 9, }}>{element.elementName}</Text></View>
                            <View style={styles.headerCell}><Text style={{ fontSize: 9, }}>{element.size}</Text></View>
                            <View style={styles.headerCell}><Text style={{ fontSize: 9, }}>{element.defectType}</Text></View>
                            <View style={styles.headerCell}><Text style={{ fontSize: 9, }}>{element.comment}</Text></View>
                            <View style={styles.headerCell}><Text style={{ fontSize: 9, }}>{element.watchDate}</Text></View>
                            <View style={styles.headerCell}><Text style={{ fontSize: 9, }}>{element.repaired ? 'Да' : 'Нет'}</Text></View>
                        </View>
                    );
                }
                i++;
            });
        } else {
            i = 0;
            this.state.VikData.forEach(element => {
                _contentRows.push(
                    <View key={'contentRow' + i} style={{ ...styles.contentRow, ...{ backgroundColor: element.color } }}>
                        <View style={styles.headerCell}><Text style={{ fontSize: 9, }}>{element.row}</Text></View>
                        <View style={styles.headerCell}><Text style={{ fontSize: 9, }}>{element.cell}</Text></View>
                        <View style={styles.headerCell}><Text style={{ fontSize: 9, }}>{element.level}</Text></View>
                        <View style={styles.headerCell}><Text style={{ fontSize: 9, }}>{element.elementName}</Text></View>
                        <View style={styles.headerCell}><Text style={{ fontSize: 9, }}>{element.size}</Text></View>
                        <View style={styles.headerCell}><Text style={{ fontSize: 9, }}>{element.defectType}</Text></View>
                        <View style={styles.headerCell}><Text style={{ fontSize: 9, }}>{element.comment}</Text></View>
                        <View style={styles.headerCell}><Text style={{ fontSize: 9, }}>{element.watchDate}</Text></View>
                        <View style={styles.headerCell}><Text style={{ fontSize: 9, }}>{element.repaired ? 'Да' : 'Нет'}</Text></View>
                    </View>
                );
                i++;
            });
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
    contentRow: {
        flex: 0.15,
        flexDirection: 'row',
        borderBottomColor: '#dfdfdf',
        borderBottomWidth: 1,
    }
});