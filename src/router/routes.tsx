import { RouteObject } from 'react-router-dom'
import Main from 'src/pages/main/Main'
import NotFound from 'src/pages/notfound/NotFound'

const router: RouteObject[] = [
  {
    path: '/',
    element: <Main />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]

export default router
