import { redirect } from "react-router-dom"

export async function isAuth(request) {
    const pathname = new URL(request.url).pathname
    const isLoggedIn = localStorage.getItem("auth")
    
    if(!isLoggedIn) {
        throw redirect(`/login?redirectTo=${pathname}`)
    }
} 