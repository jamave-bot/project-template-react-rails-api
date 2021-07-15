
import React, {useState} from 'react';
import { useHistory } from "react-router";


const NewPetForm = (props) => {

    const history = useHistory();
    const [petName, setPetName] = useState("")
    const [species, setSpecies] = useState("")
    const [age, setAge] = useState(0)


    const handleNameChange=(e)=>{
        setPetName(e.target.value)
    }

    const handleSpeciesChange=(e)=>{
        console.log(e.target.name, ": ", e.target.value)
        setSpecies(e.target.value)
    }

    const handleAgeChange=(e)=>{
        setAge(e.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        fetch("http://127.0.0.1:3000/pets", {
            method: "POST",
            headers: {
              "Content-type": "application/json",
              "authorization": localStorage.token
            },
            body: JSON.stringify({
              name: petName,
              species: species,
              age: age,
              user_id: props.user.id
            })
        })
        .then(res => res.json())
        .then(newPet =>{
            console.log("This is the Pet you just made: ", newPet)
            props.addPet(newPet)
            history.push("/household")

        })
    }

    return <article className="wrapper" id="pet-form">
        <section className="wrapper" id="pet-section">
            <h2>Add New Pet</h2>
            <form onSubmit={handleSubmit}>
                <label for="pet-name">pet name: </label>
                <input id="pet-name" onChange={handleNameChange}/>
                <br />
                <label for="species">species: </label>
                <select id="species" name="species" onChange={handleSpeciesChange}>
                    <option value="none" selected disabled hidden>
                        Select an Option
                    </option>
                    <option value="dog">dog</option>
                    <option value="cat">cat</option>
                    <option value="rabbit">rabbit</option>
                </select>
                <br />
                <label for="age">age: </label>
                <input type="number" id="age" name="age" onChange={handleAgeChange}/>
                <br />
                <input type="submit" value="Add to Household" className="button" />
            </form>
        </section>
    </article>
};

export default NewPetForm;