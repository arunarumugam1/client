import { Link } from "react-router-dom";
import Signin from "./signin";
import Signup from "./signup";
import axios from "axios";
import { useState,useEffect } from "react";

export default function Signreg(){

    localStorage.clear()
    const[checkstatus,setCheckstatus] =useState('');


    useEffect(()=>{
        fetch('http://localhost:3000/checkstatus')
        .then(response=>response.json())
        .then(json=>setCheckstatus(json.status));
    },[]);

    return(
        <>
        {checkstatus == 0 ? (
            <Signup />
        ) : (
            <Signin />
        )}
        </>
    )
}