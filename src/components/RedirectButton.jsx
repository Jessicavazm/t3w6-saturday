import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';

export default class RedirectButton extends Component {
    constructor(props) {
        super(props);

        this.state = {
            shouldRedirect: false
        }
    }

    toggleShouldRedirect = () => {
        this.setState({ shouldRedirect: !this.state.shouldRedirect });
    }

    render() {
        return (
            <>
                <button onClick={this.toggleShouldRedirect}>
                    Go to HomePage
                </button>
                {/* && Operator => If this is true, do this */}
                {this.state.shouldRedirect && <Navigate to={"/"} />}
            </>
        )
    }
}