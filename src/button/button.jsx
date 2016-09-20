import React from 'react';
import ReactDOM from 'react-dom';

require('./button.css');

class Button extends React.Component {
    render() {
        return (
            <button className='button'>
                <span className='button__text'>
                    { this.props.children || 'Button' }
                </span>
            </button>
        );
    }
}

export default Button;
