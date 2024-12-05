import Dish from "./Dish"

function Meals({ dishes }) {
    return (
        <section className="dishes-grid">
            {dishes.map((dish, index) => 
                <Dish key={index} title={dish.strMeal} instructions={dish.strInstructions} imageUrl={dish.strMealThumb}/>
            )}
        </section>
    )
}

export default Meals
