import { useState } from "react";
export default function useCheckboxState(initialValue) {
    const [checked, setChecked] = useState(initialValue);
    function onChange(event) {
    setChecked(event.target.checked);
    }
    return {
    checked,
    onChange
    };
    }
    