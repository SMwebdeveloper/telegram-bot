import "./cart.css";
import Button from "../button/button";
import { totalPrice } from "../../utils/total-price";

const Cart = ({ cartItems, onCheckOut }) => {
  return (
    <div className="cart__container">
      <p>
        Umumiy narx:{" "}
        {totalPrice(cartItems).toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        })}
      </p>
      <Button title={cartItems.length === 0 ? "Buyurtma" : "To'lov"} disable={cartItems.length == 0 ? true : false} type={"checkout"} onClick={onCheckOut}/>
    </div>
  );
};

export default Cart;
