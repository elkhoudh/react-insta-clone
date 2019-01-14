import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import NavBar from "./components/NavBar/NavBarContainer";
import HomeContainer from "./components/Home/HomeContainer";

import "./App.scss";

class App extends Component {
  render() {
    const { Insta } = this.props;
    console.log(Insta);
    return (
      <div className="App">
        <NavBar />
        <HomeContainer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  Insta: state.Insta.data
});

App.propTypes = {
  Insta: PropTypes.arrayOf(
    PropTypes.shape({
      comments: PropTypes.arrayOf(
        PropTypes.shape({
          username: PropTypes.string,
          text: PropTypes.string
        })
      ),
      username: PropTypes.string,
      timestamp: PropTypes.string,
      thumbnailUrl: PropTypes.string,
      likes: PropTypes.number,
      imageUrl: PropTypes.string
    })
  )
};

export default connect(mapStateToProps)(App);
