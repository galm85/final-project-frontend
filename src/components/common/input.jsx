import React from 'react';

const Input = ({name,placeholder,errors,type,...rest}) => {
    return ( 
        <div className="form-group">
            <input {...rest} name={name} id={name} placeholder={placeholder} type={type} className="form-control"/>
            {errors && <p className="text-danger mt-3">{errors}</p>}

        </div>
     );
}
 
export default Input;
