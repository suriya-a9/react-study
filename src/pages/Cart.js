import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
    const { cart, increaseQty, decreaseQty, removeFromCart } = useContext(CartContext);

    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

    const totalPrice = cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    return (
        <div>
            <h2>Cart Page</h2>

            {cart.length === 0 ? (
                <p>Cart is empty</p>
            ) : (
                <>
                    {cart.map(item => (
                        <div key={item.id}>
                            <p>{item.name} - ₹{item.price}</p>

                            <button onClick={() => decreaseQty(item.id)}>-</button>
                            <span>{item.quantity}</span>
                            <button onClick={() => increaseQty(item.id)}>+</button>

                            <button onClick={() => removeFromCart(item.id)}>
                                Remove
                            </button>
                        </div>
                    ))}

                    <hr />

                    <h3>Total Items: {totalItems}</h3>
                    <h3>Total Price: ₹{totalPrice}</h3>
                </>
            )}
        </div>
    );
};

export default Cart;