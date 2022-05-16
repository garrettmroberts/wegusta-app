import React, { Component } from 'react'
import { View, Image } from 'react-native'

import styles from './styles'

const ImageBlock = () => {
    return (
        <View style={styles.imageContainer}>
            <Image
                style={styles.imageStyle}
                source={{
                    uri: 'https://picsum.photos/500/600',
                }}
            />
            <Image
                style={styles.imageStyle}
                source={{
                    uri: 'https://picsum.photos/500/600',
                }}
            />
            <Image
                style={styles.imageStyle}
                source={{
                    uri: 'https://picsum.photos/500/600',
                }}
            />
            <Image
                style={styles.imageStyle}
                source={{
                    uri: 'https://picsum.photos/500/600',
                }}
            />
            <Image
                style={styles.imageStyle}
                source={{
                    uri: 'https://picsum.photos/500/600',
                }}
            />
            <Image
                style={styles.imageStyle}
                source={{
                    uri: 'https://picsum.photos/500/600',
                }}
            />
        </View>
    )
}

export { ImageBlock }
