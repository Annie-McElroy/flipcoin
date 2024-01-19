// Parent component - contains props, state, and event
// Import Coin
// Import React
// Props = coins: Side (Head or Tails) and url
// State: side = null, number of flips, and number of heads
// Event to flip coin, need random method to choose coin
// Count how many times flipped and heads & tails is provided

import React, { Component } from 'react';
import Coin from './Coin';
import './Coin.css';

class Flip extends Component {

    static defaultProps = {
        coins: [
            {
                side: 'heads',
                url: `https://tinyurl.com/react-coin-heads-jpg`
            },
            {
                side: 'tails',
                url: `http://tinyurl.com/react-coin-tails5-jpg`
            }
        ]
    };

    constructor(props) {
        super(props);
        this.state = { 
            coin: null,
            totalFlips: 0,
            heads: 0
        };
        this.handleClick = this.handleClick.bind(this);
    };

    chooseCoin() {
        const indx = Math.floor(Math.random() * this.props.coins.length);
        return this.props.coins[indx];
    };

    
    flip() {
        // variable for new side
        const newCoin = this.chooseCoin();
        console.log(newCoin);

        // setState to change state side = new side, totalFlips = current state +1, heads = count of heads variable
        this.setState(curSt => {
            // variable for count of heads = take current state of heads and +1 if new side = heads else 0
            const headsCount = curSt.heads + (
                newCoin.side === 'heads' ? 1 : 0
            )
            return {
                coin: newCoin,
                totalFlips: curSt.totalFlips + 1,
                heads: headsCount
            }
        });
    };

    handleClick() {
        this.flip();
    };
    
    render() {
        return (
            <section className='FlipContainer'>
                <h1>Flip a coin!</h1>
                <div>
                    {this.state.coin && <Coin coin={this.state.coin} />}
                    <button onClick={this.handleClick}>FLIP!</button>
                    <p>
                        Out of {this.state.totalFlips}, there have been {this.state.heads} heads and {this.state.totalFlips - this.state.heads} tails.
                    </p>
                </div>
            </section>
        )
    };
};

export default Flip;