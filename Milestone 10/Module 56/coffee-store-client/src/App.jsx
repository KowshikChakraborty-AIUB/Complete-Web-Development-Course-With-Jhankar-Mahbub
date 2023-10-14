import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './components/CoffeeCard';
import { useState } from 'react';

function App() {

  const loadedCoffees = useLoaderData();

  const [coffees, setCoffees] = useState(loadedCoffees);


  return (
    <>
      <h2 className='text-5xl font-bold text-center'>Coffee: {coffees.length}</h2>
      <div className='grid grid-cols-2 gap-6 mt-20'>
        {
          coffees.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee} coffees={coffees} setCoffees={setCoffees}></CoffeeCard>)
        }
      </div>
    </>
  )
}

export default App
