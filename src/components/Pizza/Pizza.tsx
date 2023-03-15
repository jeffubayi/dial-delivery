import React from 'react';
import { useSelector } from 'react-redux';

import PizzaItem from './PizzaItem';
import { selectPizza } from '../../store/pizza/selectors';

import './pizza.scss';
import PizzaSkeleton from './PizzaSkeleton';
import Sort from '../Sort/Sort';
import { pizzas } from '../../api/types'

const Pizza: React.FC = () => {
  const { items, status } = useSelector(selectPizza);
  console.log(`items`, items, pizzas)
  return (
    <div className="pizza">
      <div className="d-flex align-center justify-between mb-20">
        <h1>All Pizzas</h1>
        <div className="pizza__sort">
          <Sort />
        </div>
      </div>
      <div className="pizza__items">
        {status === 'loading'
          ? [...Array(4)].map((_, i) => <PizzaSkeleton key={i} />)
          : items.map((item) => <PizzaItem key={item.id} {...item} />)}
      </div>
    </div>
  );
};

export default Pizza;
