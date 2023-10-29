import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../assets/css/home.css'
import Layout from "../layouts/Layout";
import axios from "axios";
const ContactUs = () => {
    const [data, setData] = useState();

    const [users, setUsers] = useState([])

    const [title, setTitle] = useState('');
    const [bodyText, setBodyText] = useState('');
    const [userId, setUserId] = useState(0);

    // useEffect(()=>{
    //     fetch("https://jsonplaceholder.typicode.com/todos")
    //     .then(response => {
    //       return response.json()
    //     })
    //     .then(data => {
    //       setUsers(data)
    //     })
    // }, []);

    // console.log("Title: "+title);

    const [responseData, setResponseData] = useState();

    const submitForm = (e) => {
        e.preventDefault();
        // console.log("Inside submit form");

        axios.post("https://jsonplaceholder.typicode.com/posts", {
            title: title,
            body: bodyText,
            userId: userId
        })
        .then(response => {
            console.log(response);
            setResponseData(response.data);
        })
        .catch(error =>{
            console.log(error);
        })
    }

    return (
        <>
            <Layout>

                <h1 className=" md:text-red-600 lg:text-green-600 sm:bg-white text-2xl h-40  hover:bg-white flex items-center justify-center">Contact Us Page</h1>


                <div className="w-100 flex justify-center items-center">
                    <div className="w-[30rem]">
                    <form method="post" onSubmit={(e) => submitForm(e)}>
                    <div class="relative z-0 w-full mb-6 group">
                        <input type="text" name="title" id="title" value={title} onChange={(e)=>setTitle(e.target.value)}
                        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label for="title" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter your title</label>
                    </div>
                    <div class="relative z-0 w-full mb-6 group">
                        <input type="text" name="body" id="body" value={bodyText} onChange={(e)=>setBodyText(e.target.value)}
                        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label for="body" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter your body text</label>
                    </div>
                    <div class="relative z-0 w-full mb-6 group">
                        <input type="number" name="userId" id="userId" value={userId} onChange={(e)=>setUserId(e.target.value)}
                        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label for="userId" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">UserID Here</label>
                    </div>
                    <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                </form>

                <div className="my-6 bg-slate-400 p-4">
                        {responseData && (
                            <div>
                                <p>{responseData.title}</p>
                                <p className="fw-bold text-red-600">{responseData.id}</p>
                            </div>
                        )}
                    </div>
                    </div>

                   
                </div>


            </Layout>

        </>
    );
}

export default ContactUs;