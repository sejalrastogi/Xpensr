import React, { useState }from 'react'
import './topfold.css'

const TopFold = () => {
    const [query, setQuery] = useState("");
    const handleQuery = (e) => {
        setQuery(e.target.value);
    }
    return (
        <div className='topfold'>
            <div className='home-topfold'>
                <div className='searchbar'>
                    <i class="fi fi-rr-search"></i>
                    <input placeholder='Search for enpenses' value={query} onChange={(e) => handleQuery(e)} />
                </div>
                <div className='add-button'>
                <i className="fi fi-rr-add"></i>
                <label>Add</label>
                </div>
            </div>
        </div>
    )
}

export default TopFold