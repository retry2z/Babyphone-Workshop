import axios from 'axios';
import admin from './admin';
import cookieAdmin from './cookie';

const cookieHandler = cookieAdmin();
const { url } = admin();
const collection = 'user';

const errorHandler = (data = 0) => {
    const message = {
        0: 'Something went wrong',
        401: 'Wrong email or password',
        400: 'Passwords are not equals',
    }
    const code = data.split(' code ')[1];

    return message[code]
}

const userService = {
    async profile(uid) {
        try {
            const response = await axios.get(url + collection + '/login' + uid);
            return {
                isValid: cookieHandler.set(response.data)
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

export default userService;