
import { useState } from "react";

/*export default function App() {
    const [count, setCount] = useState(4)
    const [theme, setTheme] = useState('blue')
    


    function decrementCount(){
        setCount(prevCount => prevCount - 1)
    }

    function addCount(){
        setCount(prevCount => prevCount + 1)
    }

    return (
        <>
            <button onClick={decrementCount}>-</button>
            <span>{count}</span>
            <span>{theme}</span>
            <button onClick={addCount}>+</button>

        </>
    )
}*/



function List(props){
    return (
        <ul>
            {props.animals.map((animal) => {
                return animal.startsWith("L") && <li key={animal}>{animal}</li>;
            })}
        </ul>
    )
}

export function Animals(){
    const animals = ["Lion", "Cow", "Snake", "Lizard"]

    return (
        <div>
            <h1>Animals: </h1>
           <List animals={animals} />
        </div>
    )
}