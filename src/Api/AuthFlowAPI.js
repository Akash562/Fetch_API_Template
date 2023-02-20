
import { Service } from '../../Service';
import { animation, horror, comedy, LOGIN } from '../../env';

export class AuthFlowAPI {

    static getanimation = async () => {
        const data = await Service.sendGet(
            animation,
            {},
            {
                spinner: true,
                notify: true,
            },
        );
        return data;
    };

    static gethorror = async () => {
        const data = await Service.sendGet(
            horror,
            {},
            {
                spinner: true,
                notify: true,
            },
        );
        return data;
    };

    static getcomedy = async () => {
        const data = await Service.sendGet(
            comedy,
            {},
            {
                spinner: true,
                notify: true,
            },
        );
        return data;
    };

    static UserLogin = async (email, password) => {
        const data = await Service.sendPost(
            LOGIN,
            {
                email,
                password,
            },
            {
                spinner: true,
                notify: true,
            },
        );
        return data;
    };

}