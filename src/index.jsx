import React from 'react';
import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';

import 'bulma/css/bulma.css';
import 'react-responsive-carousel/lib/styles/main.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import img1 from './img/shampoo1.jpg'
import img2 from './img/shampoo2.jpg'
import img3 from './img/shampoo3.jpg'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 0
    }

    // This binding is necessary to make `this` work in the callback
    this.add = this.add.bind(this);
    this.remove = this.remove.bind(this);
    this.order = this.order.bind(this);
  }

  add () {
    this.setState(prevState => ({
      quantity: prevState.quantity + 1
    }));
  }

  remove () {
    this.setState(prevState => ({
      quantity: prevState.quantity > 0 ? prevState.quantity - 1 : 0
    }));
  }

  order () {
    alert(`Please pick up your order (${this.state.quantity} item${this.state.quantity > 1 ? 's' : ''}) at the counter`)
  }

  render() {
    return <div>
      <section className="section">
        <div className="container">
          <h1 className="title has-text-centered">
            Select product and quantity below
          </h1>
          <Carousel autoPlay={ false } emulateTouch={ true } >
            <div>
              <img src={ img1 } />
              <p className="legend">Moisture Replenishment</p>
            </div>
            <div>
              <img src={ img2 } />
              <p className="legend">Moisture + Oxygen</p>
            </div>
            <div>
              <img src={ img3 } />
              <p className="legend">Moisture + Oil shampoo</p>
            </div>
          </Carousel>

          <p className="is-size-3 has-text-centere">
            { this.state.quantity } Item{this.state.quantity > 1 ? 's' : ''} selected
          </p>

          <div className="buttons is-centered">
            <a className="button is-success is-large" onClick={ this.add }>Add to order</a>
            <a className="button is-warning is-large" onClick={ this.remove }>Remove from order</a>
            <a className="button is-info is-large" onClick={ this.order }>Order</a>
          </div>
        </div>
      </section>
    </div>
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
