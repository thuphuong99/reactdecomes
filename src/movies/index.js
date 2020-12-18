import React, { lazy, Suspense } from 'react';
import { Skeleton } from 'antd';
import {
    BrowserRouter as Router,
    Switch,
    Route,
   
} from "react-router-dom";

const HomeComponent = lazy(() => import('./pages/home'));
const UpcomingComponent = lazy(() => import('./pages/up-coming'));
const SearchComponent = lazy(() => import('./pages/searchs'));

const Movies = () => {
    return (
        <Router>
            <Suspense
                fallback={<Skeleton active />}
            >
                <Switch>
                    <Route path="/home">
                        <HomeComponent />

                    </Route>
                    <Route path="/up-coming">
                        <UpcomingComponent />

                    </Route>
                    <Route path="/searchs">
                        <SearchComponent />
                    </Route>
                    <Route exact path="/">
                        <HomeComponent />

                    </Route>
                </Switch>
            </Suspense>
        </Router>
    )
}
export default Movies;
