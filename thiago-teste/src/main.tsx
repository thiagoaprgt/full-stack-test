
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';

import { AppLogoutRoutes } from './AppLogoutRoutes.tsx';


createRoot(document.getElementById('root')!).render(
  <BrowserRouter>

    <AppLogoutRoutes />
    
  </BrowserRouter>

)
