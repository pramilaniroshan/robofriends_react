import React from 'react';

const searchBox = ({SearchFeild,SearchChange}) =>{

    return(

        <input 
        className = "pa3 ba b--green bg-lightest-blue"
        type ="search" 
        placeholder="Search Robots"
        onChange={SearchChange} 
        />
    );

} 

export default searchBox;