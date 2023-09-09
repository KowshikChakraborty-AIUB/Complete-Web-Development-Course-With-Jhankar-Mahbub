import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])

    const handleVisitedCountries = (counrty) => {
        const newvisitedCountries = [...visitedCountries, counrty];
        setVisitedCountries(newvisitedCountries);
        
    }

    return (
        <div>
            <h3>Total Number of Countries: {countries.length}</h3>
            <div>
                <h3>Visited Countries: {visitedCountries.length}</h3>
                <ul>
                    {
                        visitedCountries.map(visitedCountry => {
                            return <li key={visitedCountry.cca3}><img width={50} src={visitedCountry.flags.png} alt="" /> {visitedCountry.name.common}</li>
                        })
                    }
                </ul>
            </div>
            <div className="country-container">
                {
                    countries.map(country => <Country key={country.cca3} country={country} handleVisitedCountries={handleVisitedCountries}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;