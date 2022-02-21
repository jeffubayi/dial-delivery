import React from "react";
import { GlobalContext } from "../../../../GlobalContext";
import styles from "./RadioPayment.module.css";

const RadioPayment = () => {
  const { typePayment, setTypePayment } = React.useContext(GlobalContext);

  return (
    <div className={styles.radioPayment}>
      <label className={styles.label}>
        <input
          name="card"
          type="radio"
          value="card"
          className={styles.radio}
          checked={typePayment === "card"}
          onChange={({ target }) => setTypePayment(target.value)}
        />
        Mpesa
      </label>
      <label className={styles.label}>
        <input
          name="money"
          type="radio"
          value="money"
          className={styles.radio}
          checked={typePayment === "money"}
          onChange={({ target }) => setTypePayment(target.value)}
        />
        Cash on Delivery
      </label>
      {typePayment === "card" ? (
        <>
          <div>
            <img
              className={styles.bgImage}
              src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2-PDP42uIR-b9fMNTyDywET8-gVryZnPAhO3pK8FC7o8KHeKFVYxO-hc2VIBN06NROSk&usqp=CAU"
              alt=""
            />

            <label className={styles.text}>
              You'll receive a prompt to complete the payment
            </label>
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default RadioPayment;
