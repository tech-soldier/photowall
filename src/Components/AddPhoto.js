import React, {Component} from "react";

export default class AddPhoto extends Component {
    render() {
        return (
            <div className="form">
                <h1>Photowall</h1>
                <form action="">
                    <input type="text" placeholder="Link"/>
                    <input type="text" placeholder="Description"/>
                    <button>Post</button>
                </form>
            </div>
        )
    }
}