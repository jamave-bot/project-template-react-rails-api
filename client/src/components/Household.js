
import React from 'react';
import Pet from '../components/Pet';
import { useHistory } from "react-router";


const Household = (props) => {

    const history = useHistory();
    const showPets = () =>{
        if (props.user.pets){
            return props.user.pets.map(pet=><Pet key={pet.id} pet={pet} deletePet={props.deletePet}/>)
        }
    }

    const handleClick = ()=>{
      history.push("/newPet")
    }

    return (<section className="wrapper">
        {/* <Pet />
        <Pet />
        <Pet /> */}
        {showPets()}
        <button className="add" onClick={handleClick}>add new pet</button>
    </section>)
};

export default Household;