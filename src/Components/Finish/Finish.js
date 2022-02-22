import React from "react";
import { GlobalContext } from "../../GlobalContext";
import styles from "./Finish.module.css";
import CartItem from "../Home/Cart/CartItem";
import { useNavigate } from "react-router-dom";

const Finish = () => {
  const navigate = useNavigate();
  const { cart, total, typeBuy } = React.useContext(GlobalContext);
  const finishOrder = () => {
    navigate("/order-progress");
  };

  return (
    <div className={styles.finishContainer}>
      <div className={styles.orderFinish}>
        <ion-icon name="checkmark-circle"></ion-icon>
        <h2>Order completed</h2>
      </div>
      <div className={styles.orderContainer}>
        <div className={styles.orderItems}>
          {cart.map((item) => (
            <CartItem key={item.id} product={item} isFinish={true} />
          ))}
        </div>
        <div className={styles.total}>
          <h4>Total</h4>
          <h4 className={styles.price}>Ksh {total},00</h4>
        </div>
      </div>
      {typeBuy === "delivery" ? (
        <p className={styles.orderStore}>
          Your order will be delivered within 60 minutes.
        </p>
      ) : (
        <p className={styles.orderStore}>
          In 25 minutes your order will be ready to be picked up in our store.
        </p>
      )}
      <div className={styles.btn}>
        <button onClick={finishOrder}>View Progress</button>
      </div>
    </div>
  );
};

export default Finish;
