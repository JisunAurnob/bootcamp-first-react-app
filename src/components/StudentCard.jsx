import React from "react";

const StudentCard = (props) =>{

    return(
        <>
        <div className="student_card" style={{margin: '2rem'}}>
            <p>Name: {props.name}</p>
            <p>ID: {props.id}</p>
            <img src={props.image} width={200} />
        </div>
        </>
    )
}

export default StudentCard;