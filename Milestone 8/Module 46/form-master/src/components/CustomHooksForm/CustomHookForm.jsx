import useInputState from "../../hooks/useInputState";

const CustomHookForm = () => {
    // const [name, handleChange] = useInputState('Kowshik C')

    const emailState = useInputState('Kowshik@gmail.com')

    const handleSubmit = e => {
        e.preventDefault();
        //console.log('form data:', name);
        console.log('form data:', emailState.value);
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                {/* <input type="text" name="name" value={name} onChange={handleChange}/> */}
                <br />
                <input {...emailState} type="email" name="email" id="" />
                <br />
                <input type="password" name="password" id="" />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default CustomHookForm;