import React from "react"
import recipes from "./recipes"
import Swal from "sweetalert2"

const Menu = () => {
    const handleOrder = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "Your order will be placed.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Confirm"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Ordered!",
                    text: "Your order is placed.",
                    icon: "success"
                });
            }
        });
    }

    return (
        <div className="menu-container">
            <div className="menu-header">
                <h2>Specials</h2>
                <button>Order Menu</button>

            </div>
            {/*  main menu*/}
            <div className="cards">
                {
                    recipes.map(recipe =>
                        <div key={recipe.id} className="menu-items">
                            <img src={recipe.image} alt=""></img>
                            <div className="menu-content">
                                <div className="heading">
                                    <h5>{recipe.title}</h5>
                                    <p>{recipe.price}</p>
                                </div>
                                <p>{recipe.description}</p>
                                <button className="orderBtn" onClick={handleOrder}>Order Menu</button>

                            </div>
                        </div>
                    )



                }
            </div>

        </div >
    );

}

export default Menu;