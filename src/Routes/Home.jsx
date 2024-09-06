import { Route, Routes, useNavigate, useParams } from "react-router-dom";
import React , {useEffect, useState} from 'react'
import Card from '../Components/Card'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const [dentists, setDentists] = useState([]);
  const params = useParams();
  const navigate = useNavigate();
  const [theme, setTheme] = useState('light');

  const getDentists = async () =>{
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const data = await response.json();
    setDentists(data);
  }

  useEffect(()=>{
    getDentists();
  })

  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
        {dentists.length 
           ? dentists.map(dentist => (<Card key={dentist.id} name={dentist.name} username={dentist.username} id={dentist.id}/>))
           : null
        }
      </div>
    </main>
  )
}

export default Home