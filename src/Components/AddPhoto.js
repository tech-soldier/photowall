import React, {Component} from "react";

export default class AddPhoto extends Component {

    constructor() {
        super()
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event) {
        event.preventDefault()
        const imageLink = event.target.elements.link.value
        const description = event.target.elements.description.value
        const post ={
            id: Number(new Date()),
            description: description,
            imageLink: imageLink
        }
        if (description && imageLink) {
            this.props.onAddPhoto(post)
        }
    }

    render() {
        return (
            <div className="form">
                <h1>Photowall</h1>
                <form action="" onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Link" name="link"/>
                    <input type="text" placeholder="Description" name="description"/>
                    <button>Post</button>
                </form>
            </div>
        )
    }
}