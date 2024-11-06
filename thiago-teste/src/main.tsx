
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';

import { AppLogoutRoutes } from './appLogoutRoutes.tsx';
import { AppUserLoggedtRoutes } from './appUserLoggedtRoutes.tsx';


createRoot(document.getElementById('root')!).render(
  <BrowserRouter>

    <AppLogoutRoutes />
    <AppUserLoggedtRoutes />
    
  </BrowserRouter>

)
