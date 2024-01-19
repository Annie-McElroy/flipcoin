// Parent component - contains props, state, and event
// Import Coin
// Import React
// Props: Side (Head or Tails)
// State: empty array for Side
// Event to flip coin, need random between two
// Count how many times flipped and heads & tails is provided

import React, { Component } from 'react';
import Coin from './Coin';
import './Coin.css';

class Flip extends Component {

    static defaultProps = {
        sides: [ 'heads', 'tail']
    }

    constructor(props) {
        super(props);
        this.state = { 
            side: 'heads',
            totalFlips: 0,
            heads: 0
        };
        this.handleClick = this.handleClick.bind(this);
    };

    chooseSide() {
        const indx = Math.floor(Math.random() * this.props.sides.length)
        return this.props.sides[indx];
    }

    
    flip() {
        // variable for new side
        const newSide = this.chooseSide();
        console.log(newSide)
        // setState to change state side = new side, totalFlips = current state +1, heads = count of heads variable
        this.setState(curSt => {
            // variable for count of heads = take current state of heads and +1 if new side = heads else 0
            const headsCount = curSt.heads + (
                newSide === 'heads' ? 1 : 0
            )
            return {
                side: newSide,
                totalFlips: curSt.totalFlips + 1,
                heads: headsCount
            }
        })
    }

    handleClick() {
        // this.chooseSide();
        this.flip();
    }
    
    render() {
        // console.log(this.props.sides.length)

        return (
            <section className='FlipContainer'>
                <h1>Flip a coin!</h1>
                <div>
                    <Coin side={this.state.side} />
                    <button onClick={this.handleClick}>FLIP!</button>
                    <p>
                        Out of {this.state.totalFlips}, there have been {this.state.heads} heads and {this.state.totalFlips - this.state.heads} tails.
                    </p>
                </div>
            </section>
        )
    }


}

export default Flip;