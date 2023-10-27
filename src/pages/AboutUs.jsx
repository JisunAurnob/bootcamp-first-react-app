import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../layouts/Navbar";
import StudentCard from "../components/StudentCard";
import SomeComponent from "../components/SomeComponent";

const AboutUs = () =>{

    return(
        <div>
            <Navbar />
            <h1>This is about us</h1>
            <br />
            <h2>Another text</h2>
            <Link to={'/'}>Home</Link>

            <SomeComponent />

             </div>
    );
}

export default AboutUs;