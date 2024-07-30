import React, { useState } from 'react';
import Greeting from './components/Greeting';

function App() {
    const [name, setName] = useState('');

    const handleChange = (event) => {
        setName(event.target.value);
    };

    return (
        <div className="App">
            <input type="text" placeholder="Digite seu nome" onChange={handleChange} />
            <Greeting name={name} />
        </div>
    );
}

export default App;
