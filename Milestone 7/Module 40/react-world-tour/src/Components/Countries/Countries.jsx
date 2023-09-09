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

    const handleVisitedCountries = () => {
        console.log('clicked!');
    }

    return (
        <div>
            <h3>Total Number of Countries: {countries.length}</h3>
            <div className="country-container">
                {
                    countries.map(country => <Country key={country.cca3} country={country} handleVisitedCountries = {handleVisitedCountries}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;