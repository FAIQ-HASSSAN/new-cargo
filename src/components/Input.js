import React from 'react'
import './Input.css'

function Input({lineHeight, placeholder, value, onChange }) {
  return (
    <div className="input">
      <input
        style={{
          width: '80%',
          height:30,
          padding: 8,
          borderRadius: 5,
          border: '1.5px solid gray',
          marginTop:20,
          lineHeight:lineHeight?lineHeight:"",
        }}

        placeholder={placeholder}
        value={value}
        type="text"
        onChange={onChange}
      />
    </div>
  )
}

export default Input
