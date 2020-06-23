import React, { Component } from 'react'

export default class NewRecipe extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            newData: [],
             
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        
    }
    
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
