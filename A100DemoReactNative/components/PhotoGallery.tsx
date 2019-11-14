import React from 'react';
import { Modal, Text, StyleSheet, ImageBackground, View, Image, TouchableHighlight } from 'react-native';
import EventEmitter from 'EventEmitter';
import ImageViewer from 'react-native-image-zoom-viewer';





type Props = { eEmitter: EventEmitter, photos: string[] };
type State = { eEmitter: EventEmitter, photos: string[], images: any, browseModal: boolean };
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
                        source: require('../assets/first.jpg')
                    }
                }
            ],
            browseModal: false,
        }

        this.onPressHandle = this.onPressHandle.bind(this);
    }


    onPressHandle(el) {
        // this.state.eEmitter.emit('openPhotoModal', true);
        // this.setState();
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


    render() {
       

        let first = '../assets/first.jpg';

        // console.log(this.props.photos);

        let images = [];

        for (let i = 0; i < this.state.photos.length; i++) {
            let _path = this.state.photos[i];
            console.log(_path);
            images.push(
                <TouchableHighlight key={i} style={styles.GalleryImage} onPress={() => this.onPressHandle(i)} underlayColor={'transparent'} >
                    <Image source={this.state.photos[i]} style={{ width: 30, height: 30, borderRadius: 3 }} />
                </TouchableHighlight>
            );
        }

        return (
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
                        <Image source={require('../assets/Close.png')} style={{ width: 20, height: 20, marginTop: 5, marginLeft: 5 }} />
                    </TouchableHighlight>
                    <ImageViewer imageUrls={this.state.images} enableImageZoom={true} saveToLocalByLongPress={true} />
                </Modal>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    GalleryWrapper: {
        flex: 1,
        width: '100%',
        height: '100%',
        flexDirection: 'row',
    },
    GalleryImage: {
        flex: 0.25,
    }
});