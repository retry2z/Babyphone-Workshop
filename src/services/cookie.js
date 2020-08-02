const cookieAdmin = () => {
    const name = 'x-auth-token';

    const set = (data = null) => {
        if (!data) {
            return false;
        }

        const value = `Bearer ${data}`;
        const date = new Date();
        
        date.setTime(date.getTime() + (24 * 60 * 60 * 1000));
        const expires = "expires=" + date.toUTCString();

        document.cookie = name + "=" + value + ";" + expires + ";path=/";

        return true
    };

    const get = () => {
        const cookieValue = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
        return cookieValue ? cookieValue[2] : false;
    }

    const remove = () => {
        const expires = "expires=Thu, 01 Jan 1970 00:00:00 GMT";

        document.cookie = name + "=;" + expires + ";path=/";

        return true
    }

    return {
        set,
        get,
        remove,
    }
}

export default cookieAdmin