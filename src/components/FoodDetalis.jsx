import { useEffect, useState } from "react";

export default function FoodDetails({ foodId }) {
    const [food, setFood] = useState({})
    const URL = ``;
    const API_KEY = "";
    useEffect(() => {
        async function fetchFood(){
            const res= await fetch(`${URL}?apiKey=${API_KEY}`)
            const data = await res.json();
            setFood(data);
        }
        fetchFood();
    },[foodId]
);
return <div>
    <div>
        <h1>{food.title} </h1>

        <img src={food.image} alt="" />
    </div>
    <span>
        <strong>{food.readyInMin}</strong>
    </span>
    <span>
    <strong>{food.servingn}</strong>
</span>
<span>{food.vegetarian ? "vegterian" : "Non-vegterian"}</span>
<span>{food.vegan ? "vegan" : ""}</span>

</div>;
}