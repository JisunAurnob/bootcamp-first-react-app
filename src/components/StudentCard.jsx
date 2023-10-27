import React from "react";
import { Link } from "react-router-dom";
import SomeComponent from "./SomeComponent";

const StudentCard = (props) =>{

    return(
        <>
        <Link to={"/student-details/"+props.id+"/"+props.name}>
        <div className="student_card" style={{margin: '2rem'}}>
            <p>Name: {props.name}</p>
            <p>ID: {props.id}</p>
            <img src={props.image} width={200} />
        </div>
        </Link>
        {/* <SomeComponent  /> */}
        </>
    )
}
    
export default StudentCard;