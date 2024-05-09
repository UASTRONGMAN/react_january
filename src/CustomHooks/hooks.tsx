import {useRef, useState} from "react";
// 1. useToggle - custom React hook that allows a component to toggle a value between true and false
const useToggle = (defaultValue: boolean) => {
    const [value, setValue] = useState<boolean>(defaultValue);
    function toggleValue(data:boolean) {
        setValue(previousValue => !data)
    }
    return [value, toggleValue]
}

// 2. usePrevious - hook that allows a component to keep track of the previous value of a variable


const usePrevious = (value:any) => {
    const currentRef = useRef(value);
    const previousRef = useRef();

    if(currentRef.current !== value) {
        previousRef.current = currentRef.current;
    }
    return previousRef.current
}

// 3. useStorage - hook that allows a component to store a value in the browser's LocalStorage
