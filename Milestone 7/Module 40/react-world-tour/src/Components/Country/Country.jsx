import { useState } from 'react';
import './Country.css';
const Country = ({country, handleVisitedCountries}) => {
    const {name, flags, population, area} = country;

    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
        setVisited(!visited)
    }

    return (
        <div className={`country ${visited && 'visited'}`}>
            <h3 style={{color: visited && 'red'}}>Name: {name?.common}</h3>
            <img src={flags?.png} alt="" />
            <p>Area: {area} km<sup>2</sup></p>
            <p>Population: {population}</p>
            <button onClick={()=>handleVisitedCountries(country)}>Mark as Visited</button>
            <button onClick={handleVisited}>{visited?'Visited':'Going'}</button>
            {
                visited?'I visited this counrty':'I want to visit this country!'
            }
        </div>
    );
};

export default Country;