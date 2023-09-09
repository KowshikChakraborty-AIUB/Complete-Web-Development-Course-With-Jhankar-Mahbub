import { useState } from 'react';
import './Country.css';
const Country = ({country}) => {
    const {name, flags, population, area} = country;

    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
        setVisited(!visited)
    }

    return (
        <div className='country'>
            <h3>Name: {name?.common}</h3>
            <img src={flags?.png} alt="" />
            <p>Area: {area} km<sup>2</sup></p>
            <p>Population: {population}</p>
            <button onClick={handleVisited}>{visited?'Visited':'Going'}</button>
            {
                visited?'I visited this counrty':'I want to visit this country!'
            }
        </div>
    );
};

export default Country;