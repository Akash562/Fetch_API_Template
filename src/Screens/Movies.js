
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native';
import { AuthFlowAPI } from '../Api/AuthFlowAPI';

export default class Movies extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            m_type: this.props.route.params.mtype,
            MoviesData: '',
        }
    }

    componentDidMount() {
        this.getmoviesDetails(this.state.m_type);
    }

    getmoviesDetails(mtype) {

        if (mtype == 'animation') {
            AuthFlowAPI.getanimation().then(data => {
                this.setState({ MoviesData: data });
            })
        } else if (mtype == 'comedy') {
            AuthFlowAPI.getcomedy().then(data => {
                this.setState({ MoviesData: data });
            })
        } else if (mtype == 'horror') {
            AuthFlowAPI.gethorror().then(data => {
                this.setState({ MoviesData: data });
            })
        } else {
            alert('Movies Details Not Found');
        }
    }

    singleViewMovies(item, index) {
        return (
            <View style={styles.mdetailCont}>
                <Image resizeMode='stretch' source={{ uri: item.item.posterURL }} style={styles.image_s} />
                <Text style={[styles.text_s, { color: '#fff' }]}> {item.item.title}</Text>
            </View>
        )
    }


    render() {
        return (
            <View style={styles.container}>

                <TouchableOpacity style={styles.button_s} >
                    <Text style={styles.text_s}> {this.state.m_type} </Text>
                </TouchableOpacity>

                <FlatList
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item) => item.id}
                    data={this.state.MoviesData}
                    renderItem={(item) => this.singleViewMovies(item)}
                />

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
        width: '90%',
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
    },
    mdetailCont: {
        backgroundColor: '#256',
        height: 250,
        width: 350,
        borderColor: 'red',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginTop: 10
    },
    image_s: {
        height: 225,
        width: 350
    }

})