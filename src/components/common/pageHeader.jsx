import React from 'react';

const PageHeader = ({title,text}) => {
    return ( 
        <div className=" row">
            <div className="col-md-10 page-header-div mx-auto text-center shadow mt-5">
                <h1 className="page-header-title">{title}</h1>
                <p className="page-header-text">{text}</p>
            </div>
            
        </div>
     );
}
 
export default PageHeader;