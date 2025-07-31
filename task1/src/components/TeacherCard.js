import React from 'react';

function TeacherCard(props) {
  
  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '15px',
      margin: '10px',
      backgroundColor: '#f9f9f9'
    }}>
            <p>Name:{props.name}</p>
            <p>Subject:{props.sub}</p>
            <p>Experience:{props.exp}</p>
            <p>School:{props.school}</p> 
            <img src={props.img} alt="teacher image" style={{width:"150px"}} />     
            
    </div>
  );
}

export default TeacherCard;