import React, { Component } from 'react';
import { View, ScrollView, Image, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const height = width * 0.8;

export default class Carousel extends Component {
    render() {
        const { images } = this.props;
        if (images && images.length) {
            return (
                <View
                    style={styles.scrollContainer}
                >
                    <ScrollView
                        horizontal
                        pagingEnabled
                        showsHorizontalScrollIndicator={true}
                        indicatorStyle='white'
                        style={this.props.styles}
                    >
                        {images.map(image => (
                            <Image style={styles.image} source={{
                                uri: image.source
                            }} />
                        ))}
                    </ScrollView>
                </View>
            );
        }
        console.log('Please provide images');
        return null;
    }
}

const styles = StyleSheet.create({
    scrollContainer: {
        height,
    },
    image: {
        width,
        height,
    },
});