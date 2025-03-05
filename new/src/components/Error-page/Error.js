import React from 'react'
import './Error.css'

export default function Error(props) {

   

    


    return (
        <>

            <div className="error">
                <div className="error-message">
                    {props.error_message}
                </div>
            </div>
        </>

    )
}
