import React from 'react';
import { GlobalContext } from '../../../../GlobalContext';
import RadioPayment from './RadioPayment';
import styles from './AddressDefault.module.css';

const AddressDefault = () => {
  const { user, setUser } = React.useContext(GlobalContext);

  function handleAddress() {
    setUser(null);
  }

  return (
    <div>
      <p className={styles.defaultAddress}>Default address:</p>
      <div className={styles.cardAddress}>
        <p>{user.cep}, {user.number}</p>
        <p>{user.complement}</p>
        <button className={styles.editAddress} onClick={handleAddress}>Edit address</button>
      </div>
      <h3 className={styles.subTitle}>Payment</h3>
      <p className={styles.typePay}>Mode of Payment:</p>
      <RadioPayment />
    </div>
  )
}

export default AddressDefault;