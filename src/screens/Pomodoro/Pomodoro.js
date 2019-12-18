import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    Button,
    View,
    TouchableOpacity
} from 'react-native';

class StopWatch extends Component {

    state = {
        timer: null,
        counter: '50',
        miliseconds: '00',
        startDisabled: true,
        stopDisabled: false
    }


    constructor(props) {
        super(props);

        this.onButtonStart = this.onButtonStart.bind(this);
        this.onButtonStop = this.onButtonStop.bind(this);
        this.onButtonClear = this.onButtonClear.bind(this);
        this.start = this.start.bind(this);
    }



    componentDidMount() {
        this.start();
    }


    componentWillUnmount() {
        clearInterval(this.state.timer);
    }



    start() {
        var self = this;
        let timer = setInterval(() => {
            var num = (Number(this.state.miliseconds) + 1).toString(),
                count = this.state.counter;

            if (Number(this.state.miliseconds) == 99) {
                count = (Number(this.state.counter) + 1).toString();
                num = '00';
            }

            self.setState({
                counter: count.length == 1 ? '0' + count : count,
                miliseconds: num.length == 1 ? '0' + num : num
            });
        }, 0);
        this.setState({ timer });
    }




    onButtonStart() {

        this.start();
        this.setState({ startDisabled: true, stopDisabled: false });
    }


    onButtonStop() {
        clearInterval(this.state.timer);
        this.setState({ startDisabled: false, stopDisabled: true });
    }


    onButtonClear() {
        this.setState({
            timer: null,
            counter: '00',
            miliseconds: '00'
        });
    }




    render() {
        return (
        <View style = {styles.container}>
            <View style = {styles.showNumber}>  
                <Text style= {styles.counter}> {this.state.counter} </Text>
                <Text style= {styles.miniCounter}> {this.state.miliseconds} </Text>
            </View>
            <View style = {styles.buttonContainer}>
                <TouchableOpacity
                    style= {{marginRight: 20}}
                    onPress={() => this.onButtonStart()} >
                        <Text style={styles.startTxt}> Start </Text> 
                </TouchableOpacity>
                                          
                <TouchableOpacity
                    style= {{marginRight: 20}}
                    onPress={() => this.onButtonStop()} >
                        <Text style={styles.stopTxt}> Stop </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => this.onButtonClear()} >
                        <Text style={styles.clearTxt}> Clear </Text>
                </TouchableOpacity>
            </View>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    showNumber: {
        width: 350,
        height: 100,
        alignSelf: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 225
    },
    counter: {
        fontSize: 55,
        textAlign: 'center',
        height: 60,
        margin: 10,
        marginTop: 200
    },
    miniCounter: {
        fontSize: 20,
        position: 'relative',
        top: -32,
        right: -215
    },
    Button: {
        width: 35,
        height: 15,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
    },
    startTxt: {
        fontSize: 25,
        alignSelf: 'center',
        color: 'red'
    },
    stopTxt: {
        fontSize: 25,
        alignSelf: 'center',
        color: 'red'
    },
    clearTxt: {
        fontSize: 25,
        alignSelf: 'center',
        color: 'blue'
    }
});


export default StopWatch;