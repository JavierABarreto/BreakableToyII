import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './views/App.tsx'
import { Provider } from 'react-redux'
import store from './js/redux/store.tsx'
import { router } from './js/router.tsx'
import { RouterProvider } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
