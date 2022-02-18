import React from 'react';
import useForm from '../../../Hooks/useForm';
import { GlobalContext } from '../../../GlobalContext';
import { useNavigate } from 'react-router-dom';
import Input from './Fragments/Input';
import RadioDelivery from './Fragments/RadioDelivery';
import styles from './Form.module.css';

const Form = () => {
  const { typeBuy, number, complement, address, typePayment, cart, total, order, setOrder, user } = React.useContext(GlobalContext);
  const phone = useForm('phone');
  const name = useForm();
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    if (name.validate() && phone.validate()) {
      if (typeBuy !== '' && typeBuy === 'store') {
        setOrder({
          name: name.value,
          phone: phone.value,
          cart: {
            ...cart,
            totalPrice: total
          }
        });
        navigate('/completed');
        console.log(order);
      } else if (typeBuy !== '' && typeBuy === 'delivery' && address !== null) {
        if (number !== '' && complement !== '' && typePayment !== '') {
          setOrder({
            name: name.value,
            phone: phone.value,
            cart: {
              ...cart,
              totalPrice: total,
            },
            address: {
              ...address,
              number: number,
              complement: complement
            },
            payment: typePayment
          });
          navigate('/completed');
          console.log(order);
        }
      } else if (typeBuy !== '' && typeBuy === 'delivery' && user !== null) {
        setOrder({
          name: name.value,
          phone: phone.value,
          cart: {
            ...cart,
            totalPrice: total,
          },
          address: {
            ...user
          },
          payment: typePayment
        });
        navigate('/completed');
        console.log(order);
      }
    }
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h3 className={styles.title}>Your details</h3>
      <Input label="Name" type="text" name="name" placeholder="Enter your name" {...name} />
      <Input label="Phone number" type="text" name="phone" placeholder="Enter your number" {...phone} />
      <h3 className={styles.subTitle}>Delivery</h3>
      <RadioDelivery />
      <button className={styles.confirm} type="submit">Confirm Order </button>
    </form>
  );
};

export default Form;