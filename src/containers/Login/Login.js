import Navbar from "../../components/Navbar/Navbar";
import Btmbar from "../../components/Btmbar/Btmbar";
import defaultprofile from '../../static/defaultprofile.svg';
import logo from "../../static/hiish.svg";
import React from "react";

function Login(props) {

    const onPassword = (event) => {
        console.log('ur password: ' + event.target.value)
    }

    const changeRoute = () => {
        props.onRouteChange('home')
    }

    return (
    <div className="flex w-screen h-screen">
        <Navbar profile={defaultprofile}/>
        <div className="flex flex-col items-center" style={{width: "70%", marginLeft: '20%'}}>
            <img className="py-6" src={logo} />
            <div className="flex flex-col">
                <p className="px-6 my-7 font-black font-mono text-4xl">Login</p>
                <p className="px-6 mb-6 font-mono text-gray-900 text-md">Welcome to Hiish!(a fake wechat on browser) Hi!(ish)</p>
                <input className="border-b-2 border-indigo-100 p-3 m-3 w-full my-3" placeholder='type anything, not specifically the word anything' type="text"/>
                <input className="border-b-2 border-indigo-100 p-3 m-3 w-full my-3" onChange={onPassword} placeholder='just set "password" as the password' type="password" />
            </div>
            <button onClick={changeRoute} className="transition duration-500 ease-in-out hover:-translate-y-1 hover:bg-red-200 delay-75 bg-red-100 p-5 m-5 rounded-3xl shadow-md" type="button">submit</button>
        </div>
        <Btmbar onRouteChange={props.onRouteChange} route={props.route}/>
    </div>
  );
}

export default Login;