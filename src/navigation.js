// import React, { Suspense } from 'react'
import React from 'react'

import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom'

import Publications from './pages/home-page/home';
import ShareThoughtsPage from './pages/share-you-thoughts/share';
import ProfilePage from './pages/profile-page/profile';
import RegisterPage from './pages/register-page/register';
import LoginPage from './pages/login-page/login';
import ErrorPage from './pages/404-page/notFound';


const Navigation = () => {

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Publications} />
                <Route path="/share" component={ShareThoughtsPage} />
                <Route path="/user/profile" component={ProfilePage} />
                <Route path="/auth/login" component={LoginPage} />
                <Route path="/auth/register" component={RegisterPage} />
                <Route component={ErrorPage} />
            </Switch>
        </BrowserRouter>
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