import React, { Component } from 'react'
import styles from './NewRecipeForm.module.css';

export default class NewRecipeForm extends Component {
    state = {
        name: '',
        url: '',
        description: '',
        review: '',
        vegetarian: false,
        vegan: false,
        glutenfree: false,

    }
    //send data to API
    handFormSubmit = (e) => {
        e.preventDefault();
        fetch('/api/v1/recipes/', {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: { 
                'Content-Type': 'application/json;charset=UTF-8'
            }
        })
            .then(res => res.json())
            .then(data => {
                this.props.history.push(`/recipes/${data.id}`);
            })

    }
    handleChange = (e) => {
        const { value, name } = e.target;
        this.setState({
            [name]: value,
        })
    }
    handleCheckBoxChange = (e) => {
        const { checked, name } = e.target;
        this.setState({
            [name]: checked
        })
    }

    render() {
        return (
            <div className= {styles.NewRecipeForm}>
                <h2>Submit A Recipe</h2>
                <form onSubmit={this.handFormSubmit}>
                    <div className={styles.formGroup}>
                        <label htmlFor="name" >Recipe Name</label>
                        <input type="text" id="name" name="name" value={this.state.name} onChange={this.handleChange} />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="url">Recipe URL</label>
                        <input type="text" id="url" name="url" value={this.state.url} onChange={this.handleChange}/>
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="description">Recipe Description</label>
                        <textarea type="text" id="description" name="description" value={this.state.description} onChange={this.handleChange}/>
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="review">Recipe Review</label>
                        <textarea type="text" id="review" name="review" value={this.state.review} onChange={this.handleChange}/>
                    </div>
                    <div className={styles.formGroup}>
                        <ul>
                            <li>
                                <input type="checkbox" id="vegetarian" name="vegetarian" checked={this.state.vegetarian} onChange={this.handleCheckBoxChange}></input>
                                <label htmlFor="vegetarian">Vegetarian</label>
                            </li>
                            <li>
                                <input type="checkbox" id="vegan" name="vegan" checked={this.state.vegan} onChange={this.handleCheckBoxChange}></input>
                                <label htmlFor="vegan">Vegan</label>
                            </li>
                            <li>
                                <input type="checkbox" id="glutenfree" name="glutenfree" checked={this.state.glutenfree} onChange={this.handleCheckBoxChange}></input>
                                <label htmlFor="glutenfree">Gluten Free</label>
                            </li>
                        </ul>
                    </div>
                    <button type="submit">Add Recipe</button>
                </form>
            </div>
        )
    }
}

