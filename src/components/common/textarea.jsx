import React from 'react';

const TextArea = ({name,placeholder,errors,type,rows,...rest}) => {
    return ( 
        <div className="form-group">
            <textarea {...rest} name={name} id={name} placeholder={placeholder} type={type} className="form-control" rows={rows}/>
            {errors && <p className="text-danger mt-3">{errors}</p>}

        </div>
     );
}
 
export default TextArea;
