import React from "react";
import PostContainer from "./PostContainer";
import SideBarContainer from "./SideBarContainer";
import "./Home.scss";

const HomeContainer = props => {
  return (
    <div className="home-container">
      <PostContainer />
      <SideBarContainer />
    </div>
  );
};

export default HomeContainer;
