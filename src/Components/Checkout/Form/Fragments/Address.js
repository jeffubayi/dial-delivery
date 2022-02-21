import React from 'react';
import { GlobalContext } from '../../../../GlobalContext';
import RadioPayment from './RadioPayment';
import styles from './Address.module.css';

const Address = () => {
  const { cep, setCep, number, setNumber, complement, setComplement, address } = React.useContext(GlobalContext);
  const [error, setError] = React.useState(false);

  function validateCep() {
    if (cep.length < 3) {
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
          <p>Origin: Store </p>  <span>Destination:  {cep}</span>
          </div> <label htmlFor="complement" className={styles.complement}>Nearest landmark </label>
          <input id="complement" name="complement" placeholder="Enter nearest building,school or organisation" className={styles.input} type="text" onChange={(event) => setComplement(event.target.value)} value={complement} />
          <label htmlFor="number" className={styles.label}>Door Number</label>
          <input id="number" name="number" placeholder="Enter exact floor,room or door number" className={styles.input} type="number" onChange={(event) => setNumber(event.target.value)} value={number} />
         
          <h3 className={styles.subTitle}>Payment</h3>
          <p className={styles.typePay}>Payment Method:</p>
          <RadioPayment />
        </>
      )}
    </div>
  )
}

export default Address;