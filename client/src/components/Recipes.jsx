import React, { Component } from 'react'
import { Card, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LikesButton from './LikesButton';

export default class Recipes extends Component {
    constructor() {
        super();
        this.state = {
            recipes: [],
        }
    }
    componentDidMount() {
        fetch('/api/v1/recipes')
            .then(res => res.json())
            .then(data => {
                this.setState({
                    recipes: data
                })
            })
    }
    handleLike = (id, newLike) => {
        const newRecipe = this.state.recipes.find((recipe) => recipe.id === id)
        newRecipe.like = newLike
        const newRecipes = this.state.recipes.map(recipe => {
            if (recipe.id === id) {
                return newRecipe

            }
            return recipe;
        })
        this.setState({
            recipes: newRecipes
        })
    }

    render() {
        return (
            <Container>
                <div>
                    {this.state.recipes.map(recipe => {
                        return (
                            <div key={recipe.id}>
                                <Col>
                                    <Card>
                                        <Card.Header>{recipe.name}</Card.Header>
                                        <Card.Body>
                                            <Card.Text>{recipe.description}</Card.Text>
                                            <Card.Text>{recipe.review}</Card.Text>
                                            <Link to={`/recipes/${recipe.id}`}>Show Details</Link>
                                            <LikesButton id={recipe.id} />
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </div>
                        )
                    })}
                </div>
                <Link to="recipes/new">Submit Review</Link>
            </Container>
        )
    }
}
