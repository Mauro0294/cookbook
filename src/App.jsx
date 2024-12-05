import { useState, useEffect } from 'react';
import Meals from './Meals';
import Categories from './Categories';

function App() {

    const [dishes, setDishes] = useState([]);
    const [category, setCategory] = useState("A");

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${category}`)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setDishes(data.meals || []);
            });
    }, [category])

    return (
        <div>
            <Categories setCategory={setCategory}/>
            <Meals dishes={dishes}/>
        </div>
    )
}

export default App
