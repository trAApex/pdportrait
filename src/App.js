import React, { Component } from 'react';

import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import BackDrop from './components/BackDrop/BackDrop';
import Example from './components/Carousel/Carousel';
import FlexBox from './components/FlexBox/FlexBox';
import Instagram from './components/InstagramFooter/Instagram';
import Footer from './components/Footer/Footer';

import './App.css';


class App extends Component {

  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  };


  render() {
    let backDrop;

    if (this.state.sideDrawerOpen) {
      backDrop = <BackDrop click={this.backdropClickHandler}/>
    }
    return (
      <div>
        <header>
          <nav>
            <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
            <SideDrawer show={this.state.sideDrawerOpen} />
            {backDrop}
          </nav>
        </header>

        <article>
          <Example />
            <hr />

          <FlexBox />
            <hr />

          <Instagram />
        </article>

          <Footer />

      </div>
    );
  }
}

export default App;