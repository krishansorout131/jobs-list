import { useState } from "react";
export default function useInputState(initialValue) {
    const [value, setValue] = useState(initialValue);
    function onChange(event) {
    setValue(event.target.value);
    }
    return {
    value,
    onChange
    };
    }
    