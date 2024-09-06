import React from 'react';
import { useState } from "react";
import Form from '../Components/Form'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  const [submittedData, setSubmittedData] = useState(null);
  const [theme, setTheme] = useState('light');
  
  return (
    <div>
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <Form setSubmittedData={setSubmittedData}/>
      {
        submittedData && <span>Gracias {submittedData.name}, te contactaremos cuando antes vía mail</span>
      }
    </div>
  )
}

export default Contact