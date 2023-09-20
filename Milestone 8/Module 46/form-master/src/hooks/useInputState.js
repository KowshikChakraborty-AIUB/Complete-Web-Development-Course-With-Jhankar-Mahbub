import { useState } from "react"

const useInputState = (defaultValue) => {
    const [value, setInputValue] = useState(defaultValue);

    // const handleChanges = e => {
    //     setInputValue(e.target.value);
    // }
    const onChange = e => {
        setInputValue(e.target.value);
    }

    // return [inputValue, handleChanges];
    return {value, onChange};
}

export default useInputState;