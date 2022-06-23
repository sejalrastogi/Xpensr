import React from 'react'
import { useSelector } from 'react-redux';
import './expense-list.css';
import Card from './card';
import { toast, ToastContainer } from 'react-toastify';
import empty from '../../assets/empty.png'

const ExpenseList = () => {
  const { expenseList: list, query } = useSelector((state) => state.expenses);
  const filteredList = list && list.filter((item) => item.title.includes(query));
  
  const notifySuccess = () => toast.success("Expense Deleted");
  return (
    <div className='expense-list'>
      <ToastContainer
                position="bottom-left"
                autoClose={1500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
            />
      {filteredList && filteredList.length ? filteredList.map((item,index) => (
        <Card notifySuccess={notifySuccess} item={item} key={index.toString()} />
      )) : (<div className='empty-state'>
        <img src={empty} alt="Empty List" className='empty-image' />
        <label>Uh Oh! Your Expense List is Empty</label>
      </div>
      )}
    </div>
  );
};

export default ExpenseList