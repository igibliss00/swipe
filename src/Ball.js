import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Animated } from 'react-native'

const Ball = () => {
    const value = new Animated.ValueXY(0, 0)
    const [position, setPosition] = useState(value)
    useEffect(() => {
        Animated.spring(position, {
            toValue: {
                x: 200,
                y: 500
            }
        }).start()
    }, [value])
    return(
        <Animated.View style={position.getLayout()}>
            <View style={styles.ball}></View>
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    ball: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: 'black'
    }
})

export default Ball