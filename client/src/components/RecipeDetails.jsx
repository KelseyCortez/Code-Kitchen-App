import React, { Component } from 'react'
import LikesButton from './LikesButton';

export default class RecipeDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            details: {},
            loading: true,
        }
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        fetch(`/api/v1/recipes/${id}`)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    details: data,
                    loading: false,
                })
            })
    }

    render() {
        const { loading, details } = this.state;
        if (loading) {
            return <div>Loading...</div>
        }
        return (
            <div className="RecipeDetails">
                <h2>{details.name}</h2>
                <div>
                    <p>{details.description} </p>

                </div>
                <LikesButton id={details.id}/>
               
            </div>



        )
    }
}
