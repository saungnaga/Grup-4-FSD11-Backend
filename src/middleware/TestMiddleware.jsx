/* eslint-disable react/prop-types */
import { useEffect } from "react"

export const TestMiddleware = (props) => {
    useEffect(() => {
        console.log('Test Middleware')
    });
    return <>{props.children}</>
}