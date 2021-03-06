'use strict'

var React = require('react');
import { View, Text } from 'react-native';
var ScrollableTabView = require('react-native-scrollable-tab-view');
var TurnView = require('./turnView');
var Current = require('./services/current');
var icons = require('./res/icons');

var ItemView = React.createClass({
    getInitialState() {
        return {
            initialPage: 0
        };
    },
    componentWillMount: function() {
        this.props.events.addListener('menureset', this.onReset);
    },
    onReset() {
        Current.reset(this.props.item)
        .then((current) => {
            this.props.events.emit('reset');
        })
        .done();
    },
    onChangeTab({i, ref}) {
    },
    render() {
        let item = this.props.item || {};
        return (
            <View style={{flex: 1,backgroundColor: 'rgba(0,0,0,0.01)'}}>
                <TurnView logo={icons[item.image]} events={this.props.events} />
                <ScrollableTabView
                    style={{backgroundColor: '#fff'}}
                    onChangeTab={this.onChangeTab}
                    initialPage={this.state.initialPage}
                >
                    <Text tabLabel="Tab 1" events={this.props.events} />
                    <Text tabLabel="Tab 2" events={this.props.events} />
                    <Text tabLabel="Tab 3" events={this.props.events} />
                    <Text tabLabel="Tab 4" events={this.props.events} />
                </ScrollableTabView>
            </View>
        );
    }
});

module.exports = ItemView;
