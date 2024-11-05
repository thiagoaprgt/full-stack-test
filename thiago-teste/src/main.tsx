
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';

import { AppLogoutRoutes } from './appLogoutRoutes.tsx';


createRoot(document.getElementById('root')!).render(
  <BrowserRouter>

    <AppLogoutRoutes />
    
  </BrowserRouter>

)
