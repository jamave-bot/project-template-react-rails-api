
import React, {useState} from 'react';
import { useHistory } from "react-router";
import {useParams} from "react-router-dom";


const AppointmentForm = (props) => {

    const history = useHistory()
    let {petId} = useParams()
    const [service, setService] = useState("")
    const [date, setDate] = useState("")
    const [time, setTime] = useState("")
    const [location, setLocation] = useState("")


    const pet = props.user.pets.find(animal => animal.id === parseInt(petId))


    const handleService = (e)=>{
        setService(e.target.value)
    }
    const handleDate = (e)=>{
        setDate(e.target.value)
    }
    const handleTime = (e)=>{
        setTime(e.target.value)
    }
    const handleLocation = (e)=>{
        setLocation(e.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        fetch("http://127.0.0.1:3000/appointments", {
            method: "POST",
            headers: {
              "Content-type": "application/json",
              "authorization": localStorage.token
            },
            body: JSON.stringify({
              service: service,
              date: date,
              time: time,
              location: location,
              pet_id: petId
            })
        })
        .then(res => res.json())
        .then(newAppointment =>{
            console.log("This is the Appointment you just made: ", newAppointment)
            props.addAppointment(newAppointment)
            history.push(`/${petId}/appointments`)

        })
    }

    return <article className="wrapper" id="appointment-form">
        <section className="wrapper" id="appointment-section">
            <h2>{pet.name}</h2>
            <h2>schedule new appointment</h2>
            <form onSubmit={handleSubmit}>
                <label for="service-type">service: </label>
                <select id="service-type" onChange={handleService}>
                    <option value="none" selected disabled hidden>
                        Select a Service
                    </option>
                    <option value="Shampoo &amp; Condition">Shampoo &amp; Condition</option>
                    <option value="Haircut">Haircut</option>
                    <option value="Nail Trim">Nail Trim</option>
                </select>
                <br />
                <label for="date">date: </label>
                <input type="date" id="date" name="date" onChange={handleDate}/>
                <br />
                <label for="time">select a time: </label>
                <select id="time" name="time" onChange={handleTime}>
                    <option value="none" selected disabled hidden>
                        Select a Time
                    </option>
                    <option value="9:00 AM">9:00 AM</option>
                    <option value="10:00 AM">10:00 AM</option>
                    <option value="11:00 AM">11:00 AM</option>
                    <option value="12:00 PM">12:00 PM</option>               
                    <option value="1:00 PM">1:00 PM</option>
                </select>
                <br />
                <label for="location">location: </label>
                <select id="location" onChange={handleLocation}>
                    <option value="none" selected disabled hidden>
                        Select a Location
                    </option>
                    <option value="Chicago">Chicago</option>
                    <option value="New York">New York</option>
                    <option value="Seattle">Seattle</option>
                </select>
                <br />
                <input type="submit" value="book appointment" className="button" />
            </form>
        </section>
    </article>
};

export default AppointmentForm;