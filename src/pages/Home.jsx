import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../layouts/Navbar";
import '../assets/css/home.css'
import StudentCard from "../components/StudentCard";

const Home = () =>{
    let name = "Jisun Aurnob";
    let id = '12435';

    let student = [
        {
            name: "Jisun Aurnob",
            id: "16161",
            image: "https://uol-v2-space.sgp1.digitaloceanspaces.com/frontend/images/product_images/medium/72175.jpg"
        },
        {
            name: "Student 2",
            id: "16161",
            image: "https://uol-v2-space.sgp1.digitaloceanspaces.com/frontend/images/product_images/medium/34065.jpg"
        },
        {
            name: "Some name",
            id: "16161",
            image: "https://uol-v2-space.sgp1.digitaloceanspaces.com/frontend/images/product_images/medium/72175.jpg"
        }
    ]
    return(
        <>
        <Navbar />
            <h1 className="home-header">This is homepage</h1>
            <br />
            <h2 style={{backgroundColor:'orange', fontSize: '3rem'}}>Another text</h2>
            <br/>
            <Link to="/about-us">About Us</Link>
            <br/>
            {student.map((item)=>{
                return(
                    <StudentCard name={item.name} id={item.id} image={item.image} />
                )
            })}
            {/* <StudentCard name={name} id={id} />
            <StudentCard name={"abcd"} id={'545'} />
            <StudentCard name={"kjasm"} id={'151'} /> */}
        </>
    );
}

export default Home;