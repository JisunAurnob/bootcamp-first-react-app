import React, { useEffect, useState } from "react";
import { Link, useParams, useRouteError } from "react-router-dom";
import Navbar from "../layouts/Navbar";
import Layout from "../layouts/Layout";

const StudentDetails = () =>{

    const { id, name } = useParams();

    const [firstName, setFirstName] = useState('');

    const [lastName, setLastName] = useState('');

    const [district, setDistrict] = useState();

    const [upazila, setUpazila] = useState();

    const [deliveryCharge, setDeliveryCharge] = useState();

    useEffect(()=>{
      document.title = "Website Title | "+name;
      console.log("use effect triggured");

    });

    useEffect(()=>{
      
      if(district=='Dhaka'){
        setDeliveryCharge(60);
      }
      else{
        setDeliveryCharge(120);
      }

    },[district]);
  
    // let x ="asd";

    // x= "lll";
    // setFirstName("Some value");
    console.log(firstName);

    let location =[
      {
        name: 'dhaka',
        details: {
          zip: 1203,
          area: {
            name: 'Bashundhara',
            someData: [
              {
                name: "jisun",
                id: 'abc'
              },
              {
                name: "other name",
                id: 'abc'
              },
              {
                name: "rahim name",
                id: 'abc'
              }
            ]
          }
        }
      },
      {
        name: 'dhaka',
        details: {
          zip: 1203,
          area: {
            name: 'Bashundhara',
            someData: [
              {
                name: "asd",
                id: 'abc'
              },
              {
                name: "asd name",
                id: 'abc'
              },
              {
                name: "rahim name",
                id: 'abc'
              }
            ]
          }
        }
      },
      {
        name: 'dhaka',
        details: {
          zip: 1203,
          area: {
            name: 'Bashundhara',
            someData: [
              {
                name: "asd",
                id: 'abc'
              },
              {
                name: "asd name",
                id: 'abc'
              },
              {
                name: "rahim name",
                id: 'abc'
              }
            ]
          }
        }
      }
    ]
    return(
        <div>
            <Layout>

                <h1>Getting Location </h1>

                {location.map((data, index) => {
                    return (
                        <div key={index} className="col-span-4 md:col-span-2 lg:col-span-1">
                      {data.details.area.someData.map((item, index) => {
                    return (
                        <div key={index} className="col-span-4 md:col-span-2 lg:col-span-1">
                            <h1>{item.name}</h1>
                        </div>
                    )
                })}
                        </div>
                    )
                })}

            
                <h1 className="px-4"> The id is {id}</h1>
                <h1 className="px-4"> The name is {name}</h1>

              <center>
              <form className="w-60">
               <div className="form-group mb-4">
                    <label htmlFor="login_username" className="block text-gray-700 text-sm font-bold mb-2">First name</label>
                    <input
                      type="text"
                      name="first_name"
                      id="first_name"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      placeholder="First name*"
                      required
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </div>
                    <input type="text" name="last_name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={lastName} onChange={(e)=>setLastName(e.target.value)} />
                  <button className="ms-2 md:ms-5 py-3 px-6 md:py-3 md:px-6 bg-blue-500 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                   type="submit">Submit</button>
               </form>

               <h4 className="tex-red-500">
                Firstname: {firstName} <br/>
                LastName: {lastName} <br/>
               </h4>
              </center>

              <select className="border border-cyan-800 w-60 h-10" name="district" value={district} onChange={(e)=>setDistrict(e.target.value)}>
              <option value={null}>Select district</option>
                <option value={'Dhaka'}>Dhaka</option>
                <option value={'Rajshahi'}>Rajshahi</option>
              </select>

              <select className="border border-cyan-800 w-60 h-10" name="district" value={upazila} onChange={(e)=>setUpazila(e.target.value)}>
              <option value={null}>Select upazilla</option>
                {district=='Dhaka' && (
                  <>
                  <option value={'Bashundhara'}>Bashundhara</option>
                  <option value={'Uttara'}>Uttara</option>
                  </>
                )}
                {district=='Rajshahi' && (
                  <>
                  <option value={'Chapainababganj'}>Chapainababganj</option>
                  <option value={'Natore'}>Natore</option>
                  </>
                )}
              </select>

                  <h1 className="text-red-500 fw-600">Delivery Charge is {deliveryCharge}</h1>

            </Layout>
           
        </div>
    );
}

export default StudentDetails;