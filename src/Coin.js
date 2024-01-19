// Takes in prop for side, displays coin only
// API link for coin variable: https://tinyurl.com/react-coin-heads-jpg

import React, { Component } from 'react';
import './Coin.css';

class Coin extends Component {

    render() {
        return (
            <div className='Coin'>
                <img src={`https://tinyurl.com/react-coin-${this.props.side}-jpg`} alt={this.props.side} />
            </div>
        )
    }
}

export default Coin;