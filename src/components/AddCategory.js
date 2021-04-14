import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {
    const [inputValue, setinputValue] = useState('');
    const handleInputChange=(evento)=>{        
        setinputValue(evento.target.value);
    }
    const handleSubmit=(evento)=>{
        evento.preventDefault();
        if(inputValue.trim().length>2){
            setCategories((category)=>[inputValue,...category]);
            setinputValue('');
        }
    }
    return (
        <form onSubmit={handleSubmit}>        
            <input 
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    )
}
AddCategory.propTypes={
    setCategories: PropTypes.func.isRequired
}