import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'

const Spinner = require('react-native-spinkit');

export class Spiner extends Component {
    constructor(props){
        super(props);

        this.state = ({
            index: 0,
            types: ['CircleFlip', 'Bounce', 'Wave', 'WanderingCubes', 'Pulse', 'ChasingDots', 'ThreeBounce', 'Circle', '9CubeGrid', 'WordPress', 'FadingCircle', 'FadingCircleAlt', 'Arc', 'ArcAlt'],
            size: 100,
            color: "orange",
            isVisible: true
        })
    }

    render() {
        return (
            <View>
                <Spinner style={styles.spinner} isVisible={this.state.isVisible} size={this.state.size} type={'ThreeBounce'} color={this.state.color}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    spinner: {
      marginBottom: 50
    }
  });

export default Spiner
