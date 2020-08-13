// import React, { Suspense } from 'react'
import React from 'react'

import {
    BrowserRouter,
    Switch,
    Route,
} from 'react-router-dom';

import AuthGuard from './authGuard';

import HomePage from '../pages/home-page/home';
import RoomPage from '../pages/room-page/room';
import ProfilePage from '../pages/profile-page/profile';
import ProfileImageUploadPage from '../pages/profile-page-upload-image/profile-update-image';
import LogoutPage from '../pages/logout-page/logout';
import CreateRoomPage from '../pages/create-room-page/create';

import RegisterPage from '../pages/register-page/register';
import LoginPage from '../pages/login-page/login';
import ErrorPage from '../pages/404-page/notFound';

const Navigation = () => {

    return (
        <BrowserRouter>
            <Switch>
                <AuthGuard path='/' exact={true} component={HomePage} validate={false} />

                <AuthGuard
                    path='/auth/login'
                    component={LoginPage}
                    redirect='/'
                />
                <AuthGuard
                    path='/auth/register'
                    component={RegisterPage}
                    redirect='/'
                />

                <AuthGuard path='/product/details/:id' component={RoomPage} validate={false} />

                <AuthGuard path='/product/create'
                    component={CreateRoomPage}
                    authorization={true}
                    redirect='/auth/login'
                />


                <AuthGuard path='/user/profile/image/upload'
                    component={ProfileImageUploadPage}
                    authorization={true}
                    redirect='/auth/login'
                />
                <AuthGuard path='/user/profile'
                    component={ProfilePage}
                    authorization={true}
                    redirect='/auth/login'
                />
                <AuthGuard path='/user/logout'
                    component={LogoutPage}
                    authorization={true}
                    redirect='/auth/login'
                />

                <Route component={ErrorPage} />
            </Switch>
        </BrowserRouter >


        // <BrowserRouter>
        //     <Switch>
        //         <Route path='/' exact={true} component={HomePage} />

        //         <Route path='/auth/login'>
        //             {context.isLogged ? (<Redirect to="/" />) : (<LoginPage />)}
        //         </Route>

        //         <Route path='/auth/register'>
        //             {context.isLogged ? (<Redirect to="/" />) : (<RegisterPage />)}
        //         </Route>

        //         <Route path='/product/details/:id' component={RoomPage} />

        //         <Route path='/product/create'>
        //             {context.isLogged ? (<CreateRoomPage />) : (<Redirect to="/login" />)}
        //         </Route>

        //         <Route path="/user/profile">
        //             {context.isLogged ? (<ProfilePage />) : (<Redirect to="/login" />)}
        //         </Route>

        //         <Route path="/user/logout">
        //             {context.isLogged ? (<LogoutPage />) : (<Redirect to="/login" />)}
        //         </Route>

        //         <Route component={ErrorPage} />
        //     </Switch>
        // </BrowserRouter >
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