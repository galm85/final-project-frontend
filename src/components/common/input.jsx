import React from 'react';

const Input = ({name,placeholder,error,type,...rest}) => {
    return ( 
        <div className="form-group">
            <input {...rest} name={name} id={name} placeholder={placeholder} type={type} className="form-control"/>
            {error&& <p className="text-danger mt-3">{error}</p>}

        </div>
     );
}
 
export default Input;
