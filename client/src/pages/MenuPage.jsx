import React from 'react'
import { redirect, useLoaderData } from 'react-router-dom'
import { isAuth } from '../utils'

export async function loader({ request }) {
    await isAuth(request)
    return null
}

const MenuPage = () => {
    console.log("menu")
    return (
        <div>Menu Page</div>
    )
}

export default MenuPage