import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import FrontPage from './Pages/FrontPage/FrontPage';

function Routes(){
    return(
        <BrowserRouter>
            <Route path="/" name="Home" component={FrontPage} />
        </BrowserRouter>
    )
}

export default Routes;