import React, { useEffect } from 'react'
import logo from '../../../images/flirtify-logos.png'
import { Link } from 'react-router-dom'
import Loader from '../../Loader/Loader';
import './Navbar.css'
import { useState } from 'react';
import sidebar from '../../../images/sidebar.png'


export default function Navbar(props) {

    const [account, setaccount] = useState()
    const [photo, setphoto] = useState()
    const { setloggedin } = props
    const [display, setdisplay] = useState(true)
    const [ids, setids] = useState("")

    useEffect(() => {

        setdisplay(true)
        fetch(`http://localhost:8000/dating/auth/token`, {

            method: 'GET',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            withCredentials: true,
            credentials: 'include'
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.status === 200) {
                    setloggedin(true)
                    setaccount(data.name)
                    setphoto(data.photo)
                    setdisplay(false)
                }
                else {
                    setloggedin(false)
                    setdisplay(false)
                }



            })
        // eslint-disable-next-line
    }, [])
    function idchange() {
        if (ids === "") {

            setids("navbar-components-click")
        }
        else if (ids === "navbar-components-click") {
            setids("navbar-components-rev-click")
        }
        else if (ids === "navbar-components-rev-click") {
            setids("navbar-components-click")
        }

    }



    return (

        <>
            {display ? <Loader /> : <>  <div className='navbar'>
                <img className='logo' src={logo} alt="" />

                <div className="space">

                </div>


                <div className="side-button" >
                    <img src={sidebar} alt="" className='side-image' onClick={idchange} />
                    {props.loggedin ? <>
                        <div className="component " id='profile-extr'>
                            <div className="profile-part">
                                <div className="account">Hi,{account}</div>
                                <div className="profile-container">

                                    <img src={photo} alt="" className="profile-image" />
                                    <div className="dropdown-container">
                                        <Link to='/dashboard'>     <div className="dropdown-item "> <button className="login-buttons"  >

                                            Dashboard
                                        </button>
                                        </div>
                                        </Link>
                                        <div className="dropdown-item "> <button className="login-buttons"  >
                                            Dark Mode
                                        </button>
                                        </div>
                                        <div className="dropdown-item "> <button className="login-buttons"  >
                                            Help
                                        </button>
                                        </div>


                                    </div>
                                </div>


                            </div>

                        </div>
                        {/* <div className="component logout"> <button className="login-button" onClick={logout} >
                            Logout
                        </button>
                        </div> */}


                    </>
                        : null}
                </div>


                <div className="navbar-components" id={ids}>
                    <div className="component" id='home'> <Link to='/'>Home</Link><div className="underline"></div></div>
                    <div className="component" id='contact'><a href='/'>Contact</a><div className="underline"></div></div>
                    <div className="component" id='about'><a href='/'>About</a><div className="underline"></div></div>
                    <div className="component" id='reviews'><a href='/'>Reviews</a><div className="underline"></div></div>



                    {props.loggedin ? <>
                        <div className="component " id='profile'>
                            <div className="profile-part">
                                <div className="account">Hi,{account}</div>
                                <div className="profile-container">

                                    <img src={photo} alt="" className="profile-image" />
                                    <div className="dropdown-container">
                                        <Link to='/dashboard'>     <div className="dropdown-item "> <button className="login-buttons"  >

                                            Dashboard
                                        </button>
                                        </div>
                                        </Link>
                                        <div className="dropdown-item "> <button className="login-buttons"  >
                                            Dark Mode
                                        </button>
                                        </div>
                                        <div className="dropdown-item "> <button className="login-buttons"  >
                                            Help
                                        </button>
                                        </div>


                                    </div>
                                </div>


                            </div>

                        </div>
                        {/* <div className="component logout"> <button className="login-button" onClick={logout} >
                            Logout
                        </button>
                        </div> */}


                    </>
                        : <>   <div className="component login"> <Link to='/login'><button className="login-button">
                            LogIn
                        </button></Link>
                        </div>
                            <div className="component sign-up ">
                                <Link to='/signup'> <button className="sign-up-button">
                                    SignUp
                                </button></Link>
                            </div></>}


                </div>
            </div></>}

        </>

    )
}
