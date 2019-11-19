import React from 'react';
import { Modal, Text, StyleSheet, ImageBackground, View, Image, TouchableHighlight, ScrollView } from 'react-native';
import EventEmitter from 'EventEmitter';
import ImageViewer from 'react-native-image-zoom-viewer';





type Props = { bigCollection: boolean, eEmitter: EventEmitter, photos: string[] };
type State = { bigCollection: boolean, eEmitter: EventEmitter, photos: string[], images: any, browseModal: boolean };
export default class PhotoGallery extends React.Component<Props, State> {
    constructor(props) {
        super(props);

        this.state = {
            eEmitter: this.props.eEmitter,
            photos: this.props.photos,
            images: [
                {
                    props: {
                        // Or you can set source directory.
                        url: '',
                        source: require('../node_modules/first.jpg')
                    }
                }
            ],
            browseModal: false,
            bigCollection: this.props.bigCollection,
        }

        this.onPressHandle = this.onPressHandle.bind(this);
    }


    onPressHandle(el) {
        // this.state.eEmitter.emit('openPhotoModal', true);
        // this.setState();
        if (this.state.bigCollection) {
            let _images = [];
            this.state.photos.forEach(element => {
                _images.push({
                    props: {
                        // Or you can set source directory.
                        url: '',
                        source: element
                    }
                });
            });
            this.setState({
                ...this.state,
                ...{ browseModal: true },
                ...{
                    images: _images
                }
            });
        } else {
            this.setState({
                ...this.state,
                ...{ browseModal: true },
                ...{
                    images: [
                        {
                            props: {
                                // Or you can set source directory.
                                url: '',
                                source: this.state.photos[el]
                            }
                        }
                    ],
                }
            });
        }
    }


    render() {
        const styles = StyleSheet.create({
            GalleryWrapper: {
                flex: 1,
                width: '100%',
                height: '100%',
                flexDirection: this.state.bigCollection ? 'column' : 'row',
                padding: this.state.bigCollection ? 10 : 0,
                justifyContent: this.state.bigCollection ? 'space-between' : 'flex-start',
                alignItems: this.state.bigCollection? 'center' : 'flex-start',
            },
            GalleryImage: {
                flex: this.state.bigCollection ? 1 : 0.25,
                marginTop: this.state.bigCollection ? 10 : 0,
            }
        });

        let first = '../node_modules/first.jpg';

        // console.log(this.props.photos);

        let images = [];

        for (let i = 0; i < this.state.photos.length; i++) {
            let _path = this.state.photos[i];
            images.push(
                <TouchableHighlight key={i} style={styles.GalleryImage} onPress={() => this.onPressHandle(i)} underlayColor={'transparent'} >
                    <Image source={_path} style={{ width: this.state.bigCollection ? 400 : 30, height: this.state.bigCollection ? 400 : 30, borderRadius: this.state.bigCollection ? 5 : 3 }} />
                </TouchableHighlight>
            );
        }
        let _all;
        if (this.state.bigCollection) {
            _all =
                <React.Fragment>
                    <ScrollView>
                        <View style={styles.GalleryWrapper}>
                            {images}
                            <Modal visible={this.state.browseModal} transparent={true}>
                                <TouchableHighlight
                                    style={{
                                        flex: 0.08,
                                        backgroundColor: 'black',
                                    }}
                                    onPress={() => {
                                        this.setState({ ...this.state, ...{ browseModal: false } })
                                    }}>
                                    <Image source={require('../node_modules/Close.png')} style={{ width: 20, height: 20, marginTop: 5, marginLeft: 5 }} />
                                </TouchableHighlight>
                                <ImageViewer imageUrls={this.state.images} enableImageZoom={true} saveToLocalByLongPress={true} />
                            </Modal>
                        </View>
                    </ScrollView>
                </React.Fragment>;

        } else {
            _all =
                <View style={styles.GalleryWrapper}>
                    {images}
                    <Modal visible={this.state.browseModal} transparent={true}>
                        <TouchableHighlight
                            style={{
                                flex: 0.08,
                                backgroundColor: 'black',
                            }}
                            onPress={() => {
                                this.setState({ ...this.state, ...{ browseModal: false } })
                            }}>
                            <Image source={require('../node_modules/Close.png')} style={{ width: 20, height: 20, marginTop: 5, marginLeft: 5 }} />
                        </TouchableHighlight>
                        <ImageViewer imageUrls={this.state.images} enableImageZoom={true} saveToLocalByLongPress={true} />
                    </Modal>
                </View>;
        }

        return (
            _all
        );
    }
}

