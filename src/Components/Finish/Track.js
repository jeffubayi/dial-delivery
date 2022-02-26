import React from "react";
import { GlobalContext } from "../../GlobalContext";
import styles from "./Finish.module.css";
import CartItem from "../Home/Cart/CartItem";
import { useNavigate } from "react-router-dom";

const Track = () => {
  const navigate = useNavigate();
  const { cart, total } = React.useContext(GlobalContext);

  const [minutes, setMinutes] = React.useState(25);
  const [seconds, setSeconds] = React.useState(0);
  const [displayMessage, setDisplayMessage] = React.useState(false);

  React.useEffect(() => {
    let interval = setInterval(() => {
      clearInterval(interval);

      if (seconds === 0) {
        if (minutes !== 0) {
          setSeconds(59);
          setMinutes(minutes - 1);
        } else {
          let minutes = displayMessage ? 24 : 4;
          let seconds = 59;

          setSeconds(seconds);
          setMinutes(minutes);
          setDisplayMessage(!displayMessage);
        }
      } else {
        setSeconds(seconds - 1);
      }
    }, 1000);
  }, [seconds]);

  const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;

  const finishOrder = () => {
    navigate("/");
    window.location.reload();
  };

  return (
    <div className={styles.finishContainer}>
      <div className={styles.orderFinish}>
        <h2>Order Progress</h2>
      </div>
      <div className={styles.orderContainer}>
        <div className={styles.orderItems}>
          {cart.map((item) => (
            <CartItem key={item.id} product={item} isFinish={true} />
          ))}
        </div>
        <div className={styles.total}>
          <div>
          <h4> Your order will be ready in</h4>
          </div>
          <div className={styles.circle}>
          <h4 className={styles.time}>
            {timerMinutes}:{timerSeconds}
          </h4>
          </div>
        </div>
      </div>
      <p className={styles.orderStore}>Delivery charge, Ksh {total}.</p>
      <div className={styles.btn}>
        {displayMessage && <button onClick={finishOrder}>Ready</button>}
      </div>
    </div>
  );
};

export default Track;
