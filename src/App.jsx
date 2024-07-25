import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import {Cocktail,About,Error,HomeLayout,Landing,Newsletter,SinglePageError,SingleCocktail} from './pages'
import {loader as landingLoader} from './pages/Landing'
import {loader as singleCardLoader} from './pages/SingleCocktail';
import { action as newsLetterAction } from './pages/Newsletter';
import {ToastContainer} from 'react-toastify'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClient,QueryClientProvider } from '@tanstack/react-query';
const queryClient  = new QueryClient({
  defaultOptions:{
    queries:{
      staleTime: 5 *60 *1000
    }
  }
});


const routes = createBrowserRouter([
  {
    path:'/',
    element:<HomeLayout />,
    errorElement:<Error/>,
    children:[
      {
        index:true,
        element:<Landing />,
        errorElement:<SinglePageError />,
        loader: landingLoader(queryClient),
      },
      {
        path:'about',
        element:<About />
      },
      {
        path:'Cocktail',
        element:<Cocktail />
      },
      {
        path:'newsletter',
        element:<Newsletter />,
        action: newsLetterAction
      },
      {
        path:'/cocktail/:id',
        element: <SingleCocktail />,
        errorElement:<SinglePageError />,
        loader: singleCardLoader(queryClient)
      }
    ]
  },

])
const App = () => {
  return <>
    <QueryClientProvider client={queryClient}>
      <ToastContainer position='top-left' autoClose={2000} />
        <RouterProvider router={routes}></RouterProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  </>
};
export default App;
