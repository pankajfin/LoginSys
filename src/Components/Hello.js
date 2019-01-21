import React from 'react'
// import { cookie-session } from "cookie-session";

const Hello = (props) => {
    console.log("HELLO : ", props)
    return (
        <div>
           Welcome {props.location.state}
        </div>
    )
}

export default Hello