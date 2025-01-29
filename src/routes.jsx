import App from './App'
import ErrorPage from './components/ErrorPage'
import Shopping from './components/Shopping'

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Shopping",
    element: <Shopping />
  },
];

export default routes;