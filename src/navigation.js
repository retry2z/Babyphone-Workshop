import React, { Suspense } from 'react'
import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom'

// import Publications from './pages/publications'
// import ShareThoughtsPage from './pages/share-thoughts'
// import RegisterPage from './pages/register'
// import LoginPage from './pages/login'
// import ProfilePage from './pages/profile'
// import ErrorPage from './pages/error'

// const Navigation = () => {

//   return (
//     <BrowserRouter>
//       <Switch>
//         <Route path="/" exact component={Publications} />
//         <Route path="/share" component={ShareThoughtsPage} />
//         <Route path="/register" component={RegisterPage} />
//         <Route path="/login" component={LoginPage} />
//         <Route path="/profile/:uid" component={ProfilePage} />
//         <Route component={ErrorPage} />
//       </Switch>
//     </BrowserRouter>
//   )
// }

const LazyPublications = React.lazy(() => import('./pages/home-page/home'));
const LazyShare = React.lazy(() => import('./pages/share-you-thoughts/share'));

const LazyNavigation = () => {

    return (
        <BrowserRouter>
            <Switch>
                <Suspense fallback={<h1>Loading..</h1>}>
                    <Route path="/" exact component={LazyPublications} />
                    <Route path="/share" exact component={LazyShare} />

                </Suspense>
            </Switch>
        </BrowserRouter>
    )
}

export default LazyNavigation