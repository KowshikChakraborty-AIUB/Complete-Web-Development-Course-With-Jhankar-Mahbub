const Register = () => {

    const handleRegister = e => {
        e.preventDefault();
         const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(password, email);
    }

    return (

        <div className="mt-36">
            <div className="w-1/2 mx-auto">
                <h2 className="text-3xl text-center mb-4">Please Register</h2>
                <form onSubmit={handleRegister} className="text-center">
                    <input className="border border-[#CC009C] rounded mb-4 w-3/4 px-4 py-2" type="email" name="email" id="" placeholder="email address..." />
                    <br />
                    <input className="border border-[#CC009C] rounded mb-4 w-3/4 px-4 py-2" type="password" name="password" id="" placeholder="password..." />
                    <br />
                    <input className="border mb-4 w-3/4 btn btn-secondary" type="submit" value="Register" />
                </form>
            </div>
        </div>
    );
};

export default Register;