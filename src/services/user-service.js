import axios from 'axios';
import admin from './admin';
import cookieAdmin from './cookie';

const cookieHandler = cookieAdmin();
const { url } = admin();
const collection = 'user/';

const errorHandler = (data = 0) => {
    const message = {
        0: 'Something went wrong',
        400: 'Passwords are not equals',
        401: 'Unauthorized',
        403: 'Permission Denied',
        404: 'Page not found',
        500: 'Please Re-Authenticate'
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

    async update(data) {
        try {
            const token = cookieHandler.get() || '';

            if (!!token === false) {
                return
            }

            const response = await axios.patch(url + collection, data, {
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

    async myRooms() {
        try {
            const token = cookieHandler.get() || '';

            if (!!token === false) {
                return
            }

            const response = await axios.get(url + collection + 'rooms', {
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

    async changePassword(data) {
        try {
            const token = cookieHandler.get() || '';

            if (!!token === false) {
                return
            }

            const response = await axios.put(url + collection + 'password', data,{
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

    async logout() {
        try {
            const token = cookieHandler.get() || '';

            if (!!token === false) {
                return
            }

            const response = await axios.get(url + collection + 'logout', {
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

    async current() {
        try {
            const token = cookieHandler.get() || '';

            if (!!token === false) {
                return
            }

            const response = await axios.get(url + collection + 'current', {
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