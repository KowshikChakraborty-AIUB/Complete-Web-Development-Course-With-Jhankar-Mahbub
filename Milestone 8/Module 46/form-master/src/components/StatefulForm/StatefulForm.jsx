import { useState } from "react";

const StatefulForm = () => {

    const [name, setName] = useState('Kowshik');
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [error, setError] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(password.length < 6){
            setError('Password must be at least 6 characters long');
        }else{
            setError('');
        }
        console.log(name, email, password);
    }

    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name='name' value={name} onChange={handleNameChange}/>
                <br />
                <input type="email" name= 'email' value={email} id="" onChange={handleEmailChange}/>
                <br />
                <input type="password" name='password' value={password} id="" onChange={handlePasswordChange}/>
                <br />
                <input type="submit" value="Submit" />
            </form>
            {
                error && <p>{error}</p>
            }
        </div>
    );
};

export default StatefulForm;