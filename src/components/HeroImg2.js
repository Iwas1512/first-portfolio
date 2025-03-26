import "./HeroImg2Styles.css";
import React, { Component } from 'react';

class HeroImg2 extends Component {
    render() {
        return (
            <div className="hero-img">
                <div className="heading">
                    <h1>{this.props.heading}</h1>
                    <div className="text-box">
                        <p>{this.props.text}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default HeroImg2;