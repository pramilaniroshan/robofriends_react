import React from 'react';
import Card from './card';

const cardlist =({robots})=>{

    const robot_a=robots.map((user,i)=>{
        return < Card key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email} />
    })

    return(
        <div>
           {robot_a};
        </div>
    );
}

export default cardlist;