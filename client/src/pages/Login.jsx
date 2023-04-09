import React, { useState } from 'react'
import { useLoaderData, useNavigation, useActionData, Form, redirect } from "react-router-dom"

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function fakeLoginUser(creds) {
    await sleep(1000)
    const regex = /^[a-zA-Z0-9]{1,20}$/;
    if (regex.test(creds)) {
        localStorage.setItem("auth", true)
        return {
            name: creds,
            token: "1234567890abcdef"
        }
    }
    throw new Error("Username must be 1-20 alphanumeric characters!")
}

export async function loader() {
    //get restaurant data
    const obj = {
        restaurantName: "Noma",
        tableNumber: 1
    }
    return obj
}

export async function action({ request }) {
    const formData = await request.formData();
    const username = formData.get("username")


    const pathname = new URL(request.url).searchParams.get("redirectTo") || "/menu"
    try {
        const user = await fakeLoginUser(username)
        return redirect(pathname)
    } catch(err) {
        return err.message
    }
}

const Login = () => {

    const errorMessage = useActionData();
    const restaurantTableData = useLoaderData();
    const navigation = useNavigation();


    return (
        <>
            <div>Welcome to {restaurantTableData.restaurantName}</div>
            <h1>Your Table number: {restaurantTableData.tableNumber}</h1>
            {errorMessage && <h4>{errorMessage}</h4>}
            <Form method='post' replace>
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                />
                <button type="submit" disabled={navigation.state === "submitting"}>
                    {navigation.state === "submitting" ? "Logging in ..." : "Log In"}
                </button>
            </Form>
        </>
    )
}

export default Login