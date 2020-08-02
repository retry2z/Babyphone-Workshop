import axios from 'axios';
import admin from './admin';
import cookieAdmin from './cookie';

const cookieHandler = cookieAdmin();
const { url } = admin();
const collection = 'user';

const errorHandler = (data = 0) => {
    const message = {
        0: 'Something went wrong',
        403: 'Permission Denied',
        404: 'Page not found',
    }
    const code = data.split(' code ')[1];

    return message[code]
}

const userService = {
    async profile() {
        try {
            const token = cookieHandler.get() || '';

            if (!!token === false) {
                return
            }

            const response = await axios.get(url + collection, {
                headers: {
                    'Authorization': token
                }
            });

            return {
                isValid: true,
                data: response.data
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