import React, { Component } from 'react';
import BlockstackContext from 'react-blockstack/dist/context';
import { BlockstackButton } from 'react-blockstack-button';

// Demonstrating BlockstackContext for legacy React Class Components.

export default class Landing extends Component {
  static contextType = BlockstackContext;
  render() {
    const { signIn } = this.context;
    return (
      <div className="Landing">
        <div className="justify-center jumbotron jumbotron-fluid pt-3 mb-0">
          <div className="container">
            <div className="panel-landing text-center mt-3">
              <h1 className="landing-heading">Dortfolio - Decentralized Cryptocurrency Portfolio</h1>

              <div className="card mt-4 border-info">
                <div className="card-header">
                  <h5 className="card-title">App Demo</h5>
                </div>
                <div className="card-body">
                  <p>
                  How can you share the investment portfolio without data leaking, even the platform itself can't touch it?
                  </p>
                  <p>
                  How can you share it with trust identity only?
                  </p>
                  <p>
                    Decentralized blockchain technology is your choice.
                  </p>
                </div>

                <p className="card-link mb-5">
                  <BlockstackButton onClick={signIn} />
                </p>

                <div className="card-footer text-info">

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
