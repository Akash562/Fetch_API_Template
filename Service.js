import { BASE_URL } from './env';
import AsyncStorage from '@react-native-async-storage/async-storage';

export class Service {

    static status = false;
    static callback_ref;

    static show_spinner = (callback) => {
        Service.callback_ref = callback;
        callback(Service.status);
    };


    static async sendPost(url, data, options = { notify: false, spinner: true }) {

        const User_Type = await AsyncStorage.getItem('@user_type');
        const Token = await AsyncStorage.getItem('@token');

        this.callback_ref(options.spinner);

        const formData = new FormData();
        Object.keys(data).map(key => {
            if (Array.isArray(data[key])) {
                data[key].map(data => {
                    formData.append(key + '[]', data);
                });
            } else {
                formData.append(key, data[key]);
            }
        });

        return new Promise((resolve, reject) => {
            fetch(BASE_URL + url, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'multipart/form-data',
                },
                body: formData,
                credentials: 'include',
            }).then(response => {
                this.callback_ref(false);
                response.json().then(response_json => {
                    resolve(response_json);
                },
                );
            }).catch(e => {
                console.log("Error==>", e)
                this.callback_ref(false);
            });
        });
    }

    static sendGet(url, options = { notify: false, spinner: true }) {
        this.callback_ref && this.callback_ref(options.spinner);

        return new Promise((resolve, reject) => {
            fetch(BASE_URL + url, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
            }).then(response => {
                this.callback_ref && this.callback_ref(false);
                response.json().then(
                    response_json => {
                        resolve(response_json);
                    },
                );
            }).catch(e => {
                this.callback_ref && this.callback_ref(false);
            });
        });
    }

    static sendDelete(url, data = {}, options = { notify: false, spinner: true }) {
        this.callback_ref && this.callback_ref(options.spinner);
        const esc = encodeURIComponent;
        const query = Object.keys(data)
            .map(k => esc(k) + '=' + esc(data[k]))
            .join('&');

        return new Promise((resolve, reject) => {
            fetch(data ? BASE_URL + url + "?" + query : BASE_URL + url, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
            }).then(response => {
                this.callback_ref && this.callback_ref(false);
                response.json().then(
                    response_json => {

                        resolve(response_json);
                    },
                );
            }).catch(e => {
                this.callback_ref && this.callback_ref(false);

            });
        });
    }
    static sendPut(url, data = {}, options = { notify: false, spinner: true }) {
        this.callback_ref && this.callback_ref(options.spinner);
        const esc = encodeURIComponent;
        const query = Object.keys(data)
            .map(k => esc(k) + '=' + esc(data[k]))
            .join('&');

        return new Promise((resolve, reject) => {
            fetch(data ? BASE_URL + url + "?" + query : BASE_URL + url, {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
            }).then(response => {
                this.callback_ref && this.callback_ref(false);
                response.json().then(
                    response_json => {

                        resolve(response_json);
                    },
                );
            }).catch(e => {
                this.callback_ref && this.callback_ref(false);

            });
        });
    }
}
