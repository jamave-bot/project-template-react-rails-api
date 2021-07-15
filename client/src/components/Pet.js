  
import React from 'react';
import DogImg from '../images/dog.png';
import CatImg from '../images/cat.png';
import BunnyImg from '../images/bunny.png';

import { useHistory } from "react-router";


const Pet = (props) => {

  const history = useHistory();

  const showPetDiv = () =>{
    if (props.pet){
      return <div id="pet-text-wrapper">
      <h3>{props.pet.name}</h3>
      <span>{props.pet.age}, {props.pet.species}</span>
    </div>
    }else{
      return <>
        <h3>nothin here boss</h3>
      </>
    }
  } 

  const handleClick=()=>{
    fetch(`http://127.0.0.1:3000/pets/${props.pet.id}`, {
            method: "DELETE",
            headers: {
              "authorization": localStorage.token
            }
        })
        .then(res => res.json())
        .then(deletedPet =>{
            console.log("This is the Pet you just destroyed: ", deletedPet)
            props.deletePet(deletedPet)
        })
  }


  const goToAppointments =()=>{
    history.push(`/${props.pet.id}/appointments`)
  }


  const petImg = ()=>{
    if (props.pet.species === 'dog'){
      return DogImg
    } else if (props.pet.species === 'cat'){
      return CatImg
    } else{
      return BunnyImg
    }
  }

  return(<div className="pet-container">
    <img src={petImg()} alt="cartoon of pet" id="pet-img"></img>
    {showPetDiv()}
    <button className="delete" onClick={handleClick}>X</button>
    <button onClick={goToAppointments}>See Appointments</button>
  </div>)
};

export default Pet;