import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import router from './routes'
import { GlobalStyle } from 'src/theme/global.style'

const RoutesProvider = () => {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={createBrowserRouter(router)}></RouterProvider>
    </>
  )
}

export default RoutesProvider
