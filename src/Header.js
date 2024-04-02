

import restaurantfood from "./assets/restauranfood.jpg"
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <header className='header'>
            <section>
                <div className='banner'>
                    <h2>Little Lemon</h2>
                    <h3>Pune</h3>
                    <p> Serves Authenthic Indian Dishes.  Everyday lunch  and dinner meals.
                        Snacks available all throughout day. </p>
                    <Link to="/reservation"><button aria-label="On Click">Reserve a Table</button></Link>
                </div>
                <div>
                    <div className='banner-img'>
                        <img src={restaurantfood} alt="food image"></img>
                    </div>

                </div>


            </section>





        </header >
    );

}
export default Header;