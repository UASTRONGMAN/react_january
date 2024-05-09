import React, {useState} from 'react';
import './App.css';

const App = () => {
    const useToggle = (defaultValue: boolean) => {
        const [value, setValue] = useState<boolean>(defaultValue);
        function toggleValue(data:boolean) {
            setValue(previousValue => !data)
        }
        return [value, toggleValue]
    }
    const [value, toggleValue] = useToggle(true);
    const read = toggleValue(true)
    return (
        <div>
            <button onClick={() => {
                console.log(read)
            }}>123</button>
        </div>
    );
};

export default App;
