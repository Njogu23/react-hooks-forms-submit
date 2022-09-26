import React, { useState } from "react";

function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [submitedData, setSubmitedData] = useState([])
 

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  function handleSubmit(event){
    event.preventDefault()

    if(firstName.length > 0){
      const formData = {
        firstName:firstName,
        lastName:lastName,
      }
      const subArray = [...submitedData, formData]
      setSubmitedData(subArray)
      setFirstName("")
      setLastName("")
    } else {
      alert("NOTE: Include Fisrt Name!")
    }
  }

    

  const subList = submitedData.map((item, index) => {
    return (
      <div key={index}>
        <li>{item.firstName} {item.lastName}</li>
      </div>
    )

  })

  return (
    <>
     <form onSubmit={handleSubmit}>
       <input type="text" onChange={handleFirstNameChange} value={firstName} />
       <input type="text" onChange={handleLastNameChange} value={lastName} />
       <button type="submit">Submit</button>
     </form>
     <div>
         {subList}
     </div>
    </>
  );
}

export default Form;
