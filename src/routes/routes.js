const router = (id, uid) => {

    const navigation = [
        {
            title: "Publications",
            link: "/"
        },
        {
            title: "Share your thoughts",
            link: "/share"
        },
        {
            title: "Profile",
            link: `/user/profile`
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

    return navigation
}

export default router