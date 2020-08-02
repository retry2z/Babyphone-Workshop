const headerLinks = (isLogged = false) => {
    const user = [
        {
            title: "Rooms",
            link: "/"
        },
        {
            title: "Create a room",
            link: `/product/create`
        },
        {
            title: "Profile",
            link: `/user/profile`
        },
        {
            title: "Logout",
            link: `/user/logout`
        },
    ];

    const guest = [
        {
            title: "Rooms",
            link: "/"
        },
        {
            title: "Register",
            link: "/auth/register"
        },
        {
            title: "Login",
            link: "/auth/login"
        }
    ];

    return isLogged ? user : guest
}

export default headerLinks