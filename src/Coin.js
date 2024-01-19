// Takes in prop for coin to include URL and side, displays coin only

import React, { Component } from 'react';
import './Coin.css';

class Coin extends Component {

    render() {
        return (
            <div className='Coin'>
                <img src={this.props.coin.url} alt={this.props.coin.side} />
            </div>
        )
    }
}

export default Coin;