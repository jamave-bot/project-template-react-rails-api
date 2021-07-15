import React from 'react';
import Appointment from '../components/Appointment';
import { useHistory } from 'react-router';

const AppointmentSchedule = (props) => {

    let history = useHistory()
    const goToNewAppointment = () =>{
        history.push(`/${[props.petId]}/newAppointment`)
    }

    let animalAppointments = ()=>{
        console.log(props.user.appointments)
        return props.user.appointments.filter(appointment => appointment.pet_id === parseInt(props.petId))
    }

    const showAppointments = ()=>{
        if (props.user.appointments){
            return animalAppointments().map(appointment=><Appointment key={appointment.id} pet={props.pet} user={props.user} appointment={appointment} deleteAppointment={props.deleteAppointment}/>)
        }
    }


    return <section className="wrapper">
        {/* <Appointment />
        <Appointment />
        <Appointment /> */}
        {showAppointments()}
        <button className="add" onClick={goToNewAppointment}>schedule appointment</button>
    </section>
};

export default AppointmentSchedule;