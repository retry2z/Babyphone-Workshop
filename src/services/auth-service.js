import axios from 'axios';
import admin from './admin';
import cookieAdmin from './cookie';
import userService from './user-service';

const cookieHandler = cookieAdmin();
const { url } = admin();
const collection = 'auth';

const errorHandler = (data = 0) => {
    const message = {
        0: 'Something went wrong',
        401: 'Wrong email or password',
        400: 'Passwords are not equals',
    }
    const code = data.split(' code ')[1];

    return message[code]
}

const authService = {
    async login(data) {
        try {
            const response = await axios.post(url + collection + '/login', data);
            const isValid = cookieHandler.set(response.data.token);

            if (!isValid) {
                return
            }
            const user = await userService.profile();

            return {
                isValid,
                data: user.data
            }
        }
        catch (e) {
            return {
                isValid: false,
                error: errorHandler(e.message)
            }
        }
    },

    async register(data) {
        try {
            const response = await axios.post(url + collection + '/register', data);
            return {
                isValid: cookieHandler.set(response.data.token)
            }
        }
        catch (e) {
            return {
                isValid: false,
                error: errorHandler(e.message)
            }
        }
    },

}

export default authService;