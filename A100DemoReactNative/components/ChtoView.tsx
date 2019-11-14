import React from "react";
import {
    StyleSheet,
    Button,
    View,
    SafeAreaView,
    Text,
    Alert,
} from 'react-native';

import AppState from '../data/State';
import IChtoData from "../models/IChtoData";
import Colors from "../data/Colors";


type Props = { ChtoData: Array<IChtoData> };
type State = { Source: Array<IChtoData> };
export default class ChtoView extends React.Component<Props, State> {

    constructor(props) {
        super(props);

        this.state = {
            Source: this.props.ChtoData,
        }
    }

    render() {

        let headers = [
            'Дата осмотра',
            'Имя сотрудника',
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
                    <View style={styles.headerCell}><Text style={{ fontSize: 11, }}>{element.watchDate}</Text></View>
                    <View style={styles.headerCell}><Text style={{ fontSize: 11, }}>{element.empName}</Text></View>
                </View>
            );
            i++;
        });


        return (
            <React.Fragment>
                <View style={styles.VikTableWrapper}>
                    <View style={{ flex: 0.1, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ flex: 0.495, }}>
                            <Button title={'Провести осмотр'} onPress={() => { }}></Button>
                        </View>
                        <View style={{ flex: 0.495, }}>
                            <Button color={'#009688'} title={'Выгрузить осмотр'} onPress={() => { }}></Button>
                        </View>
                    </View>
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