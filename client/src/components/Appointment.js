
  
import React from 'react';
import SoapImg from '../images/soap.png';
import ClippersImg from '../images/nail-clippers.png';


const Appointment = (props) => {

  const ServiceImg = ()=>{
    if (props.appointment.service === "Shampoo & Condition"){
      return SoapImg
    } else if (props.appointment.service === 'Haircut'){
      return ClippersImg
    } else{
      return ClippersImg
    }
  }

  // console.log("service: ", props.appointment.service)

  const handleClick=()=>{
    fetch(`http://127.0.0.1:3000/appointments/${props.appointment.id}`, {
            method: "DELETE",
            headers: {
              "authorization": localStorage.token
            }
        })
        .then(res => res.json())
        .then(deletedAppointment =>{
            console.log("This is the Appointment you just destroyed: ", deletedAppointment)
            props.deleteAppointment(deletedAppointment)
        })
  }

  return <div className="pet-container">
    <img src={ServiceImg()} alt="drawing of service" id="service-img"></img>
    <div className="appointment-info">
      <h3>{props.appointment.service}</h3>
      <p>{props.appointment.date} @ {props.appointment.time}</p>
      <p>{props.appointment.location}</p>
    </div>
    <button className="delete" onClick={handleClick}>X</button>
  </div>
};

export default Appointment;