import React from "react"
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements, redirect } from "react-router-dom"
import Login, { loader as loginLoader, action as loginAction } from "./pages/Login"
import NotFound from "./pages/NotFound"
import MenuPage, { loader as menuLoader} from "./pages/MenuPage"
import './App.css'
import HomePage from "./pages/HomePage"
import Layout from "./pages/Layout"
import Cart from "./pages/Cart"

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<HomePage />} />
    <Route path="menu" element={<MenuPage />} loader={menuLoader} />
    <Route path="login" element={<Login />} action={loginAction} loader={loginLoader} />
    <Route path="cart" element={<Cart />} action={cartAction} loader={cartLoader} />
    <Route path="*" element={<NotFound />} />
  </Route>

))

function App() {
  return (
    <RouterProvider router={router} />
  )
}
export default App
