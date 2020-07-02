import React, { Component } from 'react';
import './style.css'

class FaqItem extends Component {
    state = {

        isExpanded: false,
        isSecondExpanded: false
    }

    handleExpand = () => {

        this.setState({ isExpanded: !this.state.isExpanded });

    }
    handleSecondExpand = () => {

        this.setState({ isSecondExpanded: !this.state.isSecondExpanded });

    }
    render() {
        
        return (
            <div className="quest">
                <div className="ans">
                    <h4>{this.props.data.question}</h4>
                    <button onClick={this.handleExpand}> {this.state.isExpanded ? " V " : " X "}</button>
                </div>
                <div style={this.state.isExpanded ? { display: "block" } : { display: "none" }}>
                    <div className="ans">
                        <p>{this.props.data.answer}</p>
                        <button onClick={this.handleSecondExpand}>{this.state.isSecondExpanded ? " X " : " V "}</button>
                    </div>
                    <div style={this.state.isSecondExpanded ? { display: "block" } : { display: "none" }}>
                        {this.props.data.answerLong}
                    </div>


                </div>
            </div>
        );
    }
}

export default FaqItem;