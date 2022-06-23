import React from 'react'
import Modal from 'react-modal'
import './success-modal.css'
import { Link } from "react-router-dom";
import Home from '../../pages/home';
import addedImage from "../../assets/added-image.png"

const SuccessModal = ({modalOpen, setModalOpen}) => {
    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: "#71ccca",
          borderRadius: "12px",
        },
    };
  return (
    <Modal ariaHideApp={false} isOpen={modalOpen} style={customStyles}>
        <div className='modal-inner'>
            <label>Expense Added Successfully</label>
            <img src={addedImage} alt='Expense Added' className='added-image' />
            <Link to='/'>
                <div className='take-home-button'>
                <i className="fi fi-rr-home"></i>
                Home
                </div>
            </Link> 
        </div>
    </Modal>

  )
}

export default SuccessModal