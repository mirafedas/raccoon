import React from 'react';
import './App.css';
import HighFiveButton from './components/HighFiveButton/index.js';
import RaccoonImg from './components/RaccoonImg/index.js';
import { connect } from 'react-redux';
import { activateGeod, closeGeod } from './redux';

export class App extends React.Component {
  render() {
    return (
    <div className="App">
      <header className="App-header">
      <p>
        Give high five to a raccon, don't be shy!
      </p>
      <RaccoonImg />
      <HighFiveButton />
      </header>
    </div>
  );
}

// AppContainer.js
const mapStateToProps = state => ({
  geod: state.geod,
});

const mapDispatchToProps = {
  activateGeod,
  closeGeod,
};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;

export default App;
