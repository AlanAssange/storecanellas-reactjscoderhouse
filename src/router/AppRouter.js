import React from 'react'
import { Navigate, useRoutes } from 'react-router'
import { CartView } from '../components/CartView'
import { ItemDetailContainer } from '../components/ItemDetailContainer'
import { ItemListContainer } from '../components/ItemListContainer'

export const AppRouter = () => {

    const routes = useRoutes([

        {path: "/", element: <ItemListContainer/>},
        {path: "/productos/:catId", element: <ItemListContainer/>},
        {path: "/detail/:itemId", element: <ItemDetailContainer/>},
        {path: "/cart", element: <CartView/>},
        {path: "*", element: <Navigate to="/"/>}

    ])


    return (
        <div>
            
        </div>
    )
}
