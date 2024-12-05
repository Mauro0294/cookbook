import { useState, useEffect } from "react"

function showPrompt(setArticleTitle) {
    const promptInput = window.prompt("Enter dish title");
    if (promptInput) {
        setArticleTitle(promptInput);
    }
}

function Dish({ title, instructions, imageUrl }) {
    const [articleTitle, setArticleTitle] = useState(title);

    useEffect(() => {
        setArticleTitle(title);
    }, [title]);

    return (
        <article>
            <h2>{articleTitle}</h2>
            <img src="/src/assets/pencil.png" width="30" onClick={() => showPrompt(setArticleTitle)}/>
            <p>{instructions}</p>
            <img src={imageUrl} width="250"/>
        </article>
    )
}

export default Dish
