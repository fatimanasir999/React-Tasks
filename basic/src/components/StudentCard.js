import React from "react";
function StudentCard(props){
    return(
        <div>
            <p>Name:{props.name}</p>
            <p>Semester:{props.sem}</p>
            <p>Degree:{props.degree}</p>
        </div>


    );

}
export default StudentCard;