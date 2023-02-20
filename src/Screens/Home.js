
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';


export default class Home extends React.Component {

    constructor(props) {
        super(props);
    }

    getMovies(m_type) {
        this.props.navigation.navigate('Movies', { 'mtype': m_type });
    }

    render() {
        return (
            <View style={styles.container}>

                <TouchableOpacity style={styles.button_s} onPress={() => this.getMovies('animation')}>
                    <Text style={styles.text_s}> animation </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button_s} onPress={() => this.getMovies('classic')}>
                    <Text style={styles.text_s}> classic </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button_s} onPress={() => this.getMovies('comedy')}>
                    <Text style={styles.text_s}> comedy </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button_s} onPress={() => this.getMovies('drama')}>
                    <Text style={styles.text_s}> drama </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button_s} onPress={() => this.getMovies('horror')}>
                    <Text style={styles.text_s}> horror </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button_s} onPress={() => this.getMovies('family')}>
                    <Text style={styles.text_s}> family </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button_s} onPress={() => this.getMovies('mystery')}>
                    <Text style={styles.text_s}> mystery </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button_s} onPress={() => this.getMovies('western')}>
                    <Text style={styles.text_s}> western </Text>
                </TouchableOpacity>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 10
    },
    button_s: {
        width: '80%',
        padding: 10,
        borderColor: 'green',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginTop: 10
    },
    text_s: {
        fontSize: 16,
        color: '#000',
    }

})