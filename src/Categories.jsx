function Categories({ setCategory }) {

    const changeCategory = (letter) => {
        setCategory(letter);
    }

    const categories = ["A", "B", "C"];

    return (
        <section className="category-buttons">
            {categories.map((category, index) => {
                return (
                    <button key={index} onClick={() => changeCategory(category)}>{category}</button>
                )
            })}
        </section>
    )
}

export default Categories
