// import React, { Suspense } from 'react'
import React, { useContext } from 'react'

import {
    BrowserRouter,
    Switch,
    Route,
    Redirect,
} from 'react-router-dom';

import HomePage from './pages/home-page/home';
import RoomPage from './pages/room-page/room';
import ProfilePage from './pages/profile-page/profile';
import LogoutPage from './pages/logout-page/logout';

import RegisterPage from './pages/register-page/register';
import LoginPage from './pages/login-page/login';
import ErrorPage from './pages/404-page/notFound';

import Contexts from './Contexts';
const { UserContext } = Contexts();

const Navigation = () => {
    const context = useContext(UserContext);


    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/auth/login" component={LoginPage} />
                <Route path="/auth/register" component={RegisterPage} />

                {context.isLogged ?
                    <>
                        <Route path="/product/details/:id" component={RoomPage} />

                        <Route path="/user/profile" component={ProfilePage} />
                        <Route path="/user/logout" component={LogoutPage} />
                    </>
                    :
                    <Redirect to='/' />
                }
                <Route component={ErrorPage} />
            </Switch>
        </BrowserRouter >
    )
}

// const LazyPublications = React.lazy(() => import('./pages/home-page/home'));
// const LazyShare = React.lazy(() => import('./pages/share-you-thoughts/share'));

// const LazyNavigation = () => {

//     return (
//         <BrowserRouter>
//             <Switch>
//                 <Suspense fallback={<h1>Loading..</h1>}>
//                     <Route path="/" exact component={LazyPublications} />
//                     <Route path="/share" exact component={LazyShare} />

//                 </Suspense>
//             </Switch>
//         </BrowserRouter>
//     )
// }

export default Navigation