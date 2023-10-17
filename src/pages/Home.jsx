import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../layouts/Navbar";
import '../assets/css/home.css'
import StudentCard from "../components/StudentCard";
import Footer from "../layouts/Footer";
import Layout from "../layouts/Layout";

import DuckImage from "../assets/images/download.png"

import HandImage from "../assets/images/icons/helping-others.png"

const Home = () => {
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
    return (
        <>
            <Layout>

                <h1 className=" md:text-red-600 lg:text-green-600 sm:bg-white text-2xl h-40  hover:bg-white flex items-center justify-center">This is homepage</h1>

                <img src={DuckImage} className="w-100 h-auto" />
                    <br/>
                <img src={HandImage} className="w-100 h-auto" />

                <span class="relative flex h-3 w-3">
                    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                    <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                </span>
                <br />
                <h2 style={{ backgroundColor: 'orange', fontSize: '3rem' }}>Another text</h2>
                <br />
                <Link to="/about-us">About Us</Link>
                <br />
                {student.map((item) => {
                    return (
                        <StudentCard name={item.name} id={item.id} image={item.image} />
                    )
                })}

            </Layout>

        </>
    );
}

export default Home;