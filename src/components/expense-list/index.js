import React from 'react'
import './expense-list.css';
import Card from './card';

const ExpenseList = () => {
    const list = [
        {
            title: "Made a purchase",
            logo: "/",
            createdAt: Date.now(),
            amount: 1234,
        },
        {
            title: "Made a purchase",
            logo: "/",
            createdAt: Date.now(),
            amount: 1234,
        }
    ];
  return (
    <div>{list.length ? list.map((item) => <Card item={item} />): null}</div>
  )
}

export default ExpenseList