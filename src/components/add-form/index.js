import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addExpense } from '../../redux/actions/expenses';
import './add-form.css'
import { categories } from '../../constants/add-expense';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SuccessModal from './success-modal';

const AddForm = () => {
    const cat = categories;
    const [categoryOpen, setCategoryOpen] = useState(false);
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [category, setCategory] = useState();
    const [modalOpen, setModalOpen] = useState(false);
    const dispatch = useDispatch();
    // setModalOpen(true);

    const handleTitle = (e) => {
        setTitle(e.target.value);
    }

    const handleAmount = (e) => {
        const val = parseFloat(e.target.value);
        if (isNaN(val)) {
            setAmount("");
            return;
        }
        setAmount(val);
    }

    const handleCategory = (category) => {
        setCategory(category);
        setCategoryOpen(false);
    }

    const handleSubmit = () => {
        if (title === "" || amount === "" || !category) {
            const notify = () => toast("Please enter valid data!");
            notify();
            return;
        }
        const data = {
            title,
            amount,
            category,
            createdAt: new Date(),
        };
        console.log("Here");
        dispatch(addExpense(data));
        setModalOpen(true);
    }

    return (
        <div className='add-form'>
            <ToastContainer
                position="bottom-left"
                autoClose={1500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
            />
            <SuccessModal modalOpen={modalOpen} setModalOpen={setModalOpen}/>
            <div className='form-item'>
                <label>Title</label>
                <input placeholder="Give a name to your Expenditure" value={title} onChange={(e) => handleTitle(e)} />
            </div>
            <div className='form-item'>
                <label>Amount ₹</label>
                <input placeholder='Enter Amount' value={amount} className='amount-input' onChange={(e) => handleAmount(e)} />
            </div>
            <div className='category-container-parent'>
                <div className='category'>
                    <div className='category-dropdown' onClick={() => setCategoryOpen(!categoryOpen)}>
                        <label>{category ? category.title : "Category"}</label>
                        <i className ="fi fi-rr-angle-down"></i>
                    </div>
                    {categoryOpen && <div className='category-container'>
                        {cat.map(category => (
                            <div className='category-item' style={{
                                borderRight: `5px solid ${category.color}`
                            }} key={category.id} onClick={() => handleCategory(category)}>
                                <label>{category.title}</label>
                                <img src={category.icon} alt={category.title} />
                            </div>
                        ))}
                    </div>
                    }
                </div>
            </div>
            <div className='form-add-button'>
                <div onClick={handleSubmit}>
                    <label>Add</label>
                    <i className="fi fi-rr-paper-plane"></i>
                </div>
            </div>
        </div>
    )
}

export default AddForm