import React from 'react';

export default function Cart({ cart, onRemoveFromCart }) {
    let totalPrice = 0;

    cart.forEach((item) => {

        totalPrice = totalPrice + item.price * item.quantity;

    });

    if (cart.length === 0) {

        return (

            <div className="cart-container">

                <h2>Shporta ime</h2>

                <p>Nuk keni asnjë produkt në shportë.</p>

            </div>
        );
    }

    return (

        <div className="cart-container">

            <h2>Shporta ime</h2>

            <div className="cart-list">

                {cart.map((item) => (

                    <div key={item.id} className="cart-item">

                        <div className="cart-item-info">

                            <h3>{item.name}</h3>

                            <p>Çmimi: ${item.price}</p>


                            <p>Sasia: {item.quantity}</p>
                        </div>


                        <button
                            className="delete-btn"
                            onClick={() => onRemoveFromCart(item.id)}
                        >
                            Fshij nga shporta
                        </button>

                    </div>

                ))}

            </div>

            <div className="cart-total">

                <h3>Totali për të paguar: ${totalPrice}</h3>

            </div>
        </div>
    );
};