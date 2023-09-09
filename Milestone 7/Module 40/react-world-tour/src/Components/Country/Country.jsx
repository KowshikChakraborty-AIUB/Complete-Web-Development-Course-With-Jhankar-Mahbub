import './Country.css';
const Country = ({country}) => {
    const {name, flags, population, area} = country;
    return (
        <div className='country'>
            <h3>Name: {name?.common}</h3>
            <img src={flags?.png} alt="" />
            <p>Area: {area} km<sup>2</sup></p>
            <p>Population: {population}</p>
        </div>
    );
};

export default Country;