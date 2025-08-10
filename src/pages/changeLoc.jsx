import React, {useState} from "react";

const ChangeLoc = ({city, setCity, loading}) => {
    const [input, setInput] = useState(city);
    const handleSubmit = (e) => {
        e.preventDefault();
        setCity(input);
    };
    return (
        <form onSubmit={handleSubmit}>
            <input value={input} onChange={e => setInput(e.target.value)} disabled={loading} />
            <button type='submit' disabled={loading}>Set Location</button>
        </form>
    )
};

export default ChangeLoc