import React from 'react'
import { CiLight } from "react-icon/ci";

export const Toggle = ({ handleChange, isChecked }) => {
    return (
        <div className="toggle-container">
            <input
                type="checkbox"
                id="check"
                className="toggle"
                onChange={handleChange}
                checked={isChecked}
            />
            <label htmlFor="check"><Cilight size={50} /></label>

        </div>
    )
}
export default Toggle
