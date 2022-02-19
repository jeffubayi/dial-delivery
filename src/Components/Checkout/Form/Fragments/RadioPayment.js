import React from 'react';
import { GlobalContext } from '../../../../GlobalContext';
import styles from './RadioPayment.module.css';

const RadioPayment = () => {
  const { typePayment, setTypePayment } = React.useContext(GlobalContext);

  return (
    <div className={styles.radioPayment}>
      <label className={styles.label}>
        <input name="card" type="radio" value="card" className={styles.radio} checked={typePayment === "card"} onChange={({ target }) => setTypePayment(target.value)} />
        Mpesa
      </label>
      <label className={styles.label}>
        <input name="money" type="radio" value="money" className={styles.radio} checked={typePayment === "money"} onChange={({ target }) => setTypePayment(target.value)} />
        Cash on Delivery
      </label>
    </div>
  )
}

export default RadioPayment;