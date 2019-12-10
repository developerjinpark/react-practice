import React, { Component } from 'react';
import StyledButton from './components/StyledButton';
// import Button from './components/Button';
// import UsingCSSModule from './UsingCSSModule';

class App extends Component {
  render () {
    return (
      <div>
        <StyledButton big>Button</StyledButton>
        {/* <UsingCSSModule /> */}
      </div>
    )
  }
}

export default App;
