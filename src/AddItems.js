import React from 'react';
import { useRef } from 'react';
import { FaPlus } from "react-icons/fa";

const AddItems = ({newItem, setNewItem, handleSubmit}) => {
  const inputRef = useRef();
  return (
    <form className='add' onSubmit={handleSubmit}>
        <input 
            type="text"
            ref={inputRef}
            placeholder='Add Items' 
            id='addItems' 
            required 
            autoFocus
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
        />
        <button 
            type='submit'
            onClick={() => inputRef.current.focus()}
        >
            <FaPlus />
        </button>
    </form>
  )
}

export default AddItems
