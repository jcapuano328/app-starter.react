'use strict';

var React = require('react');
import { View, TouchableOpacity, Text } from 'react-native';

var RadioButton = React.createClass({
    render() {
        return (
            <TouchableOpacity onPress={this.props.onSelected}>
                <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}} >
                    {this.props.labelpos == 'left' ? this.renderLabel(this.props.label) : null}
                    <View style={{
                        width: 25,
                        height: 25,
                        borderRadius: 12.5,
                        borderColor: 'black',
                        borderWidth: 2,
                        marginTop: 3,
                        marginLeft: 5,
                        marginRight: 5,
                    }}>
                        {this.props.selected
                            ? <View style={{
                                width: 12.5,
                                height: 12.5,
                                borderRadius: 6.25,
                                backgroundColor: 'black',
                                marginTop: 3.75,
                                marginLeft: 3.75,
                            }}/>
                            : null
                        }
                    </View>

                    {this.props.labelpos != 'left' ? this.renderLabel(this.props.label) : null}
                </View>
            </TouchableOpacity>
        );
    },
    renderLabel(label) {
        return (<Text style={{fontSize: 14, textAlign: 'left'}}>{label}</Text>)
    }
});

module.exports = RadioButton;
