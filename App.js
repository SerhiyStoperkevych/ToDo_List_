import { useState } from 'react';

function App() {
    const [input, setInput] = useState('');
    const [items, setItems] = useState([]);

    const handleInputChange = (e) => setInput(e.target.value);

    const clear = () => setInput('')
    
    const add = () => {
        if (input.trim()) {
            setItems([...items, input]);
            setInput('');
        }
    }

    const deleteItem = (index) => {
        setItems(items.filter((_, i) => i !== index));
    }
    
    return (
        <div>
            <h1>ToDo List</h1>
            <input
                type="text" 
                value={input} 
                onChange={handleInputChange} 
                placeholder="Enter an action"
                />
            <button onClick={add}>Add</button>
            <button onClick={clear}>Clear</button>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>
                        {item}
                        <button onClick={() => deleteItem(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
};

export default App;
