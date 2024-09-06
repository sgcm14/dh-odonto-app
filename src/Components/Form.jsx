import React from "react";
import { useState } from "react";


const Form = ({setSubmittedData}) => {
  //Aqui deberan implementar el form completo con sus validaciones
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const [error, setError] = useState(false);

  const handleChangeName = (event) =>{
    setFormData({...formData, name: event.target.value});
  }

  const handleChangeEmail = (event) =>{
    setFormData({...formData, email: event.target.value});
  }

  const validateName = (name)=>{
    return name.trim().length>5 && name==name.trimStart() && !/\d/.test(name);
  }

  const validateEmail = (email)=>{
    return  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  const validateFormData = (formData)=>{
    return validateName(formData.name) && validateEmail(formData.email);
  }

  const handleSubmit = (event)=>{
    event.preventDefault();
    const isValid = validateFormData(formData);
    setError(!isValid);
    
    if(isValid){
        setSubmittedData(formData);
        console.log("Nombre:", formData.name);
        console.log("Email:", formData.email);
    }
    else{
        setSubmittedData(null);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit} >
        <input type="text" 
              value={formData.name}
              placeholder="Full name" 
              onChange={handleChangeName} />
        <input type="email" 
              value={formData.email} 
              placeholder="Email" 
              onChange={handleChangeEmail}/>
        <button>Enviar</button>   
      </form>
      {
        error && <span>Por favor verifique su información nuevamente</span>
      }
    </div>
  );
};

export default Form;
