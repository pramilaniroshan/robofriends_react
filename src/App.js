import React, { Component } from 'react';
import Cardlist from './cardlist';
import SearchBox from './searchbox';
import Scroll from './Scroll';
import './App.css';




class App extends Component {
     
    constructor(){
        super()
         this.state={
            
            robots : [ ],
            searchField : ''
        }
        
    }
componentDidMount=()=>{
            fetch(' https://jsonplaceholder.typicode.com/users')
            .then(response => {
                return response.json();
            })
            .then(users => {
                this.setState({robots:users})
                console.log(users);
            });
    }
   

    OnSearchChange = (event) => {
        
        this.setState({searchField : event.target.value});
       
        // console.log(filterdrobots);
        // console.log(event.target.value);
    }

    render(){
        

        const filterdrobots=this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase())
        })

       

    if(this.state.robots.length===0){
        return(
        

            <div className='tc'>
                <h1 className='f1'>Loading..</h1>
                <div>
        
      </div>
                
            </div>
            );
    }else{
        return(
        

            <div className="tc">
                <h1 className='f1'>Robo Friends</h1>

                <SearchBox SearchChange={this.OnSearchChange}/>
                <Scroll>
                <Cardlist robo={filterdrobots} />
                </Scroll>
            </div>
            );
    }
}
}

export default App;