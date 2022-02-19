import React from 'react';
import { GlobalContext } from '../../../../GlobalContext';
import RadioPayment from './RadioPayment';
import styles from './Address.module.css';

const Address = () => {
  const { cep, setCep, number, setNumber, complement, setComplement, address } = React.useContext(GlobalContext);
  const [error, setError] = React.useState(false);

  function validateCep() {
    if (cep.length < 8) {
      setError(true);
    } else {
      setError(false);
    }
  }

  return (
    <div className={styles.wrapper}>
      <label htmlFor="cep" className={styles.label}>Delivery Address</label>
      <input id="cep" name="cep" placeholder="Enter a location" className={styles.input} type="text" maxLength="8" onChange={(event) => { setCep(event.target.value); setError(false) }} onBlur={validateCep} value={cep} />
      {error && <p className={styles.error}>Enter a valid address</p>}
      {address && (
        <>
          <div className={styles.address}>
          <p>Store  to   ${cep}</p>
          </div>
          <label htmlFor="number" className={styles.label}>Number</label>
          <input id="number" name="number" placeholder="Enter nearest building,street,floor,room number" className={styles.input} type="number" onChange={(event) => setNumber(event.target.value)} value={number} />
          <label htmlFor="complement" className={styles.complement}>Additional information</label>
          <input id="complement" name="complement" placeholder="Enter a compliment" className={styles.input} type="text" onChange={(event) => setComplement(event.target.value)} value={complement} />
          <h3 className={styles.subTitle}>Payment</h3>
          <p className={styles.typePay}>Payment Method:</p>
          <RadioPayment />
        </>
      )}
    </div>
  )
}

export default Address;