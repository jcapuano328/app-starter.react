'use strict'

var React = require('react');
import { View, Text, TouchableOpacity } from 'react-native';

var Dot = React.createClass({
    render() {
        return (
            <View style={{
                top: this.props.top,
                left: this.props.left,
                width: this.props.size,
                height: this.props.size,
                borderRadius: this.props.size/2,
                backgroundColor: this.props.color
            }}/>
        );
    }
});


var Die = React.createClass({
    onPress() {
        this.props.onPress && this.props.onPress(this.props.die);
    },
    render() {
        let area = this.props.size / 3;
        let dotsize = area * 0.4;   // 40% of area
        let dotcenter = area / 2;
        let dotoffset = dotcenter - (dotsize / 2);
        console.log(this.props.size + '/' + area + '/' + dotsize + '/' + dotoffset);
        return (
            <View style={{
                width: this.props.size,
                height: this.props.size,
                backgroundColor: this.props.dieColor,
                borderRadius: 2,
                borderColor: this.props.dotColor,
                borderWidth: 1,
                //marginTop: 5,
                marginLeft: 5,
                marginRight: 5
            }}>
                <TouchableOpacity onPress={this.onPress} >
                    <Dot color={this.props.dotColor} top={dotoffset} left={dotoffset} size={dotsize}/>
                </TouchableOpacity>
            </View>
        );
    }
});

module.exports = Die;
