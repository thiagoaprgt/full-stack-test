
import {Routes, Route } from 'react-router-dom';
import Home from './pages/Home.tsx'


export const AppLogoutRoutes = () => {

    return(        

            <Routes>

                <Route path='/' element={<Home />}></Route>

            </Routes>

        

    );

}