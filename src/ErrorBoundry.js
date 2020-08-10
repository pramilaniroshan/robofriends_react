import React, { Component } from 'react';

class ErrorBoundry extends Component{

	

	constructor(props){

		super(props);

		this.state={
			hasError : false
		}

	}

	 componentDidCatch(error, info) {
	 	this.setState.hasError({ hasError:true });
	 }

	
	render(){
			
			if(this.state.hasError){
				return <h1>OOOOOOOOOPS</h1>
				}
			 

			else{ return this.props.children }
				
			}	
				
			
			
		
	
}

export default ErrorBoundry;