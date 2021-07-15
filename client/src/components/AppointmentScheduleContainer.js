
import React from 'react';
import AppointmentSchedule from './AppointmentSchedule';
import {useParams} from "react-router-dom";
import { useHistory } from "react-router";



const AppointmentScheduleContainer = (props) => {

    let history = useHistory();
    let {petId} = useParams();

    // const findPet =()=>{
    //     if(props.user.pets){
    //         console.log(props.user.pets.find(animal => animal.id === parseInt(petId)))
    //         return props.user.pets.find(animal => animal.id === parseInt(petId))
    //     } else{
    //         return {
    //             name: '',
    //             species: '',
    //             age: 0
    //         }
    //     }
    // } 

    const pet = props.user.pets.find(animal => animal.id === parseInt(petId))


    const goBackToPets= ()=>{
        history.push("/household")
    }

    return <article className="wrapper">
        <h2>{pet.name}'s appointments</h2>
        <AppointmentSchedule petId={petId} pet={pet} user={props.user} deleteAppointment={props.deleteAppointment}/>
        <button className="back" onClick={goBackToPets}>back to pets</button>
    </article>
};

export default AppointmentScheduleContainer;