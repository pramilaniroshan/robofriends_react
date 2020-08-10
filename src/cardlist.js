import React from 'react';
import Card from './card';

const cardlist =({robo})=>{

	

	// if(true){
	// 	throw new Error('Heloooooo');
	// }

    const robot_a=robo.map((user,i)=>{
        return < Card key={i} id={robo[i].id} name={robo[i].name} email={robo[i].email} />
    })

    return(
        <div>
           {robot_a};
        </div>
    );
}

export default cardlist;