import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './layouts/Main';
import Shop from './components/Shop/Shop';
import Order from './components/Order/Order';
import Inventory from './components/Inventory/Inventory';
import { productandCartloader } from './loaders/productandCartloader';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import Shipping from './components/Shipping/Shipping';
import PrivateRoute from './routes/PrivateRoute';
import ItemDetails from './components/ItemDetails/ItemDetails';



function App() {
  const router= createBrowserRouter([
    {
    path:'/',
    element:<Main/>,
    children:[{
       path:'/shop',
       loader:()=>fetch('http://localhost:5000/data'),
       element:<Shop/>
       
       

    },
   
    {
      path:'/order',
      loader:productandCartloader,
      element:<Order/>
    },
    {
      path:"/shipping",
      element:<PrivateRoute><Shipping/></PrivateRoute>
    },
    {
      path:'/inventory',
      element:<PrivateRoute><Inventory/></PrivateRoute>
    },
    {
      path:'/login',
      element:<Login/>
    },
    {
      path:'/itemdetails',
      element:<ItemDetails/>
    },
    {
      path:'/signup',
      element:<SignUp/>
    }
  ]
   
}])
  return (
    <div className="">
      
    <RouterProvider router={router
    }></RouterProvider>
    
    </div>
  );
}

export default App;


