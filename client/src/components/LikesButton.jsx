import React, { Component } from 'react'

export default class LikesButton extends Component {
    constructor(props) {
        super(props)

        this.state = {
            like: 0,
        }
    }
    componentDidMount() {
        const { id } = this.props;
        fetch(`/api/v1/recipes/${id}`)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    like: data.like
                })
            })
    }

    increaseLikes = () => {
        const { id } = this.props;
        fetch(`/api/v1/recipes/${id}/like`, {
            method: 'POST'
        })
            .then(res => res.json())
            .then(data => {
                this.setState({
                    like: data
                })
            })

    }
    render() {
        return (
            <div>
                <button onClick={this.increaseLikes}>
                    <span role="img" aria-label="Likes: ">👍</span> {this.state.like}
                </button>
            </div>
        )
    }
}
