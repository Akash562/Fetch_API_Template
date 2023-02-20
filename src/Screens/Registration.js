
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Image, TextInput, StatusBar } from 'react-native';

export default class Registration extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        }

    }


    render() {

        const { username, password } = this.state;

        return (
            <>
                <StatusBar backgroundColor='#208AEC' />
                <SafeAreaView style={styles.login_container}>
                    <View style={styles.login_header}>
                        <Image
                            style={styles.login_header_logo}
                            source={require('../Assets/logo.webp')}
                        />
                        <Text style={styles.login_header_text}>
                            {'User Registration'}
                        </Text>
                    </View>
                    <View style={styles.login_wrapper}>
                        <View style={styles.form}>
                            <TextInput
                                style={styles.form_input}
                                value={username}
                                placeholder={'Username'}
                                onChangeText={(text) => setUsername(text)}
                                autoCapitalize={'none'}
                                keyboardType={'email-address'}
                            />
                            <TextInput
                                style={styles.form_input}
                                value={password}
                                placeholder={'Password'}
                                secureTextEntry
                                onChangeText={(text) => setPassword(text)}
                            />
                            <TouchableOpacity onPress={() => doUserSignUp()}>
                                <View style={styles.button}>
                                    <Text style={styles.button_label}>{'Sign Up'}</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.login_social}>
                            <View style={styles.login_social_separator}>
                                <View style={styles.login_social_separator_line} />
                                <Text style={styles.login_social_separator_text}>{'or'}</Text>
                                <View style={styles.login_social_separator_line} />
                            </View>
                            <View style={styles.login_social_buttons}>
                                <TouchableOpacity>
                                    <View
                                        style={[
                                            styles.login_social_button,
                                            styles.login_social_facebook,
                                        ]}>
                                        <Image
                                            style={styles.login_social_icon}
                                            source={require('../Assets/icon-facebook.png')}
                                        />
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <View style={styles.login_social_button}>
                                        <Image
                                            style={styles.login_social_icon}
                                            source={require('../Assets/icon-google.png')}
                                        />
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <View style={styles.login_social_button}>
                                        <Image
                                            style={styles.login_social_icon}
                                            source={require('../Assets/icon-apple.png')}
                                        />
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
                                <Text style={styles.login_footer_text}>
                                    {'Already have an account? '}
                                    <Text style={styles.login_footer_link}>{' Log In '}</Text>
                                </Text>
                            </TouchableOpacity>
                        </>
                    </View>
                </SafeAreaView>
            </>
        );
    }

}

const styles = StyleSheet.create({
    login_container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    login_header: {
        alignItems: 'center',
        paddingTop: 30,
        paddingBottom: 50,
        backgroundColor: '#256',
    },
    login_header_logo: {
        width: 220,
        resizeMode: 'contain',
    },
    login_header_text: {
        marginTop: 15,
        color: '#f0f0f0',
        fontSize: 16,
    },
    login_header_text_bold: {
        color: '#fff',
        fontWeight: 'bold',
    },
    login_wrapper: {
        flex: 1,
        justifyContent: 'space-between',
        paddingVertical: 40,
        borderTopRightRadius: 12,
        borderTopLeftRadius: 12,
        marginTop: -10,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    form: {
        width: '100%',
        maxWidth: 280,
    },
    form_input: {
        height: 44,
        paddingHorizontal: 20,
        marginBottom: 20,
        backgroundColor: '#EDF0F7',
        borderRadius: 50,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 44,
        backgroundColor: '#0065A4',
        borderRadius: 50,
    },
    button_label: {
        color: '#fff',
        fontSize: 15,
    },
    login_social: {
        width: '100%',
        maxWidth: 280,
        marginTop: 20,
    },
    login_social_separator: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    login_social_separator_line: {
        flex: 1,
        width: '100%',
        height: 1,
        backgroundColor: '#E0E0E0',
    },
    login_social_separator_text: {
        marginHorizontal: 10,
        color: '#808080',
        fontSize: 16,
    },
    login_social_buttons: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
    },
    login_social_button: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 60,
        height: 60,
        marginHorizontal: 12,
        borderWidth: 1,
        borderColor: '#E7E7E7',
        borderRadius: 60,
    },
    login_social_icon: {
        width: 38,
        height: 38,
        resizeMode: 'contain',
    },
    login_social_facebook: {
        backgroundColor: '#4267B2',
        borderColor: '#4267B2',
    },
    login_footer_text: {
        flexDirection: 'row',
        alignItems: 'center',
        color: '#808080',
        fontSize: 15,
    },
    login_footer_link: {
        color: '#208AEC',
        fontSize: 15,
        fontWeight: 'bold',
    },
})