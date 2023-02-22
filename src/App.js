import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './layouts/Main';
import Shop from './components/Shop/Shop';
import Order from './components/Order/Order';
import Inventory from './components/Inventory/Inventory';



function App() {
  const router= createBrowserRouter([
    {
    path:'/',
    element:<Main/>,
    children:[{
       path:'/',
       loader:()=>fetch('products.json'),
       element:<Shop/>

    },
   
    {
      path:'/order',
      loader:()=>fetch('products.json'),
      element:<Order/>
    },
    {
      path:'/inventory',
      element:<Inventory/>
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


