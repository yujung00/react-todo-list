import React from "react";
import './Form.css';

const Form = ({value, onChange, onCreate, onKeyPress, selectColor}) => {

    let color = selectColor;
    if(!selectColor){
        color='#343a40';
    }

    return (
        <div className="form">
            <input value={value} onChange={onChange} onKeyPress={onKeyPress} style={{color: color}} />
            <div className="create-button" onClick={onCreate}>
                추가
            </div>
        </div>
    );
};

export default Form;