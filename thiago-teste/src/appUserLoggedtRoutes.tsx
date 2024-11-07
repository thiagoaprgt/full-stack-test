import React from 'react';
import {Routes, Route} from 'react-router-dom';
import { AppToDoListPage } from './pages/login/toDo/appToDoListPage';




export const AppUserLoggedtRoutes = () => {

    
        if(sessionStorage.userId != undefined) {

            return(        

                <Routes>
    
                    <Route path='/AppToDoList' element={<AppToDoListPage />}></Route>
    
                </Routes>   
            
    
            )
            
        }
   

   
   

}