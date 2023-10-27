import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import '../assets/css/home.css'
import StudentCard from "../components/StudentCard";
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
            id: "6548",
            image: "https://uol-v2-space.sgp1.digitaloceanspaces.com/frontend/images/product_images/medium/34065.jpg"
        },
        {
            name: "Some name",
            id: "2298",
            image: "https://uol-v2-space.sgp1.digitaloceanspaces.com/frontend/images/product_images/medium/72175.jpg"
        },
        {
            name: "Some name",
            id: "2298",
            image: "https://uol-v2-space.sgp1.digitaloceanspaces.com/frontend/images/product_images/medium/72175.jpg"
        }
    ]
    useEffect(()=>{
        document.title = "Some title | Home";
      }
      );
    return (
        <>
            <Layout>

                <h1 className=" md:text-red-600 lg:text-green-600 sm:bg-white text-2xl h-40  hover:bg-white flex items-center justify-center">This is homepage</h1>

                <img src={DuckImage} className="w-100 h-auto" />
                    <br/>
                <img src={HandImage} className="w-100 h-auto" />

                <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                </span>
                <br />
                <h2 style={{ backgroundColor: 'orange', fontSize: '3rem' }}>Another text</h2>
                <br />
                <Link to="/about-us">About Us</Link>
                <br />
                <div className="grid grid-cols-4">

                {student.map((item, index) => {
                    return (
                        <div key={index} className="col-span-4 md:col-span-2 lg:col-span-1">
                            <StudentCard name={item.name} id={item.id} image={item.image} />
                        </div>
                    )
                })}

                </div>

                <div className="grid grid-cols-3">
                    <div className="col-span-2">
                    <StudentCard name={"Some name"} id={1} image={"https://uol-v2-space.sgp1.digitaloceanspaces.com/frontend/images/product_images/medium/72175.jpg"} />
                    </div>
                    <div className="col-span-1">
                    <StudentCard name={"Some name"} id={1} image={"https://uol-v2-space.sgp1.digitaloceanspaces.com/frontend/images/product_images/medium/72175.jpg"} />
                    </div>
                    <div className="col-span-1">
                    <StudentCard name={"Some name"} id={1} image={"https://uol-v2-space.sgp1.digitaloceanspaces.com/frontend/images/product_images/medium/72175.jpg"} />
                    </div>
                </div>

            </Layout>

        </>
    );
}

export default Home;