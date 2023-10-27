import React from "react";

const TodoCard = ({todo}) =>{

    const { userId,id,title,completed } = todo;

    return(
        <>
        <div className="bg-green-500 p-10  w-[10rem] m-4">
                <p>User ID: {userId}</p>
                <p>ID: {id}</p>
                <p>Title: {title}</p>
                <p>Completed: {completed}</p>
        </div>
        
        </>
    )
}
    
export default TodoCard;