import React, { Component } from 'react'
import { Card, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

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
    render() {
        return (
            <Container>
                <div>
                    {this.state.recipes.map(recipe => {
                        return (

                            <Col>
                                <Card>
                                    <Card.Header>{recipe.name}</Card.Header>
                                    <Card.Body>
                                        <Card.Text>{recipe.description}</Card.Text>
                                        <Card.Text>{recipe.review}</Card.Text>
                                        <Card.Text>{recipe.like}</Card.Text>
                                        <Link to={`/recipes/${recipe.id}`}>Show Details</Link>
                                    </Card.Body>
                                </Card>
                            </Col>

                        )
                    })}

                </div>
            </Container>
        )
    }
}
