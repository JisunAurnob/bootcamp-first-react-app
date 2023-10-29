import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../assets/css/home.css'
import StudentCard from "../components/StudentCard";
import Layout from "../layouts/Layout";

import DuckImage from "../assets/images/download.png"

import HandImage from "../assets/images/icons/helping-others.png"
import TodoCard from "../components/TodoCard";
import axios from "axios";

const Products = () => {
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
        },
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
        },
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
        },
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
        },
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
        },
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
        },
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
        },
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
        },
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
        },
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
        },
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
        },
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
    const [data, setData] = useState();
   
    const [users, setUsers] = useState([])

    // useEffect(()=>{
    //     fetch("https://jsonplaceholder.typicode.com/todos")
    //     .then(response => {
    //       return response.json()
    //     })
    //     .then(data => {
    //       setUsers(data)
    //     })
    // }, []);

    const [toDo, setToDo] = useState()

    useEffect(()=>{

        axios.get("https://jsonplaceholder.typicode.com/todos")
        .then(response => {
            console.log(response);
            if(response.status==200){
                setToDo(response.data);
            }
        })
        .catch(error =>{
            console.log(error);
        })

    },[])


    // console.log(toDo);
    return (
        <>
            <Layout>

                <h1 className=" md:text-red-600 lg:text-green-600 sm:bg-white text-2xl h-40  hover:bg-white flex items-center justify-center">Products Page</h1>

                <div className="grid grid-cols-4">

                    {toDo && toDo.map((item, key) =>{
                        return (
                            <TodoCard key={key} todo={item} />
                        )
                    })}

                {/* {student.map((item, index) => {
                    return (
                        <div key={index} className="col-span-4 md:col-span-2 lg:col-span-1">
                            <StudentCard name={item.name} id={item.id} image={item.image} />
                        </div>
                    )
                })} */}

                </div>

            </Layout>

        </>
    );
}

export default Products;